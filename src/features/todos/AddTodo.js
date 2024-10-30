// src/features/todos/AddTodo.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todosSlice';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Add a new exercise"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button title="Add" onPress={handleSubmit} color="#0099FF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    alignItems: 'center',
  },
  input: {
    padding: 10,
    width: '70%',
    marginBottom: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});