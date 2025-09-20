import {
  View,
  Text,
  Touchable,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  ImageBackground,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Color } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
import Colors from '../Styles/Colors';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LoginScreen'); // replace so SplashScreen is not in back stack
    }, 3000);

    return () => clearTimeout(timer); // cleanup
  }, [navigation]);
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
          style={{ flex: 1, justifyContent: 'center', alignSelf: 'center',
             

           }}
        >
          <Image
            style={{ width: wp('30'), height: hp('30'),
              
             }}
            source={{ uri: 'washlogo' }}
          />
          <Text
            style={{
              bottom: hp('8'),
              fontSize: hp('2.5'),
              fontWeight: '700',
              textAlign: 'center',
              color: Colors.logoTExt,
            }}
          >
            WasherMan
          </Text>

          <View style={{}}></View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
