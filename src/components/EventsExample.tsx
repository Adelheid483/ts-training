import React, {FC, useRef, useState} from 'react';

export const EventsExample: FC = () => {

    const [value, setValue] = useState<string>('');
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const styleDrag = {
        width: '400px',
        height: '150px',
        border: '2px solid purple',
        background: isDrag ? 'pink' : 'blue',
        margin: '10px',
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Controlled - ', value);
        console.log('Uncontrolled - ', inputRef.current!.value);
        // ! или ? после current - так показываем что что-то будет (типизация ref)
    };

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('Drag start');
    };

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(() => false);
        console.log('Stop drag');
    };

    // вышли за пределы дива
    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(() => false);
    };

    // внутри дива
    const overHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(() => true);
    };

    return (
        <section>
            <input type="text" onChange={changeHandler} value={value} placeholder="Controlled"/>
            <input type="text" ref={inputRef} placeholder="Uncontrolled"/>
            <button onClick={clickHandler}>Send to Log</button>
            <div style={styleDrag} draggable onDrag={dragHandler}> </div>
            <div
                style={styleDrag}
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={overHandler}
            > </div>
        </section>
    );
};
