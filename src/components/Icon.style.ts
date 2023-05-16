import styled from '@emotion/styled';

const ICON_IMAGE_SIZE_REM = 2.5;
const ICON_SIZE = `${ICON_IMAGE_SIZE_REM + 2.5}rem`;

export const IconSection = styled.div`
  width: max-content;
  height: 100%;

  display: grid;
  grid-template-rows: repeat(10, ${ICON_SIZE});
`;

export const Icon = styled.div`
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};

  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconText = styled.div`
  padding: 0.5rem 0;
  color: white;
  font-size: 0.6rem;

  word-break: keep-all;
  text-align: center;
`;

export const IconImage = styled.img`
  width: ${ICON_IMAGE_SIZE_REM}rem;
  height: ${ICON_IMAGE_SIZE_REM}rem;

  border-radius: 0.5rem;

  cursor: pointer;
  user-select: none;
`;
