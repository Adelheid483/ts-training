import React, {FC, useState} from 'react';

export const EventsExample: FC = () => {

    const [value, setValue] = useState<string>('');

    const styleDrag = {
        width: '400px',
        height: '150px',
        border: '2px solid purple',
        background: 'pink',
        margin: '10px',
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value);
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag start');
    };

    return (
        <section>
            <input type="text" onChange={changeHandler} value={value}/>
            <button onClick={clickHandler}>Send to Log</button>
            <div style={styleDrag} draggable onDrag={dragHandler}> </div>
            <div style={styleDrag}> </div>
        </section>
    );
};
