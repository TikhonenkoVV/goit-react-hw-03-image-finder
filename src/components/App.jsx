import { Component } from 'react';
import { Searchbar } from './search-bar/SearchBar';
import { Container, Button } from './App.styled';
import { Gallary } from './image-gallery/ImageGallery';
import { getImages } from 'services/image-service';
import { animateScroll } from 'react-scroll';
import { Loader } from './loader/Loader';
import { Modal } from './modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export class App extends Component {
    state = {
        largeImageUrl: '',
        alt: '',
        query: '',
        page: 1,
        images: [],
        showButton: false,
        isLoading: false,
        isEmpty: false,
        error: '',
    };

    componentDidUpdate(_, prevState) {
        if (
            prevState.query !== this.state.query ||
            prevState.page !== this.state.page
        ) {
            this.setState({ isLoading: true });
            getImages(this.state.query, this.state.page)
                .then(data => {
                    if (!data.hits.length) {
                        this.setState({ isEmpty: true });
                        toast('Sorry. There are no images ... 😭');
                        return;
                    }
                    this.setState(prevState => ({
                        images: [...prevState.images, ...data.hits],
                        showButton:
                            this.state.page < Math.ceil(data.total / 12),
                    }));
                    if (this.state.page >= Math.ceil(data.total / 12))
                        toast(
                            `We're sorry, but you've reached the end of search results.`
                        );
                })
                .catch(err => {
                    console.log(err);
                    this.setState({ error: err.message });
                })
                .finally(() => {
                    this.setState({ isLoading: false });
                });
        }
    }

    onSubmit = query => {
        this.setState({
            query,
            page: 1,
            images: [],
            showButton: false,
            isEmpty: false,
            error: '',
        });
    };

    loadMore = () => {
        this.setState(prevState => ({ page: prevState.page + 1 }));
        this.scrollOnMoreButton();
    };

    scrollOnMoreButton = () => {
        animateScroll.scrollToBottom({
            duration: 1000,
            delay: 10,
            smooth: 'linear',
        });
    };

    toggleModal = (largeImageUrl = '', alt = '') => {
        this.setState({ largeImageUrl: largeImageUrl, alt: alt });
        !largeImageUrl
            ? enableBodyScroll(document.body)
            : disableBodyScroll(document.body);
    };

    render() {
        return (
            <Container>
                <Searchbar onSubmit={this.onSubmit} />
                <Gallary
                    onCardClick={this.toggleModal}
                    images={this.state.images}
                />
                {this.state.showButton && (
                    <Button type="button" onClick={this.loadMore}>
                        Load more
                    </Button>
                )}
                {this.state.isLoading && <Loader />}
                {this.state.largeImageUrl && (
                    <Modal
                        largeImageUrl={this.state.largeImageUrl}
                        alt={this.state.alt}
                        onClose={this.toggleModal}
                    />
                )}
                <ToastContainer />
            </Container>
        );
    }
}
