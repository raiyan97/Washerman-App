import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

import Colors from '../Styles/Colors';

const ActiveOrderComponent = ({
  orderId,
  pieces,
  service,
  time,
  price,
  address,
  status,
  onCheckStatus,
  onViewDetails,
}) => {
  return (
    <View style={styles.card}>
      {/* Top Row */}
      <View style={styles.row}>
        <View style={styles.row}>
          <View style={styles.dot} />
          <Text style={styles.title}>
            #{orderId} | {pieces} pcs
          </Text>
        </View>
        <Image source={{ uri: 'dry' }} style={styles.image} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: wp('5'),
          width: wp('1'),
          height: hp('0.5'),
          backgroundColor: 'black',
          borderRadius: wp('2'),
        }}
      ></View>
      <Text style={styles.service}>{service}</Text>

      {/* Time and Price */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: hp('0.5'),
        }}
      >
        <Icon name="clock-o" size={18} color={Colors.naviBlue} />
        <Text
          style={{
            marginRight: wp('45'),
            fontWeight: '500',
            fontSize: wp('2.9'),
            fontFamily: 'Poppins-Regular',
            color: '#444',
            letterSpacing: 0.2,
            left: wp('-1'),
          }}
        >
          {time}
        </Text>

        <View style={{ flexDirection: 'row', right: wp('32') }}>
          <Icon name="credit-card" size={18} color={Colors.naviBlue} />
          <Text
            style={{
              fontWeight: '500',
              fontSize: wp('2.9'),
              fontFamily: 'Poppins-Regular',
              color: '#444',
              letterSpacing: 0.2,
              left: wp('2'),
            }}
          >
            ₹ {price}
          </Text>
        </View>
      </View>

      {/* Address */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: hp('1.5'),
          left: wp('3.4'),
        }}
      >
        <Icon name="map-pin" size={18} color={Colors.naviBlue} />

        <Text
        numberOfLines={2}
        ellipsizeMode='tail'
          style={{
            fontWeight: '500',
            fontSize: wp('3.5'),
            fontFamily: 'Poppins-Regular',
            color: '#444',
            letterSpacing: 0.2,
            left: wp('3.4'),
          }}
        >
          {address}
        </Text>

        <TouchableOpacity onPress={onViewDetails}>
          <Text style={styles.viewDetails}>View Details</Text>
        </TouchableOpacity>
      </View>
      {/* Buttons */}
      <View style={styles.rowBetween}>
        <TouchableOpacity style={styles.deliveredBtn}>
          <Image
            style={{
              backgroundColor: 'purple',
              width: wp('5'),
              height: hp('2.5'),
              resizeMode: 'contain',
              top: wp('4'),
              right: wp('7'),
            }}
            source={{ uri: 'assign' }}
          />
          <Text style={styles.deliveredText}>{status}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.checkBtn} onPress={onCheckStatus}>
          <Text style={styles.checkText}>Check Status</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ActiveOrderComponent;

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    margin: wp('2'), // 10px ≈ 2.5% of screen width
    borderRadius: wp('2.5'), // 10px ≈ 2.5% of screen width
    padding: wp('3'), // 15px ≈ 4% of screen width
    elevation: 4,
  },
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: hp('1.5'),
  },
  dot: {
    width: wp('4'),
    height: wp('4'),
    borderRadius: wp('2'),
    backgroundColor: Colors.trafficGreen,
    marginRight: wp('1.5%'),
  },
  title: {
    fontWeight: 'bold',
    fontSize: wp('3.9'),
    fontFamily: 'Poppins-Regular',
  },
  service: {
    fontWeight: '500',
    fontSize: wp('2.9'),
    fontFamily: 'Poppins-Regular',
    color: '#444',
    marginTop: hp('-1.5'),
    marginLeft: wp('9'),
  },

  text: { marginHorizontal: wp('1'), color: '#555' },
  image: {
    width: wp(' 10'),
    height: hp(' 5'),
    resizeMode: 'contain',
  },
  deliveredBtn: {
    backgroundColor: Colors.grey,
    // paddingVertical: hp('1.4'), // 8px approx
    paddingHorizontal: wp('16'), // 20px approx
    borderRadius: wp('2'),
  },
  deliveredText: {
    color: '#555',
    fontWeight: '600',
    fontWeight: '700',
    fontSize: wp('4'),
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.2,
  },
  checkBtn: {
    backgroundColor: Colors.naviBlue,
    paddingVertical: hp('1.9'), // 8px approx
    paddingHorizontal: wp('8'), // 20px approx
    borderRadius: wp('2'),
    right: wp('5'),
  },
  checkText: {
    color: Colors.white,
    fontWeight: '600',
    fontWeight: '700',
    fontSize: wp('4'),
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.2,
  },
  viewDetails: {
    color: Colors.naviBlue,
    fontWeight: '600',
    fontWeight: '700',
    fontSize: wp('3.2'),
    fontFamily: 'Poppins-Regular',
    letterSpacing: 0.2,
    marginTop: hp('1.5'),
    top: wp('1'),
    right: wp('13'),
  },
});
