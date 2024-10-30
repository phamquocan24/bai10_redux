// src/App.js
import { Provider } from 'react-redux';
import { store } from '../Redux/src/store';
import { TodoApp } from '../Redux/src/features/todos/TodoApp';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Giả lập thời gian loading 2 giây để hiển thị logo
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Image
          source={require('../Redux/assets/logogym.png')} // Đường dẫn đến logo của bạn
          style={styles.logo}
        />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
  },
});

export default App;