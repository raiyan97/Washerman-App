import { View, Text, TextInput, StyleSheet } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TextInputCom = ({
  placeholder,
  onChnageText,
  value,
  keyboardType,
  secureTextEntry,
  autoCapitalize,
  style,
}) => {
  return (
    <View>
      <TextInput
        placeholder={placeholder}
        onChangeText={onChnageText}
        value={value}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        style={[styles.TextField, style]}
      ></TextInput>
    </View>
  );
};

export default TextInputCom;

const styles = StyleSheet.create({
  TextField: {
    height: hp('6'),
    width: wp('90'),
    borderColor: '#418AEC',
    borderWidth: 1,
    borderWidthColor: '#418AEC',
    borderRadius: wp('1'),
    backgroundColor: '#fff',
    fontSize: wp('4'),
  },
});
