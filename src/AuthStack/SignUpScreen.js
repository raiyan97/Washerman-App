import {
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
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

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };
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
      <ScrollView style={{ flexGrow: 1, backgroundColor: Colors.naviBlue }}>
        <ImageBackground
          source={{ uri: 'splash' }}
          style={{ flex: 1 }}
          resizeMode={'stretch'}
        >
          <View
            style={{
              flex: 0.135,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: Colors.white,
              marginTop: hp('14'),
            }}
          >
            <Image
              source={{ uri: 'washlogo' }}
              style={{ height: hp('12.5'), width: wp('25') }}
              resizeMode={'contain'}
            ></Image>
          </View>
          <View style={{ flex:0.665 , backgroundColor: Colors.white }}>
            <View style={styles.LoginConatiner}>
              <Text style={styles.LoginText}>Register</Text>
            </View>
            <View style={styles.EmailContain}>
              <Text style={styles.EmailText}>Full Name</Text>
            </View>
            <TextInputCom
              placeholder="Enter your Password"
              value={formData}
              onChangeText={setFormData}
              keyboardType="enter full name"
            />

            <View style={styles.EmailContain}>
              <Text style={styles.EmailText}>Email/Phone</Text>
            </View>
            <TextInputCom
              placeholder="Email or Phone"
              value={email}
              onChangeText={setEmail}
              keyboardType="enter full name"
            />
            <View style={styles.EmailContain}>
              <Text style={[styles.EmailText, { color: Colors.naviBlue }]}>
                Password
              </Text>
            </View>
            <TextInputCom
              placeholder="Enter your Password"
              value={email}
              onChangeText={setEmail}
              keyboardType="enter full name"
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
              flex: 0.200,
              justifyContent: 'center',
              backgroundColor:Colors.white,
              marginBottom: hp('16.5'),
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
                <Text style={styles.logantext}>Register</Text>
                
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  LoginConatiner: {
    paddingHorizontal: wp('5'),
    marginBottom:hp('0.8')
  },
  LoginText: {
    fontSize: hp('3.2'),
    fontWeight: '400',
    color: Colors.naviBlue,
  },
  EmailContain: {
    marginTop: hp('2'),
    marginHorizontal: wp('5'),
  },
  EmailText: {
    fontSize: hp('2'),
    color: Colors.naviBlue,
  },
  RegisterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp('2.9'),
    marginTop: hp('2.5'),
  },
  
  newText: {
    fontSize: hp('2'),
    color: Colors.black,
    bottom: hp('1'),
  },
  passswordText: {
    fontSize: hp('1.8'),
    color: Colors.black,
    fontWeight: '500',
    bottom: hp('1'),
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
    width: wp('23'),
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
