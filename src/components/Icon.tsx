import * as S from './Icon.style';

const DEFAULT_ICON_IMAGE_URL = '/image/firefox-icon.png';

interface IconSectionProps {
  icons: IconProps[];
}

export function IconSection({ icons }: IconSectionProps) {
  return (
    <S.IconSection>
      {icons.map((icon, idx) => (
        <Icon key={`icon-${idx}`} {...icon} />
      ))}
    </S.IconSection>
  );
}

function Icon({ imageUrl, text, url }: IconProps) {
  return (
    <S.Icon>
      <S.IconImage src={imageUrl ?? DEFAULT_ICON_IMAGE_URL} onClick={() => url && window.open(`${url}`, '_blank')} />
      <S.IconText>{text ?? '#'}</S.IconText>
    </S.Icon>
  );
}
