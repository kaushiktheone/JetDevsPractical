import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import StackNavigation from './src/navigator/stackNavigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StackNavigation />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
