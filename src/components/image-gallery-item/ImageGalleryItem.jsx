import PropTypes from 'prop-types';
import sprite from '../../img/sprite.svg';
import {
    Item,
    CardBox,
    Img,
    CardOverlay,
    Info,
    InfoItem,
} from './ImageGalleryItem.styled';
import { Svg } from 'components/icon/Icon';

export const GalleryItem = ({ obj, onCardClick }) => {
    return (
        <li>
            <Item onClick={() => onCardClick(obj.largeImageURL, obj.tags)}>
                <CardBox>
                    <Img src={obj.webformatURL} alt={obj.tags} />
                    <CardOverlay>
                        <Svg
                            width={50}
                            height={50}
                            use={`${sprite}#icon-enlarge`}
                        />
                    </CardOverlay>
                    <Info>
                        <InfoItem>
                            <Svg
                                width={20}
                                height={20}
                                use={`${sprite}#icon-likes`}
                            />
                            <b>{obj.likes}</b>
                        </InfoItem>
                        <InfoItem>
                            <Svg
                                width={20}
                                height={20}
                                use={`${sprite}#icon-views`}
                            />
                            <b>{obj.views}</b>
                        </InfoItem>
                        <InfoItem>
                            <Svg
                                width={20}
                                height={20}
                                use={`${sprite}#icon-comments`}
                            />
                            <b>{obj.comments}</b>
                        </InfoItem>
                        <InfoItem>
                            <Svg
                                width={20}
                                height={20}
                                use={`${sprite}#icon-downloads`}
                            />
                            <b>{obj.downloads}</b>
                        </InfoItem>
                    </Info>
                </CardBox>
            </Item>
        </li>
    );
};

GalleryItem.propTypes = {
    onCardClick: PropTypes.func.isRequired,
    obj: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        likes: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        comments: PropTypes.number.isRequired,
        downloads: PropTypes.number.isRequired,
    }),
};
