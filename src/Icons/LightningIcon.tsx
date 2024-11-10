import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const LightningIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={21}
    fill="none"
    {...props}>
    <Path
      fill="#F8F8F8"
      d="m4.222 21 4.222-7.875L0 12.075 12.667 0h2.11l-4.221 7.875L19 8.925 6.333 21h-2.11Z"
    />
  </Svg>
);
export default LightningIcon;
