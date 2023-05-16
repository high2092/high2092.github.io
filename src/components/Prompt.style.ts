import styled from '@emotion/styled';

export const Prompt = styled.div<{ top: number; left: number; width: number; height: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;

  background: rgb(48, 10, 36);
  border-radius: 0.4rem;

  overflow: hidden;
`;

export const TopBar = styled.div`
  padding: 0.2rem 0;

  background-color: rgb(66, 66, 66);

  display: flex;
  justify-content: space-between;

  color: rgb(211, 215, 207);
`;

export const GreetingText = styled.div`
  color: rgb(211, 215, 207);
`;
