// src/features/todos/TodoList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../todos/todosSlice';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const TodoList = ({ filter }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'Completed') return todo.completed;
    if (filter === 'Incomplete') return !todo.completed;
    return true;
  });

  return (
    <View style={styles.container}>
      {filteredTodos.map((todo) => (
        <View key={todo.id} style={[styles.todoItem, { backgroundColor: todo.completed ? '#e0f7fa' : '#ffffff' }]}>
          <Text
            onPress={() => dispatch(toggleTodo(todo.id))}
            style={[styles.todoText, { textDecorationLine: todo.completed ? 'line-through' : 'none' }]}
          >
            {todo.text}
          </Text>
          <TouchableOpacity
            onPress={() => dispatch(deleteTodo(todo.id))}
            style={styles.deleteButton}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 4,
  },
  todoText: {
    fontSize: 16,
    cursor: 'pointer', // Điều này không áp dụng cho React Native nhưng giữ lại nếu bạn chuyển sang web
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 4,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  deleteButtonText: {
    color: 'white',
  },
});