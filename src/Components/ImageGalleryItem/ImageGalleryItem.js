import React from 'react';
import PropTypes from 'prop-types';

import {
    ImageGalleryItemStyled,
    ImageGalleryStyled,
} from './ImageGalleryItem.styles';
export const ImageGalleryItem = ({
    imageUrl,
    tags,
    largeImageURL,
    openModal,
}) => {
    return (
        <ImageGalleryItemStyled>
            <ImageGalleryStyled
                src={imageUrl}
                alt={tags}
                onClick={() => openModal(largeImageURL)}
            />
        </ImageGalleryItemStyled>
    );
};

ImageGalleryItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
};
