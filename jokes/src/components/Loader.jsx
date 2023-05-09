import React from 'react';
import {Text} from 'react-native';


const Loader = ({text}) => {
  return (
    <Text
      style={{
        color: '#9763FF',
        fontFamily: 'Inter-SemiBold',
        fontSize: 20,
        alignSelf: 'center',
        marginHorizontal: 20,
      }}>
      {text}
    </Text>
  );
};
export default Loader;
