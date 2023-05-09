import {SvgXml} from 'react-native-svg';
import * as React from 'react';

const focus = `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4_386)">
<path d="M14 9V14H18M25 14C25 20.0751 20.0751 25 14 25C7.92487 25 3 20.0751 3 14C3 7.92487 7.92487 3 14 3C20.0751 3 25 7.92487 25 14Z" stroke="#9763FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4_386">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const unfocus = `
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_4_386)">
<path d="M14 9V14H18M25 14C25 20.0751 20.0751 25 14 25C7.92487 25 3 20.0751 3 14C3 7.92487 7.92487 3 14 3C20.0751 3 25 7.92487 25 14Z" stroke="#C1C3C6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_4_386">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const HistoryIcon = ({focused, size}) => {
  return <SvgXml xml={focused ? focus : unfocus} width={size} height={size} />;
};

export default HistoryIcon