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
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import LinearGradient from 'react-native-linear-gradient';
import FastImage from 'react-native-fast-image';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { Value } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import { useNavigation } from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Styles/Colors';

const LaundryService = ({ route }) => {
  const [ratingValue, setRatingValue] = useState(0);

  console.log('myRoute', route);
  //  console.log("myRouteItemId",route.params.myItemParam.id);

  const handleRating = value => {
    setRatingValue(value);
    console.log('User rated:', value);
  };

  const navigation = useNavigation();

  const services = [
    {
      id: 1,
      clothName: 'T-Shirt',
      clothCategory: 'White cotton',
      price: '₹ 20',
      iconName: require('../../android/app/src/main/res/drawable/tshirt.png'),
    },
    {
      id: 2,
      clothName: 'Jeans',
      clothCategory: 'White cotton',
      price: '₹ 30',
      iconName: require('../../android/app/src/main/res/drawable/paint.png'),
    },
    {
      id: 3,
      clothName: 'Iron',
      clothCategory: 'T-Shirt',
      price: '₹ 40',
      iconName: require('../../android/app/src/main/res/drawable/tshirt.png'),
    },
    {
      id: 4,
      clothName: 'Jeans',
      clothCategory: 'White cotton',
      price: '₹ 50',
      iconName: require('../../android/app/src/main/res/drawable/paint.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <View
      activeOpacity={0.5}
      style={{
        backgroundColor: Colors.white,
        height: hp('10'),
        width: wp('32.5'),
        marginRight: wp('6'),
        borderRadius:wp('2'),
        marginTop: hp('2'),
        marginBottom:hp('1'),
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <View style={{flex:1}}>
      <View
        style={{
          flex: 0.4,
          flexDirection: 'row',
          borderTopLeftRadius: wp('2'),
          borderWidth: 0.4,
          borderColor: Colors.silverGrey,
        }}
      >
        <View
          style={{
            flex: 0.7,
            justifyContent: 'center',
            alignItems: 'center',
            borderTopLeftRadius: wp('2'),
          }}
        >
          <Text
            style={{
              fontSize: hp('2'),
              fontFamily: 'Poppins-Medium',
              color: Colors.black,
              letterSpacing: 0.2,
              lineHeight: hp('2.5'),
            }}
          >
            T-Shirt
          </Text>
        </View>

        <View
          style={{
            flex: 0.3,
            justifyContent: 'flex-end',
          }}
        >
          <Image
            source={{ uri: 'tshirt' }}
            style={{
              width: wp('9'),
              height: hp('6'),
              resizeMode: 'contain',
              zIndex: 0,
              left: wp('2'),
            }}
          />
        </View>
      </View>

      <View
        style={{ flex: 0.3, flexDirection: 'row', backgroundColor: 'white' }}
      >
        <View
          style={{
            flex: 0.85,
            justifyContent: 'center',
            borderColor: Colors.silverGrey,
            borderWidth: wp('0.1'),
          }}
        >
          <Text
            style={{
              fontSize: hp('1.4'),
              fontFamily: 'Poppins-Regular',
              color: Colors.darkGrey,
              textAlign: 'center',
              letterSpacing: 0.2,
              lineHeight: hp('2.5'),
            }}
          >
            White Cotton
          </Text>
        </View>
        <View
          style={{
            flex: 0.15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        ></View>
      </View>

      <View
        style={{
          flex: 0.3,
          flexDirection: 'row',

        }}
      >
        <View
          style={{
            flex: 0.35,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: hp('1.6'),
              fontFamily: 'Poppins-Regular',
              color: Colors.darkGrey,
              letterSpacing: 0.2,
              lineHeight: hp('1.9'),
            }}
          >
            ₹ 15
          </Text>
        </View>
        <View
          style={{
            flex: 0.65,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              width: wp('4'),
              height: hp('2.1'),
              backgroundColor: Colors.DeliverdColor,
              justifyContent: 'center',
              borderRadius: wp('1'),
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon name="minus" size={10} color="black" />
          </TouchableOpacity>

          <View
            style={{
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: hp('1.5'),
                fontFamily: 'Poppins-Medium',
                alignItems: 'center',
              }}
            >
              00
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: wp('4'),
              height: hp('2.1'),
              backgroundColor: Colors.DeliverdColor,
              borderRadius: wp('1'),
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon name="plus" size={10} color="black" />
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>

  );

  const renderItemIron = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        backgroundColor: Colors.orange,
        height: hp('10'),
        width: wp('32.5'),
        borderRadius: wp('2'),
        marginRight: wp('3'),
        alignItems: 'center',
        marginTop: hp('2'),
        borderColor: 'grey',
        borderWidth: wp('0.15'),
      }}
    ></TouchableOpacity>
  );

  const renderItemDryClean = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.5}
      style={{
        backgroundColor: Colors.white,
        height: hp('10'),
        width: wp('32.5'),
        borderRadius: wp('2'),
        marginRight: wp('3'),
        alignItems: 'center',
        marginTop: hp('2'),
        borderColor: Colors.grey,
        borderWidth: wp('0.15'),
      }}
    ></TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: Colors.white }}
      >
        <View style={{}}>
          <View style={{ height: hp('30') }}>
            <ImageBackground
              source={{ uri: 'laundry' }}
              style={{ height: hp('28'), width: wp('100') }}
              resizeMode="stretch"
              imageStyle={{}}
            >
              <View
                style={{
                  height: hp('8'),
                  flexDirection: 'row',
                  justifyContent: 'center',
                }}
              >
                <TouchableOpacity
                  onPress={() => navigation.goBack('HomeScreen')}
                  style={{
                    height: hp('8'),
                    flex: 0.15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Ionicons name="arrow-back" size={22} color="black" />
                </TouchableOpacity>
                <View style={{ height: hp('8'), flex: 0.7 }}></View>
                <TouchableOpacity
                  style={{
                    height: hp('8'),
                    flex: 0.15,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Ionicons name="share-social" size={20} color="black" />
                </TouchableOpacity>
              </View>

              <View style={{ height: hp('22'), flexDirection: 'row' }}>
                <View
                  style={{
                    height: hp('22'),
                    flex: 0.25,
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    paddingBottom: hp('4'),
                  }}
                >
                  <View
                    style={{
                      flex: 0.15,
                      backgroundColor: 'white',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Icon name="clock-o" size={15} color={Colors.naviBlue} />
                    <View
                      style={{
                        flex: 0.55,
                        backgroundColor: Colors.white,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Text
                        style={{
                          fontSize: hp('1.35'),
                          fontFamily: 'Poppins-Medium',
                          color: Colors.darkGrey,
                        }}
                      >
                        3 days
                      </Text>
                    </View>
                  </View>
                  <View style={{ flex: 0.1, backgroundColor: 'white' }}>
                    <Rating
                      type="star"
                      ratingCount={5}
                      imageSize={10}
                      showRating={false}
                      onFinishRating={handleRating}
                      style={{ paddingVertical: 1 }}
                    />

                    <Text
                      style={{
                        fontSize: hp('1.35'),
                        fontFamily: 'Poppins-Medium',
                        color: Colors.darkGrey,
                        lineHeight: hp('2'),
                      }}
                    >
                      4.2 (254)
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    height: hp('22'),
                    flex: 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image
                    source={{ uri: 'cardbg' }}
                    style={{
                      height: hp('22'),
                      width: hp('22'),
                      borderRadius: wp('50'),
                    }}
                    resizeMode="cover"
                  />
                </View>
                <View
                  style={{
                    height: hp('22'),
                    flex: 0.25,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    paddingBottom: hp('2'),
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: hp('4'),
                      width: wp('8'),
                      backgroundColor: Colors.white,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: wp('20'),
                    }}
                  >
                    <FontAwesomeIcon name="heart-o" size={20} color="red" />
                  </TouchableOpacity>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={{ flexDirection: 'row', marginVertical: hp('2') }}>
            <View style={{ flex: 0.2 }}></View>
            <View style={{ flex: 0.6 }}>
              <Text
                style={{
                  fontSize: hp('3'),
                  fontFamily: 'Poppins-Medium',
                  color: Colors.black,
                  textAlign: 'center',
                  letterSpacing: 0.2,
                  lineHeight: hp('5'),
                }}
              >
                Shukla Laundry
              </Text>
              {/* <Text>{route.params.myItemParam.id}</Text> */}
              <Text
                style={{
                  fontSize: hp('1.9'),
                  fontFamily: 'Poppins-Medium',
                  color: Colors.darkGrey,
                  textAlign: 'center',
                  letterSpacing: 0.2,
                  lineHeight: hp('3.5'),
                }}
              >
                Wash & Iron
              </Text>
              <Text
                style={{
                  fontSize: hp('1.7'),
                  fontFamily: 'Poppins-Medium',
                  color: Colors.darkGrey,
                  textAlign: 'center',
                  letterSpacing: 0.2,
                  lineHeight: hp('1.9'),
                }}
              >
                A-105, bullding no. 4, Kanpur Nagar, Uttar Pradesh
              </Text>
            </View>
            <View style={{ flex: 0.2 }}></View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              marginLeft: wp('4'),
              marginTop: hp('2'),
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View style={{ flex: 0.25, marginLeft: hp('-1') }}>
                <Text
                  style={{
                    fontSize: hp('2'),
                    fontFamily: 'Poppins-Medium',
                    color: Colors.black,
                    textAlign: 'center',
                    letterSpacing: 0.2,
                    lineHeight: hp('2.5'),
                  }}
                >
                  Laundry
                </Text>
              </View>
              <View style={{ flex: 0.65, backgroundColor: 'red' }}></View>
              <TouchableOpacity
                onPress={() => navigation.navigate('LaundryDetailScreen')}
                activeOpacity={0.5}
                style={{ flex: 0.2 }}
              >
                <Text
                  style={{
                    fontSize: hp('1.7'),
                    fontFamily: 'Poppins-Medium',
                    color: Colors.naviBlue,
                    textAlign: 'center',
                    letterSpacing: 0.2,
                    lineHeight: hp('2'),
                  }}
                >
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={services}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{paddingLeft:wp('2'),}}
            />
          </View>

          <View
            style={{
              justifyContent: 'center',
              marginLeft: wp('4'),
              marginTop: hp('2'),
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View style={{ flex: 0.25, marginLeft: hp('-1') }}>
                <Text
                  style={{
                    fontSize: hp('2'),
                    fontFamily: 'Poppins-Medium',
                    color: Colors.black,
                    textAlign: 'center',
                    letterSpacing: 0.2,
                    lineHeight: hp('2.5'),
                  }}
                >
                  Only Iron
                </Text>
              </View>
              <View style={{ flex: 0.65 }}></View>
              <TouchableOpacity activeOpacity={0.5} style={{ flex: 0.2 }}>
                <Text
                  style={{
                    fontSize: hp('1.7'),
                    fontFamily: 'Poppins-Medium',
                    color: Colors.naviBlue,
                    textAlign: 'center',
                    letterSpacing: 0.2,
                    lineHeight: hp('2'),
                  }}
                >
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={services}
              renderItem={renderItemIron}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>

          <View
            style={{
              justifyContent: 'center',
              marginLeft: wp('4'),
              marginTop: hp('2'),
              marginBottom: hp('2'),
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View style={{ flex: 0.25, marginLeft: hp('-1') }}>
                <Text
                  style={{
                    fontSize: hp('2'),
                    fontFamily: 'Poppins-Medium',
                    color: Colors.black,
                    textAlign: 'center',
                    letterSpacing: 0.2,
                    lineHeight: hp('2.5'),
                  }}
                >
                  Dry Clean
                </Text>
              </View>
              <View style={{ flex: 0.65 }}></View>
              <TouchableOpacity activeOpacity={0.5} style={{ flex: 0.2 }}>
                <Text
                  style={{
                    fontSize: hp('1.7'),
                    fontFamily: 'Poppins-Medium',
                    color: Colors.naviBlue,
                    textAlign: 'center',
                    letterSpacing: 0.2,
                    lineHeight: hp('2'),
                  }}
                >
                  See all
                </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={services}
              renderItem={renderItemDryClean}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() => navigation.navigate('DetailScreen')}
        style={{
          height: hp('8'),
          flexDirection: 'row',
          backgroundColor: '#418AEC',
          marginHorizontal: wp('4'),
          borderRadius: wp('2'),
          marginBottom: hp('0.5'),
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: wp('1.5'),
        }}
      >
        <View
          style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}
        >
          <Image
            source={{ uri: 'shirt' }}
            style={{ height: hp('6'), width: hp('12'), borderRadius: wp('2') }}
            resizeMode="contain"
          />
        </View>
        <View style={{ flex: 0.15 }}>
          <Text
            style={{
              fontSize: hp('1.75'),
              fontFamily: 'Inter-SemiBold',
              color: 'white',
              textAlign: 'center',
            }}
          >
            {' '}
            7 Item
          </Text>
          <Text
            style={{
              fontSize: hp('1.75'),
              fontFamily: 'Inter-SemiBold',
              color: 'white',
              textAlign: 'center',
            }}
          >
            ₹ 210
          </Text>
        </View>
        <View style={{ flex: 0.4 }}></View>
        <View style={{ flex: 0.2 }}>
          <Text
            style={{
              fontSize: hp('1.75'),
              fontFamily: 'Inter-SemiBold',
              color: 'white',
              textAlign: 'right',
            }}
          >
            Proceed
          </Text>
        </View>
        <View
          style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}
        >
          <FontAwesomeIcon name="forward" size={16} color="white" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LaundryService;

const styles = StyleSheet.create({});
