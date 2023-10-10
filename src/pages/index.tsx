import { IconSection } from '../components/Icon';
import { Prompt } from '../components/Prompt';
import { ELIXIR_ICON_IMAGE_URL, MAPLE_SCOUTER_ICON_IMAGE_URL, MOZ_ICON_IMAGE_URL, MUSIC_NODE_ICON_IMAGE_URL, TRANSCENDENCE_ICON_IMAGE_URL } from '../constants/imageUrl';
import * as S from '../styles/index.style';

const icons: IconProps[] = [
  { imageUrl: ELIXIR_ICON_IMAGE_URL, text: 'LostArk Elixir Simulator', url: 'https://lostark-elixir.vercel.app' },
  { imageUrl: TRANSCENDENCE_ICON_IMAGE_URL, text: 'LostArk Transcendence Simulator', url: 'https://lostark-transcendence.vercel.app' },
  { imageUrl: MAPLE_SCOUTER_ICON_IMAGE_URL, text: 'Maple Scouter', url: 'https://maplescouter.vercel.app' },
  { imageUrl: MUSIC_NODE_ICON_IMAGE_URL, text: 'Music Node', url: 'https://mnode.vercel.app/' },
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
