import styled from '@emotion/styled';

export const GalleryBox = styled.ul`
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-auto-rows: 290px;
    flex-grow: 1;
    margin: 0;
    padding: 20px;
    list-style: none;
`;
