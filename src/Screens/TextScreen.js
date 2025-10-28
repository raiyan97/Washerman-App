import { View, Text, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useNavigation } from '@react-navigation/native';

const TextScreen = () => {
    // const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'red' }}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <ScrollView style={{ flexGrow: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'black',
            height: hp('10'),
          }}
        >
          <View style={{ flex: 0.25, backgroundColor: 'brown' }}></View>
          <View style={{ flex: 0.5, backgroundColor: 'green' }}></View>
          <View style={{ flex: 0.25, backgroundColor: 'brown' }}></View>
        </View>

        <View
          style={{
            height: hp('30'),
            backgroundColor: 'black',
            marginTop: hp('4'),
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: 'purple',
              paddingVertical: hp('2'),
              justifyContent: 'space-around',
            }}
          >
          
            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={()=>navigation.navigate("TextScreen2")}
              style={{
                flex: 0.3,
                backgroundColor: 'yellow',
                height: hp('26'),
              }}
            ></TouchableOpacity>

            <View
              style={{
                flex: 0.3,
                backgroundColor: 'yellow',
                height: hp('26'),
              }}
            ></View>

            <View
              style={{
                flex: 0.3,
                backgroundColor: 'yellow',
                height: hp('26'),
                flexDirection: 'column',
              }}
            >
              <View
                style={{
                flex:0.5,
                  backgroundColor: 'green',
                }}
              ></View>
              <View
                style={{
                flex:0.5,
                  backgroundColor: 'orange',
                  flexDirection:"row",

                }}
              >
                <View style={{flex:0.5,backgroundColor:"pink"}}>

                </View>
                <View style={{flex:0.5,backgroundColor:"white",flexDirection:"column"}}>
<View style={{flex:0.3,backgroundColor:"black"}}>

</View>
<View style={{flex:0.7,backgroundColor:"grey"}}>

</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TextScreen;
