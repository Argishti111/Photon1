import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LimitationIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={21}
    fill="none"
    {...props}>
    <Path
      stroke="#F8F8F8"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 1 1 20h20L11 1Z"
    />
    <Path
      stroke="#F8F8F8"
      strokeLinecap="round"
      strokeWidth={2}
      d="M11 16v.5M11 8l.004 5"
    />
  </Svg>
);
export default LimitationIcon;
