import React from 'react';
import {
  StatusBar,
  FlatList,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import Colors from '../../Styles/Colors';
import OrderCard from '../../Components/OrderCard'; // path adjust if needed
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Orders data (can later come from API)
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

const OrderCompleteScreen = () => {
  // const navigation = useNavigation();

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
            backgroundColor: Colors.white,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        ></View>
        <View
          style={{
            flex: 0.6,
            backgroundColor: Colors.white,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: hp('2'),
              fontFamily: 'Poppins-Regular',
              fontWeight: '700',
              color: Colors.black,
              letterSpacing: wp('0.3'),
            }}
          >
            My Order
          </Text>
        </View>
        <View style={{ flex: 0.2, backgroundColor: Colors.white }}></View>
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
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            flex: 0.45,
            backgroundColor: Colors.naviBlue,
            justifyContent: 'center',
            borderRadius: wp('2'),
            alignItems: 'center',
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
        </TouchableOpacity>

        <View style={{ flex: 0.1 }}></View>

        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            flex: 0.45,
            backgroundColor: Colors.darkGrey,
            justifyContent: 'center',
            borderRadius: wp('2'),
            alignItems: 'center',
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
        </TouchableOpacity>
      </View>

      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <OrderCard
            orderNumber={item.orderNumber}
            pcs={item.pcs}
            serviceType={item.serviceType}
            deliveryTime={item.deliveryTime}
            price={item.price}
            address={item.address}
            status={item.status}
            onPressDetails={() =>
              navigation.navigate('OrderDetailsScreen', { orderId: item.id })
            }
          />
        )}
      />
    </SafeAreaView>
  );
};

export default OrderCompleteScreen;
