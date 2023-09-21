import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fetchUserList} from '../redux/handlers/usersHandler';
import {addFavorite, removeFavorite} from '../redux/slices/favoriteSlice';
import * as COLORS from '../utils/colors';
import {isIOS} from '../utils/constant';

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

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const {pageNo, userList, loading, loader} = useSelector(
    (state: {
      users: {
        pageNo: number;
        userList: UserData[];
        loading: boolean;
        loader: boolean;
      };
    }) => state.users,
  );
  const {favoriteUsers} = useSelector(
    (state: {favoriteUser: {favoriteUsers: UserData[]}}) => state.favoriteUser,
  );

  useEffect(() => {
    getUserListFromAPI(pageNo);
  }, []);

  const getUserListFromAPI = (page: number) => {
    dispatch(fetchUserList(page + 1));
  };

  const onRefresh = () => {
    dispatch(fetchUserList(0));
  };

  const handleLoadMore = () => {
    if (!loading) {
      getUserListFromAPI(pageNo);
    }
  };

  const renderUserItem = ({item}: {item: UserData}) => {
    const isFavorite = favoriteUsers.find(
      u => u?.login?.uuid === item?.login?.uuid,
    );
    return (
      <TouchableOpacity style={styles.userItem}>
        <View style={styles.bgUserItem} />
        <View style={styles.userInfoContainer}>
          <Image
            source={{uri: item?.picture?.large}}
            style={styles.userImage}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
              }}>{`${item?.name?.first} ${item?.name?.last}`}</Text>
            <View style={styles.locationContainer}>
              <Ionicons name="location" size={16} />
              <Text
                style={{
                  fontSize: 13,
                }}>{`${item?.location?.city}, ${item?.location?.country}`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.favoriteIconContainer}>
          <AntDesign
            name={isFavorite ? 'star' : 'staro'}
            size={24}
            color={COLORS.PRIMARY_COLOR}
            onPress={() => onFavouritePress(item, isFavorite)}
          />
        </View>
      </TouchableOpacity>
    );
  };

  const onFavouritePress = (item: UserData, isFavorite: boolean) => {
    if (isFavorite) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  const renderFooter = () => {
    if (loader) {
      return (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={COLORS.BLACK} />
        </View>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.WHITE} barStyle="dark-content" />
      <View style={styles.headerContainer}>
        <Image
          source={require('../assets/images/applogo.png')}
          style={styles.logoImage}
        />
      </View>

      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={userList}
        extraData={userList}
        renderItem={renderUserItem}
        keyExtractor={item => item?.login?.uuid}
        refreshing={loading}
        onRefresh={onRefresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListFooterComponent={renderFooter}
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
    paddingVertical: 16,
    paddingBottom: 100,
  },
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 12,
    marginVertical: 5,
    marginHorizontal: 16,
    minHeight: 80,
    justifyContent: 'space-between',
  },
  bgUserItem: {
    ...StyleSheet.absoluteFillObject,
    position: 'absolute',
    borderRadius: 12,
    backgroundColor: COLORS.WHITE,
    left: 20,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: isIOS ? 5 : 0,
  },
  favoriteIconContainer: {
    alignSelf: 'flex-start',
    marginRight: 10,
    padding: 10,
  },
  loading: {
    paddingVertical: 20,
  },
});

export default Home;
