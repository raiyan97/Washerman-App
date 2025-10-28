
import React from 'react';
import { Pressable, Text, StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../Styles/Colors';

const ServiceChip = ({ item, selected, onPress }) => (
  <Pressable
    onPress={() => onPress(item.id)}
    // android_ripple={{ color: 'rgba(0,0,0,0.08)' }}
    style={[
      styles.chip,
      selected && styles.chipSelected,
    ]}
  >
    <Text style={[styles.text, selected && styles.textSelected]}>
      {item.title}
    </Text>
  </Pressable>
);

export default React.memo(ServiceChip);

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: wp('2'),
    paddingVertical: hp('1.5'),
    borderRadius: wp('2'),
    marginRight:wp('2'),
    backgroundColor:Colors.white,
    ...Platform.select({
      android: { elevation: 3 },
      ios: {
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
      },
    }),
  },
chipSelected: { backgroundColor:Colors.naviBlue },
//   chipUnselected: { backgroundColor: '#fff' },
  text: { 
    fontSize:wp('3'),
     fontWeight: '600',
      color:Colors.black,


    },

  textSelected: { 
    color: Colors.white,

},
});
