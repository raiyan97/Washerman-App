import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../Styles/Colors';
import { PieChart } from 'react-native-gifted-charts';
import OrderDetailTextComponent from '../../Components/OrderDetailTextComponent';
import { useNavigation } from '@react-navigation/native';

const OrderDetailsScreen = () => {
  const navigation = useNavigation();
  const pieData = [
    { value: 70, color: Colors.naviBlue, text: '70%' },
    { value: 30, color: '#D3D3D3', text: '30%' },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            height: hp('6'),
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack('OrderActiveScreen')}
            style={{
              flex: 0.2,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: 'arrowleft' }}
              style={{
                width: wp('6'),
                height: hp('3'),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flex: 0.6,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: hp('2'),
                fontFamily: 'Poppins-SemiBold',
                color: Colors.black,
                letterSpacing: wp('0.3'),
              }}
            >
              Order Details
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor:Colors.white,
            marginBottom:hp('1.5')
          }}
        >
          <View style={styles.chartContainer}>
            <PieChart
              data={pieData}
              donut
              sectionAutoFocus
              // showText
              textColor="white"
              radius={hp('13')}
              innerRadius={hp('11')}
              centerLabelComponent={() => (
                <View
                  style={{ justifyContent: 'center', alignItems: 'center' }}
                >
                  <Text style={styles.centerText}>75 %</Text>
                  <Text style={styles.centerText}>Wash Process</Text>
                </View>
              )}
            />
            <TouchableOpacity
            activeOpacity={0.8}
              style={{
                height: hp('4'),
                width: wp('29'),
                backgroundColor: Colors.naviBlue,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: wp('2'),

                shadowColor: '#000',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.3,
                shadowRadius: 5,

                // Android shadow
                elevation: 6,
              }}
            >
              <Text
                style={{
                  fontSize: hp('1.8'),
                  fontFamily: 'Poppins-Medium',
                  color: Colors.white,
                  letterSpacing: 0.2,
                }}
              >
                Wash & Iron
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginHorizontal: wp('9') }}>
          <OrderDetailTextComponent label="Order" value="#0556" />

          <OrderDetailTextComponent
            label="Pickup"
            value="10:00  AM  |  10/01/2025"
          />

          <OrderDetailTextComponent
            label="Delivery"
            value="05:00  PM  |  13/01/2025"
          />

          <OrderDetailTextComponent
            label="Pickup"
            value="10:00  AM  |  10/01/2025"
          />

          <OrderDetailTextComponent
            label="Pickup Address"
            value="A-105, bullding no. 4, Kanpur Nagar, Uttar Pradesh"
          />

          <OrderDetailTextComponent
            label="Delivery Address"
            value="A-105, bullding no. 4"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetailsScreen;

const styles = StyleSheet.create({
  chartContainer: {
    height: hp('34'),
    width: wp('76'),
    alignItems: 'center',
    marginTop: hp('2'),
    backgroundColor: Colors.white,
    borderRadius: wp('5'),

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,

    // Android shadow
    elevation: 6,
  },
  centerText: {
    fontSize: hp('3'),
    fontFamily: 'Poppins-Medium',
    color: Colors.naviBlue,
  },
  centerText: {
    fontSize: hp('1.85'),
    fontFamily: 'Poppins-Medium',
    color: Colors.naviBlue,
    letterSpacing: 0.2,
  },
});
