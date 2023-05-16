import { useEffect, useState } from 'react';
import * as S from './Prompt.style';

const USERNAME = 'hhyuw';

export function TopBar() {
  return (
    <S.TopBar>
      <div />
      <div>{`${USERNAME}: ~`}</div>
      <div />
    </S.TopBar>
  );
}

export function GreetingText() {
  return (
    <S.GreetingText>
      <div>{`Hi! This is personal site of next user: hhyuw`}</div>
      <div>{`See below for details.`}</div>
    </S.GreetingText>
  );
}

interface InfoRowProps {
  attributeName: string;
  value: string;
  cursor?: boolean;
}
export function InfoRow({ attributeName, value, cursor }: InfoRowProps) {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ paddingRight: '0.5rem', color: 'rgb(138, 226, 52)' }}>{`${USERNAME}@${attributeName}:`}</div>
      <div style={{ color: 'rgb(114, 159, 207)' }}>{value}</div>
      {cursor && <div style={{ color: 'white' }}>{'_'}</div>}
    </div>
  );
}

export function Prompt() {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const handle = setInterval(() => {
      setShowCursor((showCursor) => !showCursor);
    }, 650);

    return () => clearInterval(handle);
  }, []);

  return (
    <S.Prompt top="10rem" left="20rem">
      <TopBar />
      <div>
        <GreetingText />
        <div style={{ paddingTop: '1rem' }}>
          <InfoRow attributeName={'Name'} value={'Hyunwoo Ha'} />
          <InfoRow attributeName={'E-mail'} value={'high092@naver.com'} cursor={showCursor} />
        </div>
      </div>
    </S.Prompt>
  );
}
