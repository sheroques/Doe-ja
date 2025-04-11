import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Tabs = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tabWrapper}>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>ONG’s</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Campanha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tabs;
