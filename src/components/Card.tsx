import React, {FC, useState} from "react";

interface CardProps {
    width: string,
    height: string,
    children: React.ReactChild | React.ReactNode,
    onClickHandler: (num: number) => void,
}

export const Card: FC<CardProps> = ({width, height, children, onClickHandler}) => {

    const [stateNum, setStateNum] = useState(0);

    const stylesDiv = {
        width,
        height,
        border: '2px solid blue'
    };

    return (
        <div style={stylesDiv} onClick={() => onClickHandler(stateNum)}>{children}</div>
    );
};
