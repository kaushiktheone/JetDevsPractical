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

interface UserState {
  loading: boolean;
  loader: boolean;
  userList: UserData[];
  pageNo: number;
}

const initialState: UserState = {
  loading: false,
  loader: false,
  userList: [],
  pageNo: 0,
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },

    setLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },

    setUsers: (
      state,
      action: PayloadAction<{results: UserData[]; info: {page: number}}>,
    ) => {
      state.loading = false;
      state.userList = action.payload.results;
      state.pageNo = action.payload.info.page;
    },

    updateUsers: (
      state,
      action: PayloadAction<{results: UserData[]; info: {page: number}}>,
    ) => {
      state.userList = state.userList.concat(action.payload.results);
      state.pageNo = action.payload.info.page;
      state.loader = false;
    },
  },
});

export const {setLoading, setLoader, setUsers, updateUsers} = userSlice.actions;
export default userSlice.reducer;
