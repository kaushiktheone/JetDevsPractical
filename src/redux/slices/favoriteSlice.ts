import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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

interface FavoriteState {
  favoriteUsers: UserData[];
}

const initialState: FavoriteState = {
  favoriteUsers: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<UserData>) => {
      state.favoriteUsers.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<UserData>) => {
      state.favoriteUsers = state.favoriteUsers.filter(
        u => u.login.uuid !== action.payload.login.uuid,
      );
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;
export default favoriteSlice.reducer;
