import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ProceedButton from '../../Components/ProceedButton';
import { useNavigation } from '@react-navigation/native';

const PaymentScreen = ({}) => {
  const navigation = useNavigation();
const [onlinePayment,setOnlinePayment] = useState(false)
const [COD,setCOD] = useState(false)

const onPressOnlinePayment= ()=> {
  setOnlinePayment(!onlinePayment)
setCOD(false)
}

const onPressCOD= ()=> {
 setCOD(!COD)
 setOnlinePayment(false)
}

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: Colors.white,
            height: hp('8'),
          }}
        >
          <TouchableOpacity
          onPress={()=>navigation.goBack('DetailScreen')}
            style={{
              flex: 0.1,
              backgroundColor: Colors.white,
              paddingHorizontal: wp('4.5'),
              justifyContent: 'center',
            }}
          >
            <Image
              source={{ uri: 'arrowleft' }}
              style={{ width: wp('6.5'), height: hp('3.5'), resizeMode: 'contain' }}
            />
          </TouchableOpacity>

          <View
            style={{
              flex: 0.9,
              backgroundColor: Colors.white,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: hp('2.2'),
                fontFamily: 'Poppins-SemiBold',
                color: Colors.black,
                letterSpacing: 0.4,
              }}
            >
              Payment
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 0.05,
            backgroundColor: Colors.white,
            justifyContent: 'center',
            paddingHorizontal: wp('4.5'),
          }}
        >
          <Text
            style={{
              fontSize: hp('2.1'),
              fontFamily: 'Poppins-SemiBold',
              color: Colors.black,
              letterSpacing: 0.4,
            }}
          >
            Order Summary
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            flex: 0.08,
            backgroundColor: Colors.white,
            marginTop: wp('0.3'),
            borderWidth: wp('0.2'),
            borderColor: Colors.grey,
            marginHorizontal: wp('4'),
            borderRadius: wp('0.6'),
            borderTopWidth:wp('0.5')
          }}
        >
          <View
            style={{
              flex: 0.26,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: Colors.white,
              paddingHorizontal: wp('4'),
              borderBottomWidth: hp('0.2'),
              borderColor: Colors.grey,
            }}
          >
            <Text
              style={{
                fontSize: hp('2'),
                fontFamily: 'Poppins-Medium',
                color: Colors.black,
                letterSpacing: 0.4,
              }}
            >
              Subtotal
            </Text>
            <Text
              style={{
                fontSize: hp('2'),
                fontFamily: 'Poppins-Medium',
                color: Colors.black,
                letterSpacing: 0.4,
              }}
            >
              ₹ 300
            </Text>
          </View>

          <View
            style={{
              flex: 0.24,
              backgroundColor: Colors.white,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: wp('4'),
              borderBottomWidth: hp('0.2'),
              borderColor: Colors.grey,
            }}
          >
            <Text
              style={{
                fontSize: hp('2'),
                fontFamily: 'Poppins-Medium',
                color: Colors.black,
                letterSpacing: 0.4,
              }}
            >
              Discount
            </Text>

            <Text
              style={{
                fontSize: hp('2'),
                fontFamily: 'Poppins-Medium',
                color: Colors.black,
                letterSpacing: 0.4,
              }}
            >
              ₹ 100
            </Text>
          </View>

          <View
            style={{
              flex: 0.24,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: Colors.white,
              paddingHorizontal: wp('4'),
              borderBottomWidth: hp('0.2'),
              borderColor: Colors.grey,
            }}
          >
            <Text
              style={{
                fontSize: hp('2'),
                fontFamily: 'Poppins-Medium',
                color: Colors.black,
                letterSpacing: 0.4,
              }}
            >
              Tax
            </Text>
            <Text
              style={{
                fontSize: hp('2'),
                fontFamily: 'Poppins-Medium',
                color: Colors.black,
                letterSpacing: 0.4,
              }}
            >
              ₹ 10
            </Text>
          </View>

          <View
            style={{
              flex: 0.26,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: Colors.white,
              paddingHorizontal: wp('4'),
              borderBottomWidth: hp('0.2'),
              borderColor: Colors.grey,
            }}
          >
            <Text
              style={{
                fontSize: hp('2'),
                fontFamily: 'Poppins-Bold',
                color: Colors.black,
                letterSpacing: 0.4,
              }}
            >
              Total
            </Text>
            <Text
              style={{
                fontSize: hp('2'),
                fontFamily: 'Poppins-Bold',
                color: Colors.black,
                letterSpacing: 0.4,
              }}
            >
              ₹ 210
            </Text>
          </View>
        </View>

        <View
          style={{
            flex: 0.2, // mera question ye ha ki yaha maine jo flex diya ha usko to one nahi kar skte hai to yaha pe kya height main view me
            flexDirection: 'column',
            backgroundColor: Colors.white,
            marginTop: hp('2.5'),
            marginHorizontal: wp('1.5'),
          }}
        >
          <View
            style={{
              flex: 0.2,
              backgroundColor: Colors.white,
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wp('4'),
            }}
          >
            <Text
              style={{
                fontSize: hp('2.1'),
                fontFamily: 'Poppins-SemiBold',
                color: Colors.black,
                letterSpacing: 0.4,
              }}
            >
              Payment mode
            </Text>
          </View>
       
       
   
       <View
            style={{
              flexDirection: 'row',
              // backgroundColor:"red",
              paddingHorizontal: wp('4'),
              alignItems: 'center',
              paddingVertical:hp('1')

            }}
          >

            <TouchableOpacity 
            onPress={onPressOnlinePayment}
            style={{flex:0.12,justifyContent:"center"}}>
            <Image
              style={{
                width: wp('6'),
                height: hp('3'),
                resizeMode: 'contain',
              }}
              source={{ uri: onlinePayment? 'radioblue': 'oval' }}
            />
            </TouchableOpacity>

           <TouchableOpacity style={{flex:0.5,justifyContent:"center"}}>
            <Text
              style={{
                fontSize: wp('4.2'),
                fontFamily: 'Poppins-Regular',
                fontWeight: '500',
                color: Colors.black,
              }}
            >
              Online payment
            </Text>
          </TouchableOpacity>
          <View style={{flex:0.38,backgroundColor:"purple"}}>
 
          </View>
          </View>



          <View
            style={{
              flexDirection: 'row',
              // backgroundColor:"red",
              paddingHorizontal: wp('4'),
              alignItems: 'center',
              paddingVertical:hp('1')

            }}
          >

            <TouchableOpacity
            onPress={onPressCOD}
            style={{flex:0.12,justifyContent:"center"}}>
            <Image
              style={{
                width: wp('6'),
                height: hp('3'),
                resizeMode: 'contain',
              }}
              source={{ uri: COD? 'radioblue' :'oval' }}
            />
            </TouchableOpacity>

           <TouchableOpacity style={{flex:0.5,justifyContent:"center"}}>
            <Text
              style={{
                fontSize: wp('4.2'),
                fontFamily: 'Poppins-Regular',
                fontWeight: '500',
                color: Colors.black,
              }}
            >
              Cash on Delivery
            </Text>
          </TouchableOpacity>
          <View style={{flex:0.38,backgroundColor:"purple"}}>
 
          </View>
          </View>
        </View>

        <View style={{ flex: 0.66, backgroundColor: Colors.white,justifyContent:"flex-end" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderConfirmScreen')}
            style={{
              height: hp('8'),
              flexDirection: 'row',
              backgroundColor:Colors.naviBlue,
              marginHorizontal: wp('4'),
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;
