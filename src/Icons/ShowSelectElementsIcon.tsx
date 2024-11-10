import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ShowSelectElementsIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}>
    <Path
      fill="#DDD"
      fillOpacity={0.867}
      d="M13.033 10.785 6.427 4.179a1.054 1.054 0 0 1-.326-.798c.007-.307.123-.573.349-.797.225-.224.49-.336.798-.337.306 0 .572.112.797.337l6.898 6.92c.18.18.314.382.404.607.09.225.135.45.135.674 0 .225-.045.45-.135.674-.09.225-.225.427-.404.607l-6.92 6.92a1.04 1.04 0 0 1-.787.326 1.116 1.116 0 0 1-.786-.349 1.093 1.093 0 0 1-.337-.798c0-.306.112-.572.337-.797l6.583-6.583Z"
    />
  </Svg>
);
export default ShowSelectElementsIcon;
