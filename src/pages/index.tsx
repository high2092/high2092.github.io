import { IconSection } from '../components/Icon';
import { Prompt } from '../components/Prompt';
import { ELIXIR_ICON_IMAGE_URL, MOZ_ICON_IMAGE_URL, MUSIC_NODE_ICON_IMAGE_URL } from '../constants/imageUrl';
import * as S from '../styles/index.style';

const icons: IconProps[] = [
  { imageUrl: ELIXIR_ICON_IMAGE_URL, text: 'Lostark Elixir Simulator', url: 'https://lostark-elixir.vercel.app' },
  { imageUrl: MUSIC_NODE_ICON_IMAGE_URL, text: 'Music Node Playlist Adapter', url: 'https://music-node-playlist-adapter.vercel.app/' },
  { imageUrl: MOZ_ICON_IMAGE_URL, text: '모두의 퀴즈', url: 'https://moz-demo.vercel.app/' },
];

function Home() {
  return (
    <S.Home>
      <IconSection icons={icons} />
      <Prompt />
    </S.Home>
  );
}

export default Home;
