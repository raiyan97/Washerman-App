//
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FastImage from 'react-native-fast-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../Styles/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DetailScreen = () => {
  const navigation = useNavigation();
  const [note, setNote] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar
        barStyle="dark-content" // dark text for light backgrounds
        translucent
        backgroundColor="transparent"
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flex: 1,
            marginHorizontal: wp('5'),
          }}
        >
          <View
            style={{
              height: hp('7'),
              flexDirection: 'row',
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack('LaundryService')}
              style={{
                flex: 0.15,
                backgroundColor: 'white',
                justifyContent: 'center',
              }}
            >
              <Image
                style={{
                  width: wp('6'),
                  height: hp('3'),
                  resizeMode: 'cover',
                }}
                source={{ uri: 'arrowleft' }}
              />
            </TouchableOpacity>

            <View
              style={{
                flex: 0.85,
                backgroundColor: 'white',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: wp('4'),
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '700',
                  color: Colors.black,
                  letterSpacing: wp('0.2'),
                }}
              >
                Delivery Information
              </Text>
            </View>
          </View>

          <View
            style={{
              height: hp('6'),
              flexDirection: 'row',
            }}
          >
            <View
              style={{
                flex: 0.8,
                backgroundColor: Colors.white,
                justifyContent: 'center',
              }}
            >
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{
                  fontSize: wp('3.8'),
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '700',
                  color: Colors.black,
                  letterSpacing: wp('0.2'),
                  lineHeight: hp('2'),
                }}
              >
                Add pickup and delivery address
              </Text>
            </View>
            <View style={{ flex: 0.2 }}></View>
          </View>

          <View
            style={{

            }}
          >
            <Text
              numberOfLines={2}
              style={{
                fontSize: wp('3.5'),
                fontFamily: 'Poppins-Regular',
                fontWeight: 'semibold',
                color: '#656565',
                letterSpacing: wp('0.2'),
              }}
            >
              Pickup Address
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{ flex: 0.85, backgroundColor: 'white' }}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: wp('3.5'),
                    fontFamily: 'Poppins-Regular',
                    fontWeight: 'regular',
                    color: Colors.black,
                    letterSpacing: wp('0.2'),
                  }}
                >
                  Mohd Rehan
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flex: 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon name="pencil" size={20} color="#000" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: 'white' }}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{
                  fontSize: wp('3.2'),
                  fontFamily: 'Poppins-Regular',
                  fontWeight: 'regular',
                  color: '#656565',
                  letterSpacing: wp('0.2'),
                }}
              >
                A-105, bullding no. 4, Kanpur Nagar, Uttar Pradesh Uttar Pradesh
              </Text>
            </View>
          </View>


 <View
            style={{

              marginTop:hp('5')
            }}
          >
            <Text
              numberOfLines={2}
              style={{
                fontSize: wp('3.5'),
                fontFamily: 'Poppins-Regular',
                fontWeight: 'semibold',
                color: '#656565',
                letterSpacing: wp('0.2'),
              }}
            >
              Pickup Address
            </Text>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <View style={{ flex: 0.85, }}>
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: wp('3.5'),
                    fontFamily: 'Poppins-Regular',
                    fontWeight: 'regular',
                    color: Colors.black,
                    letterSpacing: wp('0.2'),
                  }}
                >
                  Mohd Rehan
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  flex: 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Icon name="pencil" size={20} color="#000" />
              </TouchableOpacity>
            </View>

            <View style={{ backgroundColor: 'white' }}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={{
                  fontSize: wp('3.2'),
                  fontFamily: 'Poppins-Regular',
                  fontWeight: 'regular',
                  color: '#656565',
                  letterSpacing: wp('0.2'),
                }}
              >
                A-105, bullding no. 4, Kanpur Nagar, Uttar Pradesh Uttar Pradesh
              </Text>
            </View>
          </View>

          {/* <View
            style={{
              height: hp('14'),
              flexDirection: 'row',
              marginTop: hp('5'),
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'white',
              }}
            >
              <Text
                numberOfLines={2}
                style={{
                  fontSize: wp('3.5'),
                  fontFamily: 'Poppins-Regular',
                  fontWeight: 'semibold',
                  color: '#656565',
                  letterSpacing: wp('0.2'),
                }}
              >
                Delivery Address
              </Text>

              <View
                style={{
                  flex: 0.3,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Text
                  numberOfLines={2}
                  style={{
                    fontSize: wp('3.5'),
                    fontFamily: 'Poppins-Regular',
                    fontWeight: 'regular',
                    color: Colors.black,
                    letterSpacing: wp('0.2'),
                  }}
                >
                  Mohd Rehan
                </Text>

                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    flex: 0.2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Icon name="pencil" size={20} color="#000" />
                  <View
                    style={{
                      flex: 0.5,
                      backgroundColor: 'green',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  ></View>
                </TouchableOpacity>
              </View>

              <View style={{ flex: 0.6, backgroundColor: 'white' }}>
                <Text
                  numberOfLines={2}
                  ellipsizeMode="tail"
                  style={{
                    fontSize: wp('3.2'),
                    fontFamily: 'Poppins-Regular',
                    fontWeight: 'regular',
                    color: '#656565',
                    letterSpacing: wp('0.2'),
                  }}
                >
                  A-105, bullding no. 4, Kanpur Nagar, Uttar Pradesh Uttar
                  Pradesh
                </Text>
              </View>
            </View>
          </View> */}

          <View style={{ height: hp('14') }}>
            <View
              style={{
                height: hp('4'),
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: wp('3.8'),
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '700',
                  color: Colors.black,
                  letterSpacing: wp('0.2'),
                }}
              >
                Add pickup and delivery Date and Time
              </Text>
            </View>

            <View
              style={{
                height: hp('3'),
                backgroundColor: Colors.white,
                flexDirection: 'row',
                top: hp('0.5'),
              }}
            >
              <View style={{ flex: 0.05 }}></View>

              <View
                style={{
                  flex: 0.65,
                  flexDirection: 'row',
                }}
              >
                <Text
                  style={{
                    fontSize: wp('3'),
                    fontFamily: 'Poppins-Regular',
                    fontWeight: '500',
                    color: Colors.black,
                    letterSpacing: wp('0.2'),
                  }}
                >
                  Pickup Date*
                </Text>
              </View>
              <Text
                style={{
                  fontSize: wp('3'),
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '500',
                  color: Colors.black,
                  letterSpacing: wp('0.2'),
                }}
              >
                Pickup Time*
              </Text>
              <View style={{ flex: 0.3 }}></View>
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-around' }}
            >
              <View
                style={{
                  width: wp('40'),
                  height: hp('5'),
                  backgroundColor: 'white',
                  borderRadius: wp('2'),
                  borderWidth: wp('0.2'),
                  justifyContent: 'center',
                  paddingRight: wp('2'),
                  marginTop: hp('1'),
                }}
              >
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                  }}
                >
                  <Icon name="calendar" size={20} color="#000" />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  width: wp('40'),
                  height: hp('5'),
                  backgroundColor: 'white',
                  borderRadius: wp('2'),
                  borderWidth: wp('0.2'),
                  justifyContent: 'center',
                  paddingRight: wp('2'),
                  marginTop: hp('1'),
                }}
              >
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    marginTop: hp(''),
                    paddingRight: wp(''),
                  }}
                >
                  <Icon name="clock-o" size={20} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={{ height: hp('2'), justifyContent: 'center' }}>
            <View
              style={{
                width: wp('90'),
                borderBottomWidth: hp('0.1'),
                borderColor: 'lightwhite',
              }}
            ></View>
          </View>

          <View
            style={{
              height: hp('3'),
              backgroundColor: Colors.white,
              flexDirection: 'row',
            }}
          >
            <View style={{ flex: 0.05 }}></View>

            <View
              style={{
                flex: 0.7,
                flexDirection: 'row',
              }}
            >
              <Text
                style={{
                  fontSize: wp('3'),
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '500',
                  color: Colors.black,
                  letterSpacing: wp('0.2'),
                }}
              >
                Delivery Date*
              </Text>
            </View>
            <Text
              style={{
                fontSize: wp('3'),
                fontFamily: 'Poppins-Regular',
                fontWeight: '500',
                color: Colors.black,
                letterSpacing: wp('0.2'),
              }}
            >
              Delivery Time*
            </Text>
            <View style={{ flex: 0.3 }}></View>
          </View>

          <View
            style={{ flexDirection: 'row', justifyContent: 'space-around' }}
          >
            <View
              style={{
                width: wp('40'),
                height: hp('5'),
                backgroundColor: 'white',
                borderRadius: wp('2'),
                borderWidth: wp('0.2'),
                justifyContent: 'center',
                paddingRight: wp('2'),
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                }}
              >
                <Icon name="calendar" size={20} color="#000" />
              </TouchableOpacity>
            </View>

            <View
              style={{
                width: wp('40'),
                height: hp('5'),
                backgroundColor: 'white',
                borderRadius: wp('2'),
                borderWidth: wp('0.2'),
                justifyContent: 'center',
                paddingRight: wp('2'),
              }}
            >
              <TouchableOpacity
                style={{
                  alignSelf: 'flex-end',
                }}
              >
                <Icon name="clock-o" size={20} color="#000" />
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{ flex: 0.4, backgroundColor: 'white', marginTop: hp('2') }}
          >
            <View
              style={{
                flex: 0.15,
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: wp('3.8'),
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '700',
                  color: Colors.black,
                  letterSpacing: wp('0.2'),
                }}
              >
                Additional instructions
              </Text>
            </View>

            <View
              style={{
                flex: 0.6,
                backgroundColor: 'white',
                marginTop: hp('1.5'),
                borderWidth: 0.5,
                borderColor: Colors.black,
                borderRadius: wp('2'),
                alignItems: 'center',
              }}
            >
              <TextInput
                style={{
                  fontSize: wp('3.5'),
                  fontFamily: 'Poppins-Regular',
                  fontWeight: '500',
                  color: Colors.black,
                  letterSpacing: wp('0.1'),
                }}
                placeholder="Wash white separately and please care for sarees as well. Use cloth friendly detergents."
                placeholderTextColor={Colors.gray}
                multiline
                numberOfLines={3}
                value={note}
                onChangeText={setNote}
              />
            </View>
          </View>

          <View style={{ flex: 0.6, justifyContent: 'flex-end' }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('PaymentScreen')}
              style={{
                height: hp('8'),
                flexDirection: 'row',
                backgroundColor: Colors.naviBlue,
                borderRadius: wp('2'),
                marginBottom: hp('0.5'),
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: wp('1.5'),
              }}
            >
              <View
                style={{
                  flex: 0.15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image
                  source={{ uri: 'shirt' }}
                  style={{
                    height: hp('6'),
                    width: hp('12'),
                    borderRadius: wp('2'),
                  }}
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
                style={{
                  flex: 0.1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FontAwesomeIcon name="forward" size={16} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;
