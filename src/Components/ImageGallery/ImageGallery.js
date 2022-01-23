import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryList } from './ImageGallery.styles';

export const ImageGallery = ({ images, openModal }) => {
    return (
        <ImageGalleryList>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    imageUrl={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                    openModal={openModal}
                />
            ))}
        </ImageGalleryList>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    openModal: PropTypes.func.isRequired,
};

// export class ImageGallery extends React.Component {
//     state = {
//         images: [],
//         error: null,
//         status: 'idle',
//     };
//     componentDidUpdate(prevProps, prevState) {
//         const prevQuery = prevProps.searchQuery;
//         const nextQuery = this.props.searchQuery;

//         if (prevQuery !== nextQuery) {
//             console.log('Изменился запрос');

//             this.setState({ status: 'pending' });
//             setTimeout(() => {
//                 axios
//                     .get(
//                         `https://pixabay.com/api/?key=21947643-3ad5511e98ce1ab16d6eede2a&q=${nextQuery}&image_type=photo&page=1&per_page=12&orientation=horizontal`,
//                     )
//                     .then(res => {
//                         console.log(res.data);
//                         console.log(res.data.hits);

//                         return this.setState({
//                             images: res.data.hits,
//                             status: 'resolved',
//                         });
//                     })
// .catch(error =>
//     this.setState({ error, status: 'rejected' }),
//                     );
//             }, 1500);
//         }
//     }

//     render() {
//         const { images, error, status } = this.state;

//         if (status === 'idle') {
//             return <div>Введи запрос</div>;
//         }

//         if (status === 'pending') {
//             return <div>Загружаем...</div>;
//         }

//         if (status === 'rejected') {
//             return <p>{error.message}</p>;
//         }

//         if (status === 'resolved') {
//             return (
//                 <ul className="ImageGallery">
//                     {images.map(({ id, webformatURL, tags }) => (
//                         <ImageGalleryItem
//                             key={id}
//                             imageUrl={webformatURL}
//                             tags={tags}
//                         />
//                     ))}
//                 </ul>
//             );
//         }
//     }
// }
