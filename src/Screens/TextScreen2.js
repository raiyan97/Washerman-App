import { View, Text, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const TextScreen2 = () => {
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
            backgroundColor: 'green',
            height: hp('12'),
          }}
        ></View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            marginTop: hp('6'),
            height: hp('25'),
            justifyContent: 'space-evenly',
            paddingVertical: hp('2'),
          }}
        >
          <View style={{ flex: 0.3, backgroundColor: 'brown' }}></View>
          <View style={{ flex: 0.3, backgroundColor: 'black' }}></View>
          <View style={{ flex: 0.3, backgroundColor: 'purple' }}></View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'green',
            height: hp('20'),
            marginTop: hp('5'),
          }}
        >
          <View style={{ flex: 0.3, backgroundColor: 'blue' }}></View>
          <View style={{ flex: 0.42, backgroundColor: 'white' }}></View>
          <View style={{ flex: 0.28, backgroundColor: 'yellow' }}>
            <View
              style={{
                flex: 0.5,
                // flexDirection: 'column',
                backgroundColor: 'orange',
              }}
            ></View>
            <View style={{ flex: 0.5, backgroundColor: 'purple' }}></View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'pink',
            height: hp('15'),
            marginTop: hp('3'),
          }}
        >
          <View style={{ flex: 0.5, backgroundColor: 'black' }}>
            <View style={{ flex: 0.5, backgroundColor: 'orange' }}></View>
          </View>

          <View style={{ flex: 0.1, backgroundColor: 'brown' }}></View>

          <View style={{ flex: 0.3, backgroundColor: 'purple' }}></View>

          <View style={{ flex: 0.3, backgroundColor: 'white' }}></View>
          <View style={{ flex: 0.3, backgroundColor: 'green' }}></View>

          <View style={{ flexDirection: 'row', backgroundColor: 'brown' }}>
            <View></View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'pink',
            height: hp('10'),
            marginTop: hp('2'),
          }}
        >
<View style={{flex:0.40,backgroundColor:"green",}}>
</View>
 <View style={{flex:0.60,backgroundColor:"black"}}>
 <View style={{flex:0.50,backgroundColor:"white"}}>
    
</View>
 </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TextScreen2;
