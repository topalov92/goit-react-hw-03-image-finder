import React from 'react';
import PropTypes from 'prop-types';

import { LoadMoreBtn } from './Button.styles';

export const Button = ({ onClick }) => {
    return (
        <LoadMoreBtn type="button" onClick={onClick}>
            Load more
        </LoadMoreBtn>
    );
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};
