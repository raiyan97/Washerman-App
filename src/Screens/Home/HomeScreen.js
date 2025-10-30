import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Value } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../Styles/Colors';

const HomeScreen = () => {
  const navigation = useNavigation();

  const services = [
    {
      id: 1,
      serviceName: 'Dry Clean',
      imageUrl: 'https://via.placeholder.com/150/228B22/FFFFFF?text=Gardening',
      color: 'red',
      iconName: require('../../../android/app/src/main/res/drawable/redshirt.png'),
    },
    {
      id: 2,
      serviceName: 'Laundry',
      imageUrl:
        'https://via.placeholder.com/150/4682B4/FFFFFF?text=Sofa+Cleaning',
      color: 'blue',
      iconName: require('../../../android/app/src/main/res/drawable/blueshirt.png'),
    },
    {
      id: 3,
      serviceName: 'Iron',
      imageUrl:
        'https://via.placeholder.com/150/8B008B/FFFFFF?text=Curtain+Cleaning',
      color: 'green',
      iconName: require('../../../android/app/src/main/res/drawable/greenshirt.png'),
    },
    {
      id: 4,
      serviceName: 'Water Tank Cleaning',
      imageUrl:
        'https://via.placeholder.com/150/FF8C00/FFFFFF?text=Tank+Cleaning',
      color: 'red',
      iconName: require('../../../android/app/src/main/res/drawable/redshirt.png'),
    },
  ];

  const nearByServices = [
    {
      id: 1,
      serviceName: 'Prime Service',
      rating: '4.2 ⭐',
      reviews: '254',
      shopName: 'Suresh Laundry Service',
      shopDistance: 'Shop 1 km away',
      deliveryPeriod: 'Delivery period 24-72 Hour',
      image: require('../../../android/app/src/main/res/drawable/cardbg.png'),
    },
    {
      id: 2,
      serviceName: 'Unique Service',
      rating: '4.7 ⭐',
      reviews: '200',
      shopName: 'Vivek Laundry Service',
      shopDistance: 'Shop 1 km away',
      deliveryPeriod: 'Delivery period 24-72 Hour',
      image: require('../../../android/app/src/main/res/drawable/washing.png'),
    },
    {
      id: 3,
      serviceName: 'Golden Service',
      rating: '4.0 ⭐',
      reviews: '275',
      shopName: 'Radhy Laundry Service',
      shopDistance: 'Shop 1 km away',
      deliveryPeriod: 'Delivery period 24-72 Hour',
      image: require('../../../android/app/src/main/res/drawable/cardbg.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{
        backgroundColor: Colors.white,
        height: hp('17'),
        width: wp('23.5'),
        borderRadius: wp('2'),
        marginRight: wp('7'),
        alignItems: 'center',
        elevation: 3,
        marginTop: hp('3.35'),
      }}
    >
      <View
        style={{
          height: hp('13'),
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          source={item?.iconName}
          style={{ height: hp('7.5'), width: wp('15') }}
          resizeMode="contain"
        />
      </View>

      <View style={{ height: hp('4') }}>
        <Text
          numberOfLines={1}
          ellipsizeMode="tail"
          style={{
            fontSize: hp('1.85'),
            textAlign: 'center',
            fontFamily: 'Poppins-Medium',
          }}
        >
          {item.serviceName}
        </Text>
      </View>
    </TouchableOpacity>
  );

  const renderItemNearByServices = ({ item, index }) => {
    // console.log("myItem",item);

    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          navigation.navigate('LaundryService', { myItemParam: item })
        }
        style={{ marginBottom: hp('5') }}
      >
        <View
          style={{
            flexDirection: 'row',
            height: hp('4'),
            marginBottom: -hp('2'),
            zIndex: 1,
            marginLeft: wp('3'),
          }}
        >
          <View
            style={{
              flex: 0.4,
              borderRadius: wp('50'),
              backgroundColor: Colors.naviBlue,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: hp('1.75'),
                fontFamily: 'Poppins-Medium',
                color: Colors.white,
              }}
            >
              {item?.serviceName}
            </Text>
          </View>
          <View style={{ flex: 0.6 }}></View>
        </View>

        <ImageBackground
          source={{ uri: 'cardbg' }}
          style={{ height: hp('24') }}
          resizeMode="stretch"
          imageStyle={{ borderRadius: wp('4') }}
        >
          <View
            style={{
              height: hp('6'),
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingRight: wp('3'),
            }}
          >
            <FontAwesomeIcon name="heart-o" size={20} color="red" />
          </View>

          <View style={{ height: hp('4') }}></View>

          <View style={{ height: hp('10'), flexDirection: 'row' }}>
            <View style={{ flex: 0.8 }}></View>
            <View
              style={{
                flex: 0.2,
                flexDirection: 'column',
                margin: wp('2'),
                borderRadius: wp('2'),
                backgroundColor: Colors.white,
              }}
            >
              <View
                style={{
                  height: hp('3'),
                  borderTopLeftRadius: wp('2'),
                  borderTopRightRadius: wp('2'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.naviBlue,
                }}
              >
                <Text style={{ color: Colors.white, fontSize: hp('1.55') }}>
                  {item?.rating}
                </Text>
              </View>
              <View
                style={{
                  height: hp('3'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: Colors.white, fontSize: hp('1.55') }}>
                  {item?.reviews}
                </Text>
                <Text
                  style={{
                    color: 'black',
                    fontSize: hp('1.55'),
                    lineHeight: 8.75,
                  }}
                >
                  {'Reviews'}
                </Text>
              </View>
            </View>
          </View>

          <View style={{ height: hp('4') }}></View>
        </ImageBackground>

        <View
          style={{
            flexDirection: 'row',
            height: hp('8'),
            marginTop: -hp('3.75'),
            zIndex: 2,
            backgroundColor: Colors.white,
            borderRadius: wp('2'),

            shadowColor: 'rgba(0,0,0,0.8)',
            shadowOpacity: 0.5,
            shadowRadius: 8,
            elevation: 4,
            marginHorizontal: wp('0.5'),
          }}
        >
          <View
            style={{
              flex: 1,
              height: hp('8'),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View
              style={{
                flex: 0.325,
                height: hp('8'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{
                  fontSize: hp('1.75'),
                  fontFamily: 'inter-SemiBold',
                  color: '#000000',
                  paddingHorizontal: wp('2'),
                }}
              >
                {item?.shopName}
              </Text>
            </View>

            <View
              style={{
                flex: 0.01,
                height: hp('6'),
                backgroundColor: Colors.grey,
              }}
            ></View>

            <View
              style={{ flex: 0.5, height: hp('8'), flexDirection: 'column' }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  height: hp('4'),
                  justifyContent: 'center',
                }}
              >
                <View
                  style={{
                    flex: 0.15,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{ uri: 'distance' }}
                    style={{
                      height: hp('1.5'),
                      width: wp('3'),
                      paddingBottom: hp('2'),
                    }}
                    resizeMode="contain"
                  />
                </View>
                <View style={{ flex: 0.85, justifyContent: 'flex-end' }}>
                  <Text numberOfLines={1} ellipsizeMode="tail">
                    {item?.shopDistance}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  height: hp('4'),
                  justifyContent: 'center',
                }}
              >
                <View
                  style={{
                    flex: 0.15,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{ uri: 'clock' }}
                    style={{
                      height: hp('1.5'),
                      width: wp('3'),
                      paddingTop: hp('3'),
                    }}
                    resizeMode="contain"
                  />
                </View>
                <View style={{ flex: 0.85, justifyContent: 'flex-start' }}>
                  <Text numberOfLines={1} ellipsizeMode="tail">
                    {item?.deliveryPeriod}
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                flex: 0.165,
                height: hp('6'),
                backgroundColor: Colors.naviBlue,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: hp('2'),
                margin: wp('2'),
                borderRadius: wp('2'),
              }}
            >
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{
                  fontSize: hp('1.5'),
                  fontFamily: 'Poppins-SemiBold',
                  color: Colors.white,
                  paddingHorizontal: wp('2'),
                }}
              >
                {'Book'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <ScrollView style={{ flexGrow: 1, backgroundColor: Colors.white }}>
        <View style={{}}>
          <View style={{ height: hp('16') }}>
            <ImageBackground
              source={{ uri: 'header' }}
              style={{ flex: 1, marginHorizontal: wp('-5') }}
              resizeMode="stretch"
            >
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  paddingHorizontal: wp('7'),
                  marginTop: hp('-3.5'),
                  // backgroundColor:"orange"
                }}
              >
                <View
                  style={{
                    flex: 0.125,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor:"green"
                  }}
                >

                  <Image source={{uri : "placemarker"}} 
                  style={{height:hp('16'),width:wp('8'),resizeMode:"contain"}}
                  />
                 
                </View>
                <View style={{ flex: 0.675, justifyContent: 'center', }}>
                  <Text
                    style={{
                      paddingLeft: wp('1'),
                      fontSize: hp('1.65'),
                      fontFamily: 'Poppins-Medium',
                      color: Colors.white,
                      lineHeight: 18,
                    }}
                  >
                    A-105, bullding no. 4, Vip Road Kanpur,India
                  </Text>
                </View>
                <View
                  style={{
                    flex: 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  //  backgroundColor:"blue"
                  }}
                >
                  <Image source={{uri : "image"}} 
                  style={{height:hp('16'),width:wp('8'),resizeMode:"contain"}}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>

          <View
            style={{
              height: hp('41'),
              backgroundColor: Colors.naviBlue,
              borderBottomLeftRadius: wp('12'),
              paddingHorizontal: wp('7'),
              flexDirection: 'column',
            }}
          >
            <View
              style={{
                justifyContent: 'center',
                marginTop: hp('1.5'),
              }}
            >
              <Text
                style={{
                  fontSize: hp('2.5'),
                  fontFamily: 'Poppins-Bold',
                  color: Colors.white,
                  lineHeight: hp('3.75'),
                }}
              >
                Welcome to, {'\n'}Mubashshra!
              </Text>
              <Text
                style={{
                  fontSize: hp('1.85'),
                  fontFamily: 'Poppins-Medium',
                  color: Colors.white,
                  lineHeight: hp('3'),
                  paddingTop: hp('0.5'),
                }}
              >
                Choose the laundry service, which you are intrested in totay
              </Text>
            </View>

            <View style={{ justifyContent: 'center' }}>
              <FlatList
                data={services}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>

          <View style={{ paddingHorizontal: wp('6') }}>
            <View
              style={{
                justifyContent: 'center',
                marginTop: hp('2.25'),
                marginBottom: hp('1'),
              }}
            >
              <Text
                style={{
                  fontSize: hp('2'),
                  fontFamily: 'Poppins-SemiBold',
                  color: Colors.black,
                  fontWeight: '800',
                }}
              >
                Near by Laundry Services
              </Text>
            </View>

            <View style={{ justifyContent: 'center', marginTop: hp('2') }}>
              <FlatList
                data={nearByServices}
                renderItem={renderItemNearByServices}
                keyExtractor={item => item.id}
                removeClippedSubviews // improve scroll performance large list
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
