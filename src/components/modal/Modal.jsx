import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ImgWrapper, LargeImage, Overlay } from './Modal.styled';

export class Modal extends Component {
    static propTypes = {
        onClose: PropTypes.func.isRequired,
        largeImageUrl: PropTypes.string.isRequired,
    };

    componentDidMount() {
        window.addEventListener('keydown', this.onEscPress);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onEscPress);
    }

    onEscPress = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };

    onBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    };

    render() {
        const { largeImageUrl, alt } = this.props;
        return createPortal(
            <ModalBackdrop onClick={this.onBackdropClick}>
                <ImgWrapper>
                    <LargeImage src={largeImageUrl} alt={alt} />
                    <Overlay>{alt}</Overlay>
                </ImgWrapper>
            </ModalBackdrop>,
            document.getElementById('modal-root')
        );
    }
}
