import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../Styles/Colors';

const OrderDetailTextComponent = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default OrderDetailTextComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop:hp('1'),
    margin:hp('0.8')
  },
  label: {
    fontSize: hp('2'),
    fontFamily: 'Poppins-Medium',
    color: Colors.black,
  },
  value: {
    fontSize: hp('1.5'),
    color: Colors.darkGrey,
    fontFamily: 'Poppins-Medium',

  },
});
