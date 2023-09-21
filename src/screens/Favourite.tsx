import React from 'react';
import {View, Text, FlatList, Image, StyleSheet, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {removeFavorite} from '../redux/slices/favoriteSlice';
import * as COLORS from '../utils/colors';

interface FavouriteProps {}

interface UserData {
  cell: string;
  dob: {
    age: number;
    date: string;
  };
  email: string;
  gender: string;
  id: {
    name: string;
    value: string;
  };
  location: {
    city: string;
    coordinates: any[];
    country: string;
    postcode: number;
    state: string;
    street: any[];
    timezone: any[];
  };
  login: {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    age: number;
    date: string;
  };
}

const Favourite: React.FC<FavouriteProps> = () => {
  const dispatch = useDispatch();
  const {favoriteUsers} = useSelector(
    (state: {favoriteUser: {favoriteUsers: UserData[]}}) => state.favoriteUser,
  );

  const renderUserItem = ({item}: {item: UserData}) => {
    return (
      <View style={styles.userItem}>
        <Image source={{uri: item?.picture?.large}} style={styles.userImage} />
        <Text
          style={
            styles.userName
          }>{`${item?.name?.first} ${item?.name?.last}`}</Text>
        <AntDesign
          name={'star'}
          size={24}
          color={COLORS.PRIMARY_COLOR}
          onPress={() => onFavouritePress(item)}
        />
      </View>
    );
  };

  const onFavouritePress = (item: UserData) => {
    dispatch(removeFavorite(item));
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle={'dark-content'} />
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/images/applogo.png')}
          style={styles.logoImage}
        />
      </View>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={favoriteUsers}
        extraData={favoriteUsers}
        renderItem={renderUserItem}
        keyExtractor={item => item?.login?.uuid}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>{'No favourite data found.'}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_COLOR,
  },
  headerContainer: {
    height: 70,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.BLACK,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 4,
  },
  logoImage: {
    height: 35,
    width: 35,
  },
  flatListContainer: {
    flexGrow: 1,
    paddingVertical: 2,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 50,
    padding: 12,
    backgroundColor: 'white',
  },
  userImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    flex: 1,
    color: COLORS.BLACK,
  },
  separator: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.3)',
    marginHorizontal: 8,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default Favourite;
