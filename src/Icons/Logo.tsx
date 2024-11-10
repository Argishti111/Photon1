import * as React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgLogo = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={360}
    height={379}
    fill="none"
    {...props}>
    <G filter="url(#a)">
      <Path
        fill="url(#b)"
        d="M0 0h19.931v103.265H0z"
        transform="matrix(.00267 1 1 -.00267 10.133 163.384)"
      />
      <Path
        fill="url(#c)"
        d="M0 0h19.931v75.93H0z"
        transform="matrix(.00267 1 1 -.00267 32.49 194.794)"
      />
      <Path
        fill="#16A27F"
        d="m28.686 138.684-19.236-.132-.277 44.763 19.236.131z"
      />
      <Path
        fill="url(#d)"
        d="M0 0h19.931v70.868H0z"
        transform="matrix(.00267 1 1 -.00267 37.347 118.203)"
      />
      <Path
        fill="#16A27F"
        d="m36.593 153.987 19.234.324.554-35.784-19.233-.324z"
      />
      <Path
        fill="url(#e)"
        d="M0 0h19.931v46.571H0z"
        transform="matrix(.00267 1 1 -.00267 56.866 224.102)"
      />
      <G filter="url(#f)">
        <Path fill="url(#g)" d="M170 14h19v102h-19z" />
        <Path fill="url(#h)" d="M200 36h19v75h-19z" />
        <Path
          fill="#16A27F"
          d="m146.502 32.39-.174-18.999 42.67-.391.174 18.999z"
        />
        <Path fill="url(#i)" d="M127 41h19v70h-19z" />
        <Path
          fill="#16A27F"
          d="m161.11 40.161.358 18.997-34.11.642L127 40.803z"
        />
        <Path fill="url(#j)" d="M228 60h19v46h-19z" />
      </G>
      <G filter="url(#k)">
        <Path
          fill="url(#l)"
          d="M0 0h19.281v102H0z"
          transform="scale(-1 1) rotate(-89.847 -79.274 274.147)"
        />
        <Path
          fill="url(#m)"
          d="M0 0h19.281v75H0z"
          transform="scale(-1 1) rotate(-89.847 -83.467 247.885)"
        />
        <Path fill="#16A27F" d="m334.881 218.035 19 .126.276-43.3-19-.127z" />
        <Path
          fill="url(#n)"
          d="M0 0h19.281v70H0z"
          transform="scale(-1 1) rotate(-89.847 -43.92 282.524)"
        />
        <Path
          fill="#16A27F"
          d="m327.072 203.231-18.997-.312-.55 34.616 18.998.312z"
        />
        <Path
          fill="url(#o)"
          d="M0 0h19.281v46H0z"
          transform="scale(-1 1) rotate(-89.847 -85.641 221.64)"
        />
      </G>
      <G filter="url(#p)">
        <Path
          fill="url(#q)"
          d="M0 0h19.317v102.779H0z"
          transform="matrix(1 0 0 -1 159.717 356.778)"
        />
        <Path
          fill="url(#r)"
          d="M0 0h19.317v75.573H0z"
          transform="matrix(1 0 0 -1 190.217 334.61)"
        />
        <Path
          fill="#16A27F"
          d="m135.827 338.247-.177 19.144 43.38.395.177-19.144z"
        />
        <Path
          fill="url(#s)"
          d="M0 0h19.317v70.534H0z"
          transform="matrix(1 0 0 -1 116 329.572)"
        />
        <Path
          fill="#16A27F"
          d="m150.678 330.418.363-19.142-34.678-.646L116 329.77z"
        />
        <Path
          fill="url(#t)"
          d="M0 0h19.317v46.351H0z"
          transform="matrix(1 0 0 -1 218.683 310.428)"
        />
      </G>
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={9.966}
        x2={8.5}
        y1={0}
        y2={86.056}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.176} stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={9.966}
        x2={9.173}
        y1={0}
        y2={63.285}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={9.966}
        x2={9.275}
        y1={0}
        y2={59.067}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.254} stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={9.966}
        x2={9.667}
        y1={0}
        y2={38.819}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={179.5}
        x2={178}
        y1={14}
        y2={99}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.176} stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={209.5}
        x2={208.689}
        y1={36}
        y2={98.509}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={136.5}
        x2={135.793}
        y1={41}
        y2={99.343}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.254} stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="j"
        x1={237.5}
        x2={237.195}
        y1={60}
        y2={98.343}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={9.64}
        x2={8.162}
        y1={0}
        y2={85.001}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.176} stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={9.64}
        x2={8.841}
        y1={0}
        y2={62.509}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="n"
        x1={9.64}
        x2={8.944}
        y1={0}
        y2={58.343}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.254} stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="o"
        x1={9.64}
        x2={9.34}
        y1={0}
        y2={38.343}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="q"
        x1={9.658}
        x2={8.16}
        y1={0}
        y2={85.649}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.176} stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="r"
        x1={9.658}
        x2={8.848}
        y1={0}
        y2={62.986}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="s"
        x1={9.658}
        x2={8.953}
        y1={0}
        y2={58.788}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.254} stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="t"
        x1={9.658}
        x2={9.354}
        y1={0}
        y2={38.636}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#16A27F" />
        <Stop offset={1} stopColor="#16A27F" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgLogo;
