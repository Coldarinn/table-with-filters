import { useEffect } from "react";
import { useState } from "react";

export const Filters = ({ items, setItems }) => {
	const [searchValue, setSearchValue] = useState('');
	const [column, setColumn] = useState('');
	const [condition, setCondition] = useState('');

	const sorting = (searchVal, columnVal, conditionVal) => {
		if (searchVal === '' || !columnVal || !conditionVal) {
			return;
		};

		const copyItems = items.concat();
		let sortedItems;
		if (conditionVal === 'равно') {
			sortedItems = copyItems.filter((item) => item[columnVal] === searchVal);
		} else if (conditionVal === 'содержит') {
			sortedItems = copyItems.filter((item) => item[columnVal].toLowerCase().includes(searchVal.toLowerCase()));
		} else if (conditionVal === 'больше') {
			sortedItems = copyItems.filter((item) => (columnVal === 'amount' || columnVal === 'distance') ? +item[columnVal] > +searchVal : item[columnVal] > searchVal);
		} else if (conditionVal === 'меньше') {
			sortedItems = copyItems.filter((item) => (columnVal === 'amount' || columnVal === 'distance') ? +item[columnVal] < +searchVal : item[columnVal] < searchVal);
		} else {
			alert("Неопознанное значение в поле условия");
		};

		setItems(sortedItems);
	};

	const handleSearch = (value) => {
		setSearchValue(value);
		sorting(value, column, condition);
	};

	const handleChangeColumn = (value) => {
		setColumn(value);
		sorting(searchValue, value, condition);
	};

	const handleChangeCondition = (value) => {
		setCondition(value);
		sorting(searchValue, column, value);
	};

	useEffect(() => {
		setTimeout(() => {
			sorting(searchValue, column, condition);
		}, 0)
	}, [items]);

	return (
		<div className="table__filters filters">
			<form className="filters__form" onSubmit={(event) => event.preventDefault()}>
				<input type='text' className="filters__search" value={searchValue} onChange={(event) => handleSearch(event.target.value)} />
				<div className="filters__selects selects-filters">
					<select className="selects-filters__item" value={column} onChange={(event) => handleChangeColumn(event.target.value)}>
						<option value="" hidden>Выберите колонку</option>
						<option value="name">Название</option>
						<option value="amount">Количество</option>
						<option value="distance">Расстояние</option>
					</select>
					<select className="selects-filters__item" value={condition} onChange={(event) => handleChangeCondition(event.target.value)}>
						<option value="" hidden>Выберите условие</option>
						<option value="равно">Равно</option>
						<option value="содержит">Содержит</option>
						<option value="больше">Больше</option>
						<option value="меньше">Меньше</option>
					</select>
				</div>
			</form>
		</div>
	);
};