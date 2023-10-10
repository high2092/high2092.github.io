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
      <div>{`Hi! This is personal site of the following user: hhyuw`}</div>
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
    <div style={{ wordBreak: 'break-all' }}>
      <span style={{ paddingRight: '0.5rem', color: 'rgb(138, 226, 52)' }}>{`${USERNAME}@${attributeName}:`}</span>
      <span style={{ color: 'rgb(114, 159, 207)' }}>{value}</span>
      {cursor && <span style={{ color: 'white' }}>{'_'}</span>}
    </div>
  );
}

export function Prompt() {
  const [showCursor, setShowCursor] = useState(false);
  const [promptStyleProps, setPromptStyleProps] = useState({ top: 0, left: 0, width: 0, height: 0 });

  useEffect(() => {
    const handle = setInterval(() => {
      setShowCursor((showCursor) => !showCursor);
    }, 650);

    return () => clearInterval(handle);
  }, []);

  useEffect(() => {
    setPromptStyleProps({
      top: window.innerHeight * (0.2 + Math.random() * 0.2),
      left: window.innerWidth * (0.2 + Math.random() * 0.2),
      width: window.innerWidth * 0.6,
      height: window.innerHeight * 0.6,
    });
  }, []);

  return (
    <S.Prompt {...promptStyleProps}>
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
