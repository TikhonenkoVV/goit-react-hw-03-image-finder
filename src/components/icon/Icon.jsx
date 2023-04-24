import PropTypes from 'prop-types';
import { Icon } from './Icon.styled';

export const Svg = ({ width, height, use }) => {
    return (
        <Icon width={width} height={height}>
            <use href={use} />
        </Icon>
    );
};

Svg.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    use: PropTypes.string.isRequired,
};
