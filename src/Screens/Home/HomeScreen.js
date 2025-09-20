import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../Styles/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Value } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar
        barStyle="dark-content" // dark Content for light backgrounds
        translucent
        backgroundColor="transparent"
      />

      <ScrollView style={{ flexGrow: 1, backgroundColor: Colors.white }}>
        <View style={{ flex: 0.57, backgroundColor: 'white' }}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={['#418AEC', '#418AEC']}
            style={{
              // flex: 1,
              // flexDirection:"row",
              height: hp('57'),
              borderBottomLeftRadius: wp('14'),
            }}
          >
            <View
              style={{
                flex: 0.11,
                flexDirection: 'row',
                // backgroundColor: Colors.black,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: wp('2.6'),
              }}
            >
              <Image
                style={{
                  width: wp('10'),
                  height: hp('5'),
                  resizeMode: 'cover',
                }}
                source={{ uri: 'placemarker' }}
              />

              <Text
                style={{
                  fontSize: hp('1.6'),
                  fontWeight:"500",
                  color: Colors.white,
                  marginRight: wp('14'),
                }}
              >
                A-105, bullding no. 4, Kanpur Nagar,
                {'\n'}Uttar Pradesh
              </Text>

              <Image
                style={{ width: wp('8'), height: hp('4') }}
                source={{ uri: 'image' }}
              />
            </View>
            <View
              style={{
                flex: 0.3,
                flexDirection: 'column',
                // backgroundColor: Colors.orange,
                justifyContent: 'space-evenly',
                paddingHorizontal: wp('2.6'),
                marginTop: hp('5'),
              }}
            >
              <Text
                style={{
                  fontSize: hp('3.5'),
                  fontWeight: '500',
                  color: Colors.white,
                }}
              >
                Welcome to,
                {'\n'}Suraj!
              </Text>
              <Text
                style={{
                  fontSize: hp('1.9'),
                  fontWeight: '500',
                  color: Colors.white,
                }}
              >
                Choose the laundry service, which you are
                {'\n'}intrested in today
              </Text>
            </View>

            <View
              style={{
                flex: 0.48,
                flexDirection: 'row',
                justifyContent:"space-between",
                // backgroundColor: Colors.black,
                marginHorizontal: wp(4),
              }}
            >
              <View
                style={{
                  width: wp('26'),
                  height: hp('17'),
                  backgroundColor: Colors.white,
                  marginTop: hp('7.2'),
                  borderRadius: wp('2'),
                  shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: wp('10'),
    shadowRadius: wp('10'),
    elevation: 10,

                }}
              >
                <View
                  style={{
                    flexDirection: 'column',
                    // justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: hp('2.5'),
                  }}
                >
                  <Image
                    style={{ width: wp('17'), height: hp('8.5') }}
                    source={{ uri: 'dry' }}
                  />
                  <Text
                    style={{
                      fontSize: hp('1.9'),
                      fontWeight: '600',
                      color: Colors.black,
                      top: hp('1.2'),

                    }}
                  >
                    Dry Clean
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: wp('26'),
                  height: hp('17'),
                  backgroundColor: Colors.white,
                  alignItems: 'center',
                  marginTop: hp('7.2'),
                  borderRadius: wp('2'),
                  shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: wp('10'),
    shadowRadius: wp('10'),
    elevation: 10,
                }}
              >
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: hp('2.5'),
                  }}
                >
                  <Image
                    style={{ width: wp('17'), height: hp('8.5') }}
                    source={{ uri: 'laundry' }}
                  />
                  <Text
                    style={{
                      fontSize: hp('1.9'),
                      fontWeight: '600',
                      color: Colors.black,
                      top: hp('1.2'),
                    }}
                  >
                    Laundry
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: wp('26'),
                  height: hp('17'),
                  backgroundColor: Colors.white,
                  marginTop: hp('7.2'),
                  borderRadius: wp('2'),
                  shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: wp('10'),
    shadowRadius: wp('10'),
    elevation: 10,
    backgroundColor: 'white',
                }}
              >
                <View
                  style={{
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: hp('2.5'),
                  }}
                >
                  <Image
                    style={{ width: wp('17'), height: hp('8.5') }}
                    source={{ uri: 'ironing' }}
                  />
                  <Text
                    style={{
                      fontSize: hp('1.9'),
                      fontWeight: '600',
                      color: Colors.black,
                      top: hp('1.2'),
                    }}
                  >
                    Iron
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>

        <View
          style={{
            // flex: 0.43,
            height: hp('43'),
            paddingHorizontal: wp('3'),
            alignItems: 'flex-start',
            backgroundColor: Colors.white,
            // marginTop: hp('14'),
          }}
        ></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  ArrowContainer: {
    paddingHorizontal: wp('5'),
  },
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    borderTopLeftRadius: wp('3'),
    borderTopRightRadius: wp('3'),
  },
});
