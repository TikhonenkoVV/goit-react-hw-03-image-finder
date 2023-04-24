import styled from '@emotion/styled';

export const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 2;
`;

export const FormStyled = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    background-color: #404040;
`;

export const Input = styled.input`
    min-width: 300px;
    height: 40px;
    padding: 0 20px;
    border: none;
    border-radius: 20px;
`;

export const SerchFormButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
`;
