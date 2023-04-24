import PropTypes from 'prop-types';
import { GalleryItem } from 'components/image-gallery-item/ImageGalleryItem';
import { GalleryBox } from './ImageGallery.styled';

export const Gallary = ({ onCardClick, images }) => {
    return (
        <GalleryBox>
            {images.map(image => {
                return (
                    <GalleryItem
                        key={image.id}
                        obj={image}
                        onCardClick={onCardClick}
                    />
                );
            })}
        </GalleryBox>
    );
};

Gallary.propTypes = {
    image: PropTypes.arrayOf(
        PropTypes.shape({ id: PropTypes.string.isRequired })
    ),
};
