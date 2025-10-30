import { View, Text, ScrollView, StatusBar, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image';
import Colors from '../../Styles/Colors';
import CommonButton from '../../Components/CommonButton';
import { useNavigation } from '@react-navigation/native';

const OrderConfirmScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar
        barStyle="dark-content" // dark text for light backgrounds
        translucent
        backgroundColor="transparent"
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            height: hp('6'),
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flex: 0.1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          ></View>
          <View
            style={{
              flex: 0.8,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: wp('4'),
                fontFamily: 'Poppins-SemiBold',
                fontWeight: '700',
                letterSpacing: wp('0.2'),
                lineHeight: hp('6'),
              }}
            >
              Order Confirmation
            </Text>
          </View>

          <View
            style={{
              flex: 0.1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: wp('9'),
                height: hp('4.5'),
                resizemode: 'contain',
                tintColor: Colors.naviBlue,
              }}
              source={{ uri: 'image' }}
            />
          </View>
        </View>

        <View
          style={{
            height: hp('48'),
            marginTop: hp('10'),
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flex: 1,
            }}
          >
            <FastImage
              source={require('../../Assets/Gif/ordercomplete.gif')}
              style={{ width: wp('70'), height: hp('60') }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        </View>

        <View
          style={{
            height: hp('10'),
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: wp('4'),
              fontFamily: 'Poppins-Medium',
              fontWeight: '700',
              letterSpacing: wp('0.2'),
              textAlign: 'center',
            }}
          >
            Order Placed Successfully!
          </Text>
          <View style={{ flex: 0.8, marginTop: hp('1.2') }}>
            <Text
              style={{
                fontSize: wp('3.2'),
                fontFamily: 'Poppins-Regular',
                textAlign: 'center',
                letterSpacing: 0.2,
              }}
            >
              Congratulation! Your order has been placed.{'\n'}
              You can track your order number{' '}
              <Text style={{ color: Colors.naviBlue }}>#8989</Text>
            </Text>
            <View style={{ flex: 0.2 }}></View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <CommonButton
          text="Continue Service"
          onPress={() => navigation.navigate('OrderActiveScreen')}
        />
        <CommonButton
          text="Track Order"
          onPress={() => navigation.navigate('')}
        />
      </View>
    </SafeAreaView>
  );
};

export default OrderConfirmScreen;
