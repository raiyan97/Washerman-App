import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../Styles/Colors';
// const [qty, setQty] = useState(0);

const CardComponent = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
      }}
    >
      <View
        style={{
          marginTop: hp('5'),
          width: wp('45'),
          height: hp('13'),
          backgroundColor: 'white',
          borderRadius: wp('3'),
          shadowColor: Colors.black,
          shadowOffset: {
            width: 0,
            height: 8,
            shadowOpacity: wp('10'),
            shadowRadius: wp('10'),
            elevation: 10,
            backgroundColor: 'white',
          },
        }}
      >
        <Text
          style={{
            fontSize: wp('4'),
            fontFamily: 'Poppins-Regular',
            paddingHorizontal: hp('3'),
            marginTop: hp('1'),
          }}
        >
          T-Shirt
        </Text>
        <View
          style={{
            position: 'absolute',
            top: -10,
            left: 140,
            right: 0,
            bottom: 0,
          }}
        >
          <Image
            style={{ width: wp('10'), height: hp('5'), resizeMode: 'contain' }}
            source={{ uri: 'laundry' }}
          />
        </View>
        <Text
          style={{
            fontSize: wp('3'),
            fontFamily: 'Poppins-Regular',
            paddingHorizontal: hp('3'),
            color: Colors.grey,
          }}
        >
          White cotton
        </Text>
        <Text
          style={{
            fontSize: wp('4'),
            fontFamily: 'Poppins-Regular',
            paddingHorizontal: hp('3'),
            color: Colors.black,
            marginTop: hp('1.9'),
          }}
        >
          ₹ 15
        </Text>
      </View>
      <View
        style={{
          marginTop: hp('5'),
          width: wp('45'),
          height: hp('13'),
          backgroundColor: 'white',
          borderRadius: wp('3'),
        }}
      ></View>
      <View style={styles.qtyContainer}>
      <TouchableOpacity
        style={styles.qtyButton}
        onPress={() => setQty(qty > 0 ? qty - 1 : 0)}
      >
        <Text style={styles.qtyText}>-</Text>
      </TouchableOpacity>

      <Text style={styles.qtyNumber}>{}</Text>

      <TouchableOpacity
        style={styles.qtyButton}
        onPress={() => setQty(qty + 1)}
      >
        <Text style={styles.qtyText}>+</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default CardComponent;

const styles = StyleSheet.create({
  qtyContainer: {
    // flexDirection: 'row',
    alignSelf:"center",
    backgroundColor: Colors.silverGrey,
    borderRadius: wp('5'),
    paddingHorizontal: wp('2'),
    paddingVertical: hp('0.5'),
  },
  qtyButton: {
    backgroundColor: Colors.white,
    borderRadius: wp('5'),
    paddingHorizontal: wp('3'),
    paddingVertical: hp('0.5'),
    marginHorizontal: 2,
  },
  qtyText: {
    fontSize: wp('5'),
    fontWeight: '600',
    color: Colors.black,
  },
  qtyNumber: {
    fontSize: wp('4'),
    fontWeight: '600',
    marginHorizontal: wp('2'),
    color: Colors.black,
  },
});
