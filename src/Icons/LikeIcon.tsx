import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const LikeIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={17}
    height={17}
    fill="none"
    {...props}>
    <Path
      stroke="#83848b"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.937}
      d="M4.466 7.795 7.589.768A2.343 2.343 0 0 1 9.932 3.11v3.123h4.42a1.562 1.562 0 0 1 1.56 1.796l-1.077 7.028a1.561 1.561 0 0 1-1.561 1.327H4.466m0-8.589v8.59m0-8.59H2.123A1.562 1.562 0 0 0 .562 9.357v5.466a1.562 1.562 0 0 0 1.561 1.561h2.343"
    />
  </Svg>
);
export default LikeIcon;
