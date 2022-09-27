import { useEffect, useState } from 'react';
import { Table } from './components/Table';
import axios from "axios";
import './style.scss';
import { Pagination } from './components/Pagination';

function App() {
	const API_URL = 'http://localhost:8080/api/';
	const limit = 5;
	const [items, setItems] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [page, setPage] = useState(1);

	const fetchItems = async () => {
		try {
			setIsLoading(true);
			const response = await axios.get(`${API_URL}items/all?limit=${limit}&offset=${(page - 1) * limit}`);
			setItems(response.data)
		} catch (error) {
			console.log('error: ', error);
		} finally {
			setIsLoading(false);
		};
	};

	useEffect(() => {
		fetchItems();
	}, [page]);

	return (
		<div className="App">
			<div className='container'>
				{items?.length > 0 ? <Table isLoading={isLoading} items={items?.items} /> : <div className='empty'>Записей пока что нету</div>}
				{items?.length > limit && <Pagination page={page} setPage={setPage} limit={limit} length={items?.length} />}
			</div>
		</div>
	);
}

export default App;
