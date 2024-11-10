import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SendMessageIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={32}
    fill="none"
    {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.114}
      d="m15.78 16.327 4.568-4.568m7.893-7.762C25.4.935 4.015 8.435 4.033 11.172c.02 3.104 8.35 4.059 10.66 4.707 1.388.39 1.76.789 2.08 2.245 1.45 6.594 2.18 9.875 3.837 9.948 2.646.117 10.405-21.087 7.631-24.075Z"
    />
  </Svg>
);
export default SendMessageIcon;
