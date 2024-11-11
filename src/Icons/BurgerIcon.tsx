import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BurgerIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={22}
    fill="none"
    {...props}>
    <Path
      stroke="#F8F8F8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M2 20h21M2 11h21M2 2h21"
    />
  </Svg>
);
export default BurgerIcon;
