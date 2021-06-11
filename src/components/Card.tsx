import React, {FC, useState} from "react";
import { CardVariant, ICardProps } from "../interfaces";

export const Card: FC<ICardProps> = ({width, height, variant, children, onClick}) => {

    const [state, setState] = useState(0);

    return (
        <div style={{width, height, 
            border: variant === CardVariant.outlined ? '1px solid grey' : 'none',
            background: variant === CardVariant.primary ? 'pink' : ''
        }}
            onClick={() => onClick(state)}
        >
            {children}
        </div>
    );
}; 
