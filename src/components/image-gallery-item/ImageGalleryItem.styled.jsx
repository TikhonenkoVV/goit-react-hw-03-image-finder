import styled from '@emotion/styled';

export const Item = styled.a`
    overflow: hidden;
    display: block;
    border-radius: 4px;
    box-shadow: 1px 1px 6px 2px rgba(0, 0, 0, 0.12);
    text-decoration: none;
    color: #404040;
    cursor: zoom-in;
    &:hover div:nth-of-type(1) {
        opacity: 0.5;
    }
`;

export const CardBox = styled.div`
    position: relative;
`;

export const Img = styled.img`
    height: 230px;
    object-fit: cover;
    width: 100%;
`;

export const CardOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
    opacity: 0;
    transition: opacity 150ms;
    pointer-events: none;
`;

export const Info = styled.div`
    display: grid;
    padding: 8px;
    text-align: center;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    background-color: #fff;
    transition: background-color 250ms;
`;

export const InfoItem = styled.p`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 14px;
`;
