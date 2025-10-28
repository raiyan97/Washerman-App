import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../Styles/Colors';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';

const LaundryDetailScreen = () => {
  const navigation = useNavigation();
  const data = [
    { id: '1', title: 'Laundry' },
    { id: '2', title: 'Iron' },
    { id: '3', title: 'Dry Clean' },
    { id: '4', title: 'Only Wash' },
    { id: '5', title: 'Others' },
  ];

  const services = [
    {
      id: 1,
      clothName: 'T-Shirt',
      clothCategory: 'White cotton',
      price: '₹ 20',
      // iconName: require('../../../android/app/src/main/res/drawable/tshirt.png'),
    },
    {
      id: 2,
      clothName: 'Jeans',
      clothCategory: 'White cotton',
      price: '₹ 30',
      // iconName: require('../../../android/app/src/main/res/drawable/paint.pnh'),
    },
    {
      id: 3,
      clothName: 'Iron',
      clothCategory: 'T-Shirt',
      price: '₹ 40',
      // iconName: require('../../../android/app/src/main/res/drawable/tshirt.png'),
    },
    {
      id: 4,
      clothName: 'Jeans',
      clothCategory: 'White cotton',
      price: '₹ 50',
      // iconName: require('../../../android/app/src/main/res/drawable/paint.png'),
    },

    {
      id: 5,
      clothName: 'Jeans',
      clothCategory: 'White cotton',
      price: '₹ 50',
      // iconName: require('../../../android/app/src/main/res/drawable/paint.png'),
    },
    {
      id: 6,
      clothName: 'Jeans',
      clothCategory: 'White cotton',
      price: '₹ 50',
      // iconName: require('../../../android/app/src/main/res/drawable/paint.png'),
    },
    {
      id: 7,
      clothName: 'Jeans',
      clothCategory: 'White cotton',
      price: '₹ 50',
      // iconName: require('../../../android/app/src/main/res/drawable/paint.png'),
    },
    {
      id: 8,
      clothName: 'Jeans',
      clothCategory: 'White cotton',
      price: '₹ 50',
      // iconName: require('../../../android/app/src/main/res/drawable/paint.png'),
    },
    {
      id: 9,
      clothName: 'Jeans',
      clothCategory: 'White cotton',
      price: '₹ 50',
      // iconName: require('../../../android/app/src/main/res/drawable/paint.png'),
    },
  ];

  // const renderItem = ({ item }) => (
  //   <TouchableOpacity
  //     style={{
  //       backgroundColor: 'white',
  //       paddingHorizontal: wp('2.5'),
  //       paddingVertical: hp('1.2'),
  //       borderRadius: wp('2'),
  //       marginRight: wp('3.1'),
  //       shadowColor: '#000',
  //       shadowOffset: { width: 0, height: 4 },
  //       shadowOpacity: 0.15,
  //       shadowRadius: 3,
  //       elevation: 4,
  //     }}
  //   >
  //     <Text style={styles.cardText}>{item.title}</Text>
  //   </TouchableOpacity>
  // );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItemCard = ({ item }) => (
    <View
      activeOpacity={0.5}
      style={{
        backgroundColor: Colors.white,
        height: hp('10'),
        width: wp('39'),
        marginRight: wp('5.9'),
        marginLeft: wp('5'),
        borderRadius: wp('2'),
        marginTop: hp('2'),
        marginBottom: hp('1'),
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.4,
            flexDirection: 'row',
            borderTopLeftRadius: wp('2'),
            borderWidth: 0.4,
            borderColor: Colors.silverGrey,
          }}
        >
          <View
            style={{
              flex: 0.7,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: wp('2'),
            }}
          >
            <Text
              style={{
                fontSize: hp('2'),
                fontFamily: 'Poppins-Medium',
                color: Colors.black,
                letterSpacing: 0.2,
                lineHeight: hp('2.5'),
              }}
            >
              T-Shirt
            </Text>
          </View>

          <View
            style={{
              flex: 0.3,
              justifyContent: 'flex-end',
            }}
          >
            <Image
              source={{ uri: 'tshirt' }}
              style={{
                width: wp('9'),
                height: hp('6'),
                resizeMode: 'contain',
                zIndex: 0,
                left: wp('2'),
              }}
            />
          </View>
        </View>

        <View
          style={{ flex: 0.3, flexDirection: 'row', backgroundColor: 'white' }}
        >
          <View
            style={{
              flex: 0.85,
              justifyContent: 'center',
              borderColor: Colors.silverGrey,
              borderWidth: wp('0.1'),
            }}
          >
            <Text
              style={{
                fontSize: hp('1.4'),
                fontFamily: 'Poppins-Regular',
                color: Colors.darkGrey,
                textAlign: 'center',
                letterSpacing: 0.2,
                lineHeight: hp('2.5'),
              }}
            >
              White Cotton
            </Text>
          </View>
          <View
            style={{
              flex: 0.15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          ></View>
        </View>

        <View
          style={{
            flex: 0.3,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flex: 0.35,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: hp('1.6'),
                fontFamily: 'Poppins-Regular',
                color: Colors.darkGrey,
                letterSpacing: 0.2,
                lineHeight: hp('1.9'),
              }}
            >
              ₹ 15
            </Text>
          </View>
          <View
            style={{
              flex: 0.65,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                width: wp('4'),
                height: hp('2.1'),
                backgroundColor: Colors.DeliverdColor,
                justifyContent: 'center',
                borderRadius: wp('1'),
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon name="minus" size={10} color="black" />
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: hp('1.5'),
                  fontFamily: 'Poppins-Medium',
                  alignItems: 'center',
                }}
              >
                00
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: wp('4'),
                height: hp('2.1'),
                backgroundColor: Colors.DeliverdColor,
                borderRadius: wp('1'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon name="plus" size={10} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  const renderItemJeans = ({ item }) => (
    <View
      activeOpacity={0.5}
      style={{
        backgroundColor: Colors.white,
        height: hp('10'),
        width: wp('32.5'),
        marginRight: wp('6'),
        borderRadius: wp('2'),
        marginTop: hp('2'),
        marginBottom: hp('1'),
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.4,
            flexDirection: 'row',
            borderTopLeftRadius: wp('2'),
            borderWidth: 0.4,
            borderColor: Colors.silverGrey,
          }}
        >
          <View
            style={{
              flex: 0.7,
              justifyContent: 'center',
              alignItems: 'center',
              borderTopLeftRadius: wp('2'),
            }}
          >
            <Text
              style={{
                fontSize: hp('2'),
                fontFamily: 'Poppins-Medium',
                color: Colors.black,
                letterSpacing: 0.2,
                lineHeight: hp('2.5'),
              }}
            >
              T-Shirt
            </Text>
          </View>

          <View
            style={{
              flex: 0.3,
              justifyContent: 'flex-end',
            }}
          >
            <Image
              source={{ uri: 'tshirt' }}
              style={{
                width: wp('9'),
                height: hp('6'),
                resizeMode: 'contain',
                zIndex: 0,
                left: wp('2'),
              }}
            />
          </View>
        </View>

        <View
          style={{ flex: 0.3, flexDirection: 'row', backgroundColor: 'white' }}
        >
          <View
            style={{
              flex: 0.85,
              justifyContent: 'center',
              borderColor: Colors.silverGrey,
              borderWidth: wp('0.1'),
            }}
          >
            <Text
              style={{
                fontSize: hp('1.4'),
                fontFamily: 'Poppins-Regular',
                color: Colors.darkGrey,
                textAlign: 'center',
                letterSpacing: 0.2,
                lineHeight: hp('2.5'),
              }}
            >
              White Cotton
            </Text>
          </View>
          <View
            style={{
              flex: 0.15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          ></View>
        </View>

        <View
          style={{
            flex: 0.3,
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              flex: 0.35,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: hp('1.6'),
                fontFamily: 'Poppins-Regular',
                color: Colors.darkGrey,
                letterSpacing: 0.2,
                lineHeight: hp('1.9'),
              }}
            >
              ₹ 15
            </Text>
          </View>
          <View
            style={{
              flex: 0.65,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <TouchableOpacity
              style={{
                width: wp('4'),
                height: hp('2.1'),
                backgroundColor: Colors.DeliverdColor,
                justifyContent: 'center',
                borderRadius: wp('1'),
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon name="minus" size={10} color="black" />
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: hp('1.5'),
                  fontFamily: 'Poppins-Medium',
                  alignItems: 'center',
                }}
              >
                00
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: wp('4'),
                height: hp('2.1'),
                backgroundColor: Colors.DeliverdColor,
                borderRadius: wp('1'),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <FontAwesomeIcon name="plus" size={10} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, backgroundColor: 'white' }}
      >
        <View
          style={{
            // height:hp('10'),
            flexDirection: 'row',
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack('LaundryService')}
            style={{
              flex: 0.15,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: 'arrowleft' }}
              style={{
                width: wp('7'),
                height: hp('3.5'),
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              flex: 0.85,
              justifyContent: 'center',
            }}
          >
            <View style={styles.listContainer}>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => (
                  <View style={{ width: wp('3%') }} />
                )}
                contentContainerStyle={
                  {
                    // paddingHorizontal: wp('2%'),
                    // paddingVertical: hp('1%'), // add breathing room for shadow
                  }
                }
              />
            </View>
          </View>
        </View>

        <View
          style={{
            height: hp('4'),
            flexDirection: 'row',
            backgroundColor: Colors.white,
          }}
        >
          <View
            style={{
              flex: 1,
              paddingHorizontal: wp('5'),
              justifyContent: 'center',
            }}
          >
            <Text
              numberOfLines={2}
              ellipsizeMode="tail"
              style={{
                fontSize: hp('2.2'),
                fontFamily: 'Poppins-SemiBold',
                color: Colors.black,
                letterSpacing: 0.2,
                lineHeight: hp('4'),
              }}
            >
              Maheswari Laundry
            </Text>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop:hp('2'),
            backgroundColor: 'white',
          }}
        >
          <FlatList
            columnWrapperStyle={{
              justifyContent: 'space-between',

            }}
            data={services}
            renderItem={renderItemCard}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LaundryDetailScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    paddingHorizontal: wp('3'),
    paddingVertical: hp('1'),
    borderRadius: wp('2'),
    shadowColor: '#999', // soft grey shadow
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 6,
    marginBottom: hp('1'), // creates a visible gap for the shadow
  },
  cardText: {
    fontSize: hp('1.8%'),
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  listContainer: {
    marginTop: hp('2'),
    paddingBottom: hp('1'), // ensures shadow isn't clipped
  },
});
