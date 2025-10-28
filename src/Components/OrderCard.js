import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Colors from '../Styles/Colors'; // adjust path if needed

const OrderCard = ({
  orderNumber,
  pcs,
  serviceType,
  deliveryTime,
  price,
  address,
  status,
  onPressDetails,
  onPressCheckStatus
}) => {
  return (
    <View
      style={{
        marginTop: hp('2.5'),
        marginHorizontal: wp('2'),
        paddingHorizontal: wp('4'),
        borderRadius: wp('2'),
        backgroundColor: Colors.white,
        marginBottom: hp('2'),

        shadowColor: 'rgba(0,0,0,0.8)',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 4,
      }}
    >
      <View style={{ flexDirection: 'row', backgroundColor: Colors.white }}>
        <View
          style={{
            flex: 0.9,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: Colors.white,
          }}
        >
          <FontAwesomeIcon
            name="circle"
            size={20}
            color={Colors.trafficGreen}
          />
          <Text
            style={{
              fontSize: hp('2'),
              fontFamily: 'Poppins-Bold',
              letterSpacing: 0.2,
              marginLeft: wp('2.5'),
              color: Colors.black,
            }}
          >
            #{orderNumber} | {pcs} pcs
          </Text>
        </View>
        <View
          style={{
            flex: 0.1,
            backgroundColor: Colors.white,
            alignItems: 'flex-end',
            marginTop: hp('0.9'),
          }}
        >
          <Image
            source={{ uri: 'tshirt' }}
            style={{ width: wp('9.5'), height: hp('6'), resizeMode: 'contain' }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          bottom: hp('0.8'),
        }}
      >
        <View
          style={{
            flex: 0.1,
            alignItems: 'center',
            backgroundColor: Colors.white,
          }}
        ></View>
        <Text
          style={{
            fontSize: hp('1.8'),
            fontFamily: 'Poppins-Medium',
            letterSpacing: 0.2,
          }}
        >
          • {serviceType}
        </Text>
      </View>

      <View
        style={{
          flex: 0.4,
          flexDirection: 'row',
          backgroundColor: Colors.white,
        }}
      >
        <View
          style={{
            flex: 0.07,
            flexDirection: 'row',
            backgroundColor: Colors.white,
          }}
        ></View>

        <View
          style={{
            flex: 0.1,
            backgroundColor: Colors.white,
            justifyContent: 'center',
          }}
        >
          <FontAwesomeIcon name="clock-o" size={23} color={Colors.naviBlue} />
        </View>

        <View
          style={{
            flex: 0.48,
            backgroundColor: Colors.white,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: hp('1.8'),
              fontFamily: 'Poppins-Medium',
              color: Colors.grey,
              letterSpacing: 0.2,
              paddingLeft: wp('2.5'),
            }}
          >
            {deliveryTime}
          </Text>
        </View>

        <View
          style={{
            flex: 0.1,
            backgroundColor: Colors.white,
            justifyContent: 'center',
          }}
        >
          <FontAwesomeIcon
            name="credit-card"
            size={20}
            color={Colors.naviBlue}
          />
        </View>

        <View
          style={{
            flex: 0.65,
            backgroundColor: Colors.white,
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: hp('1.8'),
              fontFamily: 'Poppins-Medium',
              color: Colors.grey,
              letterSpacing: 0.2,
              marginLeft: wp('2.5'),
            }}
          >
            ₹ {price}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', backgroundColor: Colors.white }}>
        <View
          style={{
            flex: 0.15,
            backgroundColor: Colors.white,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <FontAwesomeIcon name="map-pin" size={20} color={Colors.naviBlue} />
        </View>

        <View
          style={{
            flex: 0.6,
            backgroundColor: Colors.white,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={{
              fontSize: hp('1.8'),
              fontFamily: 'Poppins-Medium',
              color: Colors.grey,
              letterSpacing: 0.2,
              paddingVertical: hp('0.5'),
            }}
          >
            {address}
          </Text>
        </View>

        <View
          style={{
            flex: 0.25,
            backgroundColor: Colors.white,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity onPress={onPressDetails}>
            <Text
              style={{
                fontSize: hp('1.6'),
                fontFamily: 'Poppins-Medium',
                color: Colors.naviBlue,
                letterSpacing: 0.2,
              }}
            >
              View Details
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.naviBlue,
          borderRadius: wp('2'),
          marginVertical: hp('1'),
        }}
      >
        <View
          style={{
            flex: 0.55,
            flexDirection: 'row',
            backgroundColor: Colors.DeliverdColor,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: wp('2'),
            paddingRight: wp('10'),
            paddingVertical: hp('1'),
          }}
        >
          <View style={{ paddingRight: wp('3') }}>
            <Image
              style={{ width: wp('8'), height: wp('4'), resizeMode: 'contain' }}
              source={{ uri: 'assign' }}
            />
          </View>
          <Text
            style={{
              fontSize: hp('1.8'),
              fontFamily: 'Poppins-Regular',
              color: Colors.black,
              letterSpacing: 0.2,
              paddingVertical: hp('0.5'),
            }}
          >
            {status}
          </Text>
        </View>

        <TouchableOpacity
        onPress={onPressCheckStatus}
          style={{
            flex: 0.45,
            backgroundColor: Colors.naviBlue,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: wp('2'),
          }}
        >

          <Text
            style={{
              fontSize: hp('1.6'),
              fontFamily: 'Poppins-Medium',
              color: Colors.white,
              letterSpacing: 0.2,
              paddingVertical: hp('0.5'),
            }}
          >
            Check Status
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderCard;
