import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CopyIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13}
    height={13}
    fill="none"
    {...props}>
    <Path
      stroke="#83848b"
      strokeWidth={0.937}
      d="M1.421 1.422H7.98v6.559H1.421z"
    />
    <Path fill="#83848b" d="M4.701 4.701h7.496v7.496H4.701z" />
  </Svg>
);
export default CopyIcon;
