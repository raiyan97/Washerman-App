import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import TextInputCom from '../Components/TextInputCom';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from '../Screens/Home/HomeScreen';
import Colors from '../Styles/Colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <StatusBar
        barStyle="dark-content" // dark text for light backgrounds
        translucent
        backgroundColor="transparent"
      />

      <ImageBackground
        source={{ uri: 'splash' }}
        style={{ flex: 1 }}
        resizeMode={'stretch'}
      >
        <View
          style={{
            flex: 0.315,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: Colors.white,
            marginTop: hp('15'),
          }}
        >
          <Image
            source={{ uri: 'washlogo' }}
            style={{ height: hp('20'), width: wp('20') }}
            resizeMode={'cover'}
          ></Image>
        </View>
        <View style={{ flex: 0.55, backgroundColor: Colors.white }}>
          <View style={styles.LoginConatiner}>
            <Text style={styles.LoginText}>Login</Text>
          </View>
          <View style={styles.EmailContain}>
            <Text style={styles.EmailText}>Email</Text>
          </View>
          <TextInputCom
            placeholder="Enter your Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <View style={styles.EmailContain}>
            <Text style={[styles.EmailText, { color:Colors.naviBlue }]}>Password</Text>
          </View>
          <TextInputCom
            placeholder="Enter your Password"
            value={password}
            onChangeText={setPassword}
            keyboardType="email-address"
          />
          <View style={styles.RegisterContainer}>
            <Text style={styles.newText}>
              New Here ?{' '}
              <Text
                style={{ fontWeight: '500' }}
                onPress={() => navigation.navigate('SignUpScreen')}
              >
                Register
              </Text>
            </Text>
            {/* <Text style={styles.RegisterText}>? Register </Text> */}
            <Text style={styles.passswordText}>Forgot Password ? </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.135,
            justifyContent: 'center',
            backgroundColor: 'white',
            marginBottom: hp('15'),
          }}
        >
          <View style={styles.buttonContaioner}>
            <View style={styles.gogleContainer}>
              <Image style={styles.googleIMG} source={{ uri: 'google' }} />
            </View>
            <View style={styles.fbContainer}>
              <Image style={styles.fbIMG} source={{ uri: 'fbicon' }} />
            </View>

            <TouchableOpacity
              style={styles.lgnContainer}
              onPress={() => navigation.navigate('HomeScreen')}
            >
              <Text style={styles.logantext}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  LoginConatiner: {
    paddingHorizontal: wp('5'),
  },
  LoginText: {
    fontSize: hp('3.1'),
    fontWeight: '500',
    color:Colors.naviBlue
  },
  EmailContain: {
    marginTop: hp('2.8'),
    marginHorizontal: wp('5'),
  },
  EmailText: {
    fontSize: hp('1.9'),
    color:Colors.naviBlue,
  },
  RegisterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp('2.9'),
    marginTop: hp('2.5'),
  },
  RegisterText: {
    fontSize: hp('2'),
    color: '#000',
    fontWeight: '500',
    marginRight: hp(5),
  },
  newText: {
    fontSize: hp('2'),
    color: Colors.black,

  },
  passswordText: {
    fontSize: hp('1.8'),
    color: Colors.black,
    fontWeight: '500',
    // bottom: hp('1'),
  },
  buttonContaioner: {
    paddingHorizontal: hp('3'),
    flexDirection: 'row',
    justifyContent: 'space-between', // center items together
    alignItems: 'center', // vertical align
  },
  gogleContainer: {
    height: hp('6'),
    width: wp('12'),
    borderRadius: wp('3'),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:hp('2'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: wp('10'),
    shadowRadius: wp('10'),
    elevation: 10,
    backgroundColor: 'white',
  },
  googleIMG: {
    width: wp('8'),
    height: hp('3'),
    resizeMode: 'contain',
    borderRadius: wp('2'),
  },
  fbContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('6'),
    width: wp('12'),
    marginTop:hp('2'),
    borderRadius: wp('3'),
    marginRight: hp('17'),
    shadowColor:Colors.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: wp('10'),
    shadowRadius: wp('10'),
    elevation: 10,
    backgroundColor: 'white',
  },
  fbIMG: {
    width: wp('8'),
    height: hp('3.5'),
    resizeMode: 'contain',
    borderRadius: wp('2'),
  },
  lgnContainer: {
    width: wp('21'),
    height: hp('6'),
    justifyContent: 'center',
    borderRadius: wp('2'),
    marginTop:hp('2'),
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: wp('10'),
    shadowRadius: wp('10'),
    elevation: 10,
    backgroundColor:Colors.white,
  },

  logantext: {
     fontSize: hp(1.9),
    fontWeight: '500',
    color: Colors.black,
    alignSelf: 'center',
  },
});
