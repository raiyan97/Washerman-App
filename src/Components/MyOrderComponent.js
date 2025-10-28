import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../Styles/Colors';

const MyOrderComponent = ({
  title = 'Default Title',
  backgroundColor = Colors.naviBlue, // fallback color
  width = wp('35'),
  height = hp('6'),
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        width,
        height,
        backgroundColor,
        marginTop: hp('1'),
        justifyContent: 'center',
        marginHorizontal: wp('2'),
        alignSelf: 'center',
        borderRadius: wp('2'),

        // iOS shadow
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        // Android shadow
        elevation: 2,
      }}
    >
      <Text
        style={{
          fontSize: wp('3.2'),
          fontFamily: 'Poppins-Regular',
          fontWeight: '700',
          color: Colors.white,
          textAlign: 'center',
          letterSpacing: wp('0.2'),
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MyOrderComponent;
