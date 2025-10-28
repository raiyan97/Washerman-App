import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../Styles/Colors';

const ProceedButton = ({
  itemsCount = 7,
  price = 210,
  onPress,
  buttonText = 'Proceed',
}) => {
  return (
    <View style={{ flex: 0.22, backgroundColor: Colors.white }}>
      <View
        style={{
          flexDirection: 'row',
          width: wp('89'),
          height: hp('8'),
          backgroundColor: Colors.naviBlue,
          borderRadius: wp('3'),
          top: hp('2.5'),
        }}
      >
        <View
          style={{
            width: hp('7'),
            height: hp('6'),
            margin: wp('2.5'),
            flexDirection: 'column',
            alignSelf: 'flex-start',
            backgroundColor: Colors.white,
            marginTop: hp('1'),
            borderRadius: wp('2'),
          }}
        >
          <Image
            style={{
              width: wp('10'),
              height: hp('4.5'),
              resizeMode: 'cover',
              alignSelf: 'center',
              marginTop: hp('1'),
            }}
            source={{ uri: 'laundry' }}
          />
          <View style={{ bottom: hp('5.5'), left: wp('18') }}>
            <Text
              style={{
                fontSize: hp('1.6'),
                fontFamily: 'Poppins-Regular',
                fontWeight: '500',
                color: Colors.white,
              }}
            >
              {itemsCount} item
            </Text>

            <Text
              style={{
                fontSize: hp('1.9'),
                fontFamily: 'Poppins-Regular',
                fontWeight: '700',
                color: Colors.white,
                paddingTop: hp('0.5'),
              }}
            >
              ₹ {price}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={onPress}
          style={{ flexDirection: 'row', alignItems: 'center' }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: wp('33'),
            }}
            onPress={onPress}
          >
            <Text
              style={{
                fontSize: hp('1.9'),
                fontFamily: 'Poppins-Regular',
                fontWeight: '700',
                color: Colors.white,
                left: wp('12'),
              }}
            >
              {buttonText}
            </Text>

            <Image
              style={{
                width: wp('4'),
                height: hp('2'),
                resizeMode: 'contain',
                tintColor: Colors.white,
                paddingLeft: wp('33'),
              }}
              source={{ uri: 'forward' }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProceedButton;
