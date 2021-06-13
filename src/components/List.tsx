import React, {FC} from 'react';

// T значит что этот дженерик мб любого типа
interface ListProps<T> {
    items: T[]; // массив элеменов любого типа
    renderItem: (item: T) => React.ReactNode //компонент который необходимо отрисовать
}

// для корректной работы с дженериком объявлять List через function ?????
export default function List<T>(props: ListProps<T>) {
    return (
        <ul>
            {props.items.map(props.renderItem)}
        </ul>
    )
}
