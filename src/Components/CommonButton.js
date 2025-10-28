import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../Styles/Colors';

const CommonButton = ({
  text,
  backgroundColor = Colors.naviBlue, 
  textColor=Colors.white,
  onPress,
  width = wp('41'),
  height = hp('5'),
}) => {
  return (
 <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        width,
        height,
        backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        // paddingHorizontal: wp('5'),
        marginHorizontal:wp('4.5'),
        borderRadius: wp('2'),
        marginTop: hp('2'),
        elevation: 2,
      }}
    >
      <Text
        style={{
          fontSize: wp('3.5'),
          fontFamily: 'Poppins-Regular',
          color: textColor,
          fontWeight: 'medium',
        //  lineHeight:hp("5")
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
export default CommonButton;
