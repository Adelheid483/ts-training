export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary',
}

export interface ICardProps {
    width?: string,
    height?: string,
    variant: CardVariant,
    children?: React.ReactChild | React.ReactNode,
    onClick: (num: number) => void,
}

export interface IAddress {
    street: string;
    city: string;
    zipcode: string;
}

export interface IUser {
    id: number;
    name: string;
    email: string;
    address: IAddress;
}
