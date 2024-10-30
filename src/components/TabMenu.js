// src/components/TabMenu.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const TabMenu = ({ selectedTab, setSelectedTab }) => {
  const tabs = ['All', 'Completed', 'Incomplete'];
  
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <TouchableOpacity
          key={tab}
          onPress={() => setSelectedTab(tab)}
          style={[
            styles.tabButton,
            { backgroundColor: selectedTab === tab ? '#0099FF' : '#f0f0f0' },
          ]}
        >
          <Text style={{ color: selectedTab === tab ? 'white' : 'black' }}>
            {tab}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 4,
  },
});