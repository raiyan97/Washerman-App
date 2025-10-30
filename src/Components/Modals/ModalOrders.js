import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const ModalOrders = ({ modalVisible, onPressCross, text }) => {
  // const [showLaundryModal, setShowLaundryModal] = useState(false);
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onPressCross}
    >
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={onPressCross}
          style={{ flex: 0.35, backgroundColor: 'rgba(0,0,0,0.5)' }}
        ></TouchableOpacity>

        <View
          style={{
            flex: 0.3,
            backgroundColor: 'yellow',
            flexDirection: 'row',
            paddingHorizontal: wp('3'),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', backgroundColor: '', }}>
            <View
              style={{
                flex: 0.2,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Image
                source={{ uri: 'profileicon' }}
                style={{
                  height: hp('5'),
                  width: wp('10'),
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View
              style={{
                flex: 0.6,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: hp('2.5'),
                  fontFamily: 'Poppins-SemiBold',
                  color: Colors.black,
                  letterSpacing: 0.2,
                }}
              >
                Saurav Laundry
              </Text>
            </View>
            <View
              style={{
                flex: 0.2,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  height: hp('5'),
                  width: wp('10'),
                  backgroundColor:Colors.naviBlue,
                  borderRadius: wp('5'),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <FontAwesomeIcon name="phone" size={16} color="white" />
              </View>
            </View>
          </View>
        </View>

        <TouchableOpacity
          onPress={onPressCross}
          style={{ flex: 0.35, backgroundColor: 'rgba(0,0,0,0.5)' }}
        ></TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalOrders;

const styles = StyleSheet.create({});
