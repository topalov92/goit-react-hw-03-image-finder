import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import getImages from './services/imageAPI';

import { Searchbar } from './Components/Searchbar/Searchbar';
import { Spiner } from './Components/Loader/Spiner';
import { ImageGallery } from './Components/ImageGallery/ImageGallery';
import { Button } from './Components/Button/Button';
import { Modal } from './Components/Modal/Modal';

import { Container } from './App.styles';

class App extends React.Component {
    state = {
        page: 1,
        images: [],
        searchQuery: '',
        showModal: false,
        largeImage: '',
        status: 'idle',
        error: null,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImages();
        }

        if (prevState.page !== this.state.page) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }
    }

    handleFormSubmit = searchQuery => {
        this.setState({
            searchQuery: searchQuery.trim(),
            page: 1,
            images: [],
            status: 'idle',
            error: null,
        });
    };

    fetchImages = () => {
        const { page, searchQuery } = this.state;
        const options = { searchQuery, page };

        this.setState({ status: 'pending' });

        getImages(options)
            .then(hits => {
                this.setState(prevState => ({
                    page: prevState.page + 1,
                    images: [...prevState.images, ...hits],
                    status: 'resolved',
                }));

                if (hits.length > 0) {
                    toast.success('We have a picture for you!', {
                        position: 'bottom-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

                if (hits.length === 0) {
                    toast.info('Picture is not found', {
                        position: 'bottom-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch(error => {
                this.setState({ error, status: 'rejected' });

                toast.error('Error!', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    openModal = largeImageURL => {
        this.setState({
            showModal: true,
            largeImage: largeImageURL,
        });
    };

    toggleModal = () => {
        this.setState({
            largeImage: '',
            showModal: false,
        });
    };

    render() {
        const { images, showModal, largeImage, status } = this.state;

        return (
            <Container>
                <Searchbar onSubmit={this.handleFormSubmit} />
                <>
                    {status === 'pending' && <Spiner />}
                    {status === 'resolved' && (
                        <>
                            <ImageGallery
                                images={images}
                                openModal={this.openModal}
                            />

                            {images.length > 0 && (
                                <Button onClick={this.fetchImages} />
                            )}
                        </>
                    )}
                </>

                {showModal && (
                    <Modal onClose={this.toggleModal}>
                        <img src={largeImage} alt="" />
                    </Modal>
                )}
                <ToastContainer />
            </Container>
        );
    }
}

export default App;
