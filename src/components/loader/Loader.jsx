import { Backdrop } from './Loader.styled';
import { SpinnerCircularSplit } from 'spinners-react';

export const Loader = () => {
    return (
        <Backdrop>
            <SpinnerCircularSplit />
        </Backdrop>
    );
};
