// src/features/todos/TodoApp.js
import React, { useState } from 'react';
import { AddTodo } from '../todos/AddTodo';
import { TodoList } from '../todos/TodoList';
import { TabMenu } from '../../components/TabMenu';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export const TodoApp = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  return (
    <ImageBackground
      source={require('../../../assets/gymroom.jpg')} // Đường dẫn đến ảnh nền của bạn
      style={styles.background}
      imageStyle={{ opacity: 0.3 }} // Điều chỉnh độ mờ (0.0 - 1.0)
    >
      <View style={styles.container}>
        <Text style={styles.title}>Gym Workout Tracker</Text>
        <AddTodo />
        <TabMenu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <TodoList filter={selectedTab} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Điều chỉnh cách ảnh nền bao phủ màn hình
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Màu nền trắng mờ cho nội dung
    margin: 10,
    borderRadius: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});