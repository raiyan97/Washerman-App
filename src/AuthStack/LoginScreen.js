import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  ImageBackground,
  StatusBar,
  ScrollView,
  RefreshControl,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../Styles/Colors';
import { useDispatch } from 'react-redux';
import { LoginAction } from '../ReduxToolkit/Slices/LoginProfileSlice';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [password, setPassword] = useState('');
// navigation.navigate('HomeScreen')


const onChangeEmail = (val) => {
  setEmail(val)
}

const onChangePassword = (val) => {
  setPassword(val)
}
console.log("email",email);
console.log("password",password);



const onPressLoginBtn = () => {
  console.log("onPressLoginBtn");
  
  dispatch(LoginAction({
    values:{
      email:email,
      password:password
    }
  }))
}

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  // ✅ Listen for keyboard events (to fix bottom space issue)
  useEffect(() => {
    const showSub = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardVisible(true),
    );
    const hideSub = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardVisible(false),
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <StatusBar
          barStyle="dark-content"
          translucent
          backgroundColor="transparent"
        />

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: keyboardVisible ? 0 : 0, // 👈 No gap after keyboard hides
          }}
          keyboardShouldPersistTaps="handled"
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#2A72B6', '#203B88']}
              progressBackgroundColor={'grey'}
              tintColor={'green'}
            />
          }
        >
          {/* ✅ Background inside ScrollView */}
          <ImageBackground
            source={{ uri: 'splash' }}
            style={{ flex: 1 }}
            resizeMode="stretch"
          >
            <View style={{ marginHorizontal: wp('5'), backgroundColor: '' }}>
              <View
                style={{
                  height: hp('20'),
                  borderRadius: wp('50'),
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: hp('15'),
                }}
              >
                <Image
                  source={{ uri: 'washlogo' }}
                  style={{
                    height: hp('20'),
                    width: wp('40'),
                    borderRadius: wp('50'),
                  }}
                  resizeMode="cover"
                />
              </View>

              <View
                style={{
                  justifyContent: 'center',
                  marginTop: hp('1'),
                  marginBottom: hp('1'),
                }}
              >
                <Text
                  style={{
                    fontSize: hp('2.5'),
                    color: Colors.naviBlue,
                    fontFamily: 'Poppins-Medium',
                    letterSpacing: 0.5,
                  }}
                >
                  Login
                </Text>
              </View>

              {/* Email */}
              <View style={{ marginTop: hp('2'), marginBottom: hp('0.5') }}>
                <Text
                  style={{
                    fontSize: hp('1.75'),
                    color: Colors.naviBlue,
                    fontFamily: 'Poppins-Regular',
                  }}
                >
                  Email
                </Text>
              </View>

              <View style={{ justifyContent: 'center', marginTop: hp('0.5') }}>
                <TextInput
                  placeholder="Enter your Email"
                  value={email}
                  onChangeText={onChangeEmail}
                  style={styles.input}
                />
              </View>

              {/* Password */}
              <View style={{ marginTop: hp('0'), marginBottom: hp('0.5') }}>
                <Text
                  style={{
                    fontSize: hp('1.75'),
                    color: Colors.naviBlue,
                    fontFamily: 'Poppins-Regular',
                  }}
                >
                  Password
                </Text>
              </View>

              <View style={{ justifyContent: 'center', marginTop: hp('0.5') }}>
                <TextInput
                  placeholder="Enter your Password"
                  value={password}
                  onChangeText={onChangePassword}
                  style={styles.input}
                  secureTextEntry
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: 'white',
                }}
              >
                <Text
                  style={{
                    fontSize: hp('1.9'),
                    color: 'black',
                    fontFamily: 'Poppins-Regular',
                  }}
                >
                  New Here ?{' '}
                  <Text
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={{
                      fontSize: hp('2'),
                      color: 'black',
                      fontFamily: 'Poppins-SemiBold',
                    }}
                  >
                    Register
                  </Text>
                </Text>

                <Text
                  style={{
                    fontSize: hp('1.9'),
                    color: 'black',
                    fontFamily: 'Poppins-Medium',
                  }}
                >
                  Forgot password ?
                </Text>
              </View>

              <View
                style={{
                  height: hp('6'),
                  flexDirection: 'row',
                  backgroundColor: Colors.white,
                  marginTop: hp('2'),
                }}
              >
                <View style={{ flex: 0.012, backgroundColor: 'white' }}></View>

                <View
                  style={{
                    height: hp('5'),
                    width: wp('10'),
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: wp('1'),

                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 2,

                    elevation: 2,
                  }}
                >
                  <Image
                    source={{ uri: 'google' }}
                    style={{
                      width: wp('5'),
                      height: hp('2.5'),
                      resizeMode: 'cover',
                    }}
                  />
                </View>
                <View style={{ flex: 0.09 }}></View>

                <View
                  style={{
                    height: hp('5'),
                    width: wp('10'),
                    backgroundColor: Colors.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: wp('1'),

                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                  }}
                >
                  <Image
                    source={{ uri: 'fbicon' }}
                    style={{
                      width: wp('6'),
                      height: hp('3'),
                      resizeMode: 'cover',
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 0.57,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: wp('2'),
                  }}
                ></View>

                <TouchableOpacity
                  onPress={onPressLoginBtn}
                  style={{
                    flex: 0.32,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: Colors.white,

                    borderRadius: wp('2'),

                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 2,
                  }}
                >
                  <Text
                    style={{
                      fontSize: hp('2'),
                      color: Colors.black,
                      fontFamily: 'Poppins-Medium',
                    }}
                  >
                    Login
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.naviBlue,
    borderRadius: wp('2.5%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.5%'),
    backgroundColor: '#fff',
    marginBottom: hp('2%'),
    fontSize: hp('2%'),
  },
});
