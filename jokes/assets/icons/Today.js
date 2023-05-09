import {SvgXml} from 'react-native-svg';
import * as React from 'react';

const focus = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4_385)">
<path d="M4.00404 15.8416L14.7711 3.41806C15.1955 2.92838 16 3.22852 16 3.87651V10.3C16 10.6866 16.3134 11 16.7 11H23.4671C24.0669 11 24.3889 11.7052 23.9961 12.1585L18.6125 18.3702L13.229 24.5819C12.8046 25.0716 12 24.7715 12 24.1235V17.7C12 17.3134 11.6866 17 11.3 17H4.53302C3.93317 17 3.61118 16.2949 4.00404 15.8416Z" stroke="#9763FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4_385">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>`;

const unfocus = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4_385)">
<path d="M4.00404 15.8416L14.7711 3.41806C15.1955 2.92838 16 3.22852 16 3.87651V10.3C16 10.6866 16.3134 11 16.7 11H23.4671C24.0669 11 24.3889 11.7052 23.9961 12.1585L13.229 24.5819C12.8046 25.0716 12 24.7715 12 24.1235V17.7C12 17.3134 11.6866 17 11.3 17H4.53302C3.93317 17 3.61118 16.2949 4.00404 15.8416Z" stroke="#C1C3C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4_385">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const TodayIcon = ({focused, size}) => {
  return <SvgXml xml={focused ? focus : unfocus} width={size} height={size} />;
};

export default TodayIcon;
