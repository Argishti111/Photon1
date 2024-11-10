import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const SettingsIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={15}
    fill="none"
    {...props}>
    <G
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.643}
      clipPath="url(#a)">
      <Path d="M7.357 8.036a1.607 1.607 0 1 0 0-3.215 1.607 1.607 0 0 0 0 3.215Z" />
      <Path d="M2 6.9v-.943A1.02 1.02 0 0 1 3.018 4.94c.97 0 1.366-.685.878-1.526a1.017 1.017 0 0 1 .375-1.388l.927-.53a.894.894 0 0 1 1.222.321l.059.102c.482.841 1.275.841 1.762 0l.059-.102a.894.894 0 0 1 1.221-.321l.927.53c.488.279.654.905.375 1.388-.487.84-.09 1.526.879 1.526a1.02 1.02 0 0 1 1.018 1.018V6.9a1.02 1.02 0 0 1-1.018 1.018c-.97 0-1.366.686-.879 1.527a1.016 1.016 0 0 1-.375 1.387l-.927.53a.894.894 0 0 1-1.221-.32l-.059-.103c-.482-.84-1.275-.84-1.762 0l-.06.102a.894.894 0 0 1-1.22.322l-.928-.53a1.018 1.018 0 0 1-.375-1.388c.488-.841.091-1.527-.878-1.527A1.02 1.02 0 0 1 2 6.9Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.928 0h12.857v12.857H.928z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SettingsIcon;
