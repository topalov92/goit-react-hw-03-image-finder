import React from 'react';
import Loader from 'react-loader-spinner';
import { LoaderStyled } from './Loader.styles';

export const Spiner = () => {
    return (
        <LoaderStyled>
            <Loader type="Bars" color="#00BFFF" height={200} width={200} />
        </LoaderStyled>
    );
};
