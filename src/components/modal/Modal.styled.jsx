import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const animate = keyframes`
    0% {opacity: 0}
    30% {opacity: 0}
    50% {opacity: 1}
    100% {opacity: 1}
`;

export const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 3;
`;

export const ImgWrapper = styled.div`
    position: relative;
    max-width: 80vw;
    max-height: 90vh;
    border-radius: 5px;
    overflow: hidden;
`;

export const LargeImage = styled.img`
    display: block;
    max-width: 100%;
    max-height: 100%;
`;

export const Overlay = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    padding-left: 30px;
    font-size: 16px;
    color: #fff;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.658);
    text-transform: capitalize;
    animation-name: ${animate};
    animation-duration: 3000ms;
    animation-fill-mode: forwards;
    animation-iteration-count: unset;
`;
