import React, { useState } from 'react';
import {
  StatusBar,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../Styles/Colors';
import OrderCard from '../../Components/OrderCard'; // path adjust if needed
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ModalOrders from '../../Components/Modals/ModalOrders';
import OrderConfirmScreen from '../OrderConfirm/OrderConfirmScreen';

// Orders data (can later come from API)

const OrderActiveScreen = () => {
  const orders = [
    {
      id: '1',
      orderNumber: '8989',
      pcs: '13',
      serviceType: 'Dry Cleaning',
      deliveryTime: '28 Hour',
      price: '410',
      address: 'A-105, building no. 4 Kanpur Nagar, Uttar Pradesh',
      status: 'Delivered',
    },
    {
      id: '2',
      orderNumber: '8990',
      pcs: '10',
      serviceType: 'Laundry',
      deliveryTime: '24 Hour',
      price: '300',
      address: 'B-205, building no. 5 Kanpur Nagar, Uttar Pradesh',
      status: 'Delivered',
    },
    {
      id: '3',
      orderNumber: '8991',
      pcs: '7',
      serviceType: 'Ironing',
      deliveryTime: '12 Hour',
      price: '150',
      address: 'C-301, building no. 3 Kanpur Nagar, Uttar Pradesh',
      status: 'Pending',
    },
    {
      id: '4',
      orderNumber: '8991',
      pcs: '7',
      serviceType: 'Ironing',
      deliveryTime: '12 Hour',
      price: '150',
      address: 'C-301, building no. 3 Kanpur Nagar, Uttar Pradesh',
      status: 'Pending',
    },
  ];

  const navigation = useNavigation();
  const [myText, setMyText] = useState('');
  const [orderVisible, setOrderVisible] = useState(false);
  const onPressOrderVisible = () => {
    setOrderVisible(!orderVisible);
  };

  const onPressCheckStatus = ({ item }) => {
    setMyText(item.id);
    setOrderVisible(!orderVisible);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          marginTop: hp('2.5'),
          marginHorizontal: wp('5'),
          paddingHorizontal: wp('4'),
          borderRadius: wp('2'),
          backgroundColor: Colors.white,
          marginBottom: hp('2'),

          shadowColor: 'rgba(0,0,0,0.8)',
          shadowOffset: { width: 5, height: 5 },
          shadowOpacity: 0.5,
          shadowRadius: 8,
          elevation: 9,
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
              #{item.orderNumber} | {item.pcs} pcs
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
              style={{
                width: wp('9.5'),
                height: hp('6'),
                resizeMode: 'contain',
              }}
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
            • {item.serviceType}
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
                paddingLeft: wp('1'),
              }}
            >
              {item.deliveryTime}
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
              ₹ {item.price}
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
              {item.address}
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
            <TouchableOpacity
              onPress={() => navigation.navigate('OrderDetailsScreen')}
            >
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
            marginVertical: hp('2'),
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
                style={{
                  width: wp('8'),
                  height: wp('4'),
                  resizeMode: 'contain',
                }}
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
              {item.status}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => onPressCheckStatus({ item })}
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
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: Colors.white,
          height: hp('8'),
        }}
      >
        <View
          style={{
            flex: 0.2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        ></View>

        <View
          style={{
            flex: 0.6,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: hp('2'),
              fontFamily: 'Poppins-Regular',
              fontWeight: '700',
              color: 'black',
              letterSpacing: wp('0.3'),
            }}
          >
            My Order 
          </Text>
        </View>
        <View style={{ flex: 0.2 }}></View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          height: hp('6'),
          backgroundColor: Colors.white,
          marginTop: hp('2'),
          marginHorizontal: wp('5'),
        }}
      >
        <View
          style={{
            flex: 0.47,
            backgroundColor: Colors.naviBlue,
            justifyContent: 'center',
            borderRadius: wp('2'),
            alignItems: 'center',

            shadowColor: 'rgba(0,0,0,0.8)',
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.5,
            shadowRadius: 8,
            elevation: 10,
          }}
        >
          <Text
            style={{
              fontSize: hp('2'),
              fontFamily: 'Poppins-Medium',
              fontWeight: '500',
              color: Colors.white,
              letterSpacing: wp('0.3'),
            }}
          >
            My Order
          </Text>
        </View>

        <View style={{ flex: 0.06 }}></View>

        <View
          style={{
            flex: 0.47,
            backgroundColor: Colors.darkGrey,
            justifyContent: 'center',
            borderRadius: wp('2'),
            alignItems: 'center',

            shadowColor: 'rgba(0,0,0,0.8)',
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.5,
            shadowRadius: 8,
            elevation: 10,
          }}
        >
          <Text
            style={{
              fontSize: hp('2'),
              fontFamily: 'Poppins-Regular',
              fontWeight: '500',
              color: Colors.white,
              letterSpacing: wp('0.3'),
            }}
          >
            Complete
          </Text>
        </View>
      </View>

      {/* <TouchableOpacity
        onPress={onPressOrderVisible}
        style={{
          height: hp('5'),
          backgroundColor: 'yellow',
          margin: hp('2'),
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Button</Text>
      </TouchableOpacity> */}

      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={renderItem}

        // renderItem={({ item }) => (
        //   <OrderCard
        //   onPressCheckStatus={onPressCheckStatus(item)}

        //     orderNumber={item.orderNumber}
        //     pcs={item.pcs}
        //     serviceType={item.serviceType}
        //     deliveryTime={item.deliveryTime}
        //     price={item.price}
        //     address={item.address}
        //     status={item.status}

        //     onPressDetails={() =>
        //       navigation.navigate('OrderCompleteScreen', { orderId: item.id })
        //     }
        //   />
        // )}
      />

      {orderVisible && (
        <ModalOrders text={myText} onPressCross={onPressOrderVisible} />
      )}
    </SafeAreaView>
  );
};

export default OrderActiveScreen;
