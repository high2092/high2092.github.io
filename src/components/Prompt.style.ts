import styled from '@emotion/styled';

export const Prompt = styled.div<{ top: string; left: string }>`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  width: 35rem;
  height: 20rem;
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
