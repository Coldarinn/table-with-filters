import { useEffect } from "react";
import { useState } from "react";
import { Filters } from "./Filters";
import { Loader } from "./Loader";

export const Table = ({ isLoading, items }) => {
	const [sortedItems, setSortedItems] = useState(null);

	useEffect(() => {
		setSortedItems(items);
	}, [items]);

	return (
		<div className="table">
			<Filters items={items} setItems={setSortedItems} />
			<div className="table__wrapper">
				{isLoading ? <Loader /> : (
					<>
						{sortedItems && sortedItems?.length === 0 ? (<div className="table__sorted">По указанным фильтрам ничего не найдено</div>) : (
							<div className="table__body">
								<div className="table__row">
									<div className="table__item table__item--bold">
										Дата
									</div>
									<div className="table__item table__item--bold">
										Название
									</div>
									<div className="table__item table__item--bold">
										Количество
									</div>
									<div className="table__item table__item--bold">
										Расстояние
									</div>
								</div>
								{sortedItems?.map((item) => (
									<div className="table__row" key={item._id}>
										<div className="table__item">
											{item.date}
										</div>
										<div className="table__item">
											{item.name}
										</div>
										<div className="table__item">
											{item.amount}
										</div>
										<div className="table__item">
											{item.distance}
										</div>
									</div>
								))}
							</div>
						)
						}
					</>
				)}
			</div >
		</div >
	)
};