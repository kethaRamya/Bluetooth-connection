import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData, } from './services/DataStorage';

const BluetoothConnection = () => {
  const [data, setData] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const connectToBluetooth = () => {
    // Simulate connecting to Bluetooth device
    setIsConnected(true);
    Alert.alert('Connected to Bluetooth device!');
  };

  const readData = () => {
    if (!isConnected) {
      Alert.alert('Please connect to a Bluetooth device first.');
      return;
    }
    const randomData = Math.floor(Math.random() * 100);
    setData(randomData);
    storeData(randomData);
  };

 

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bluetooth Device Simulator</Text>
      <Button title="Connect to Bluetooth" onPress={connectToBluetooth} />
      <View  style={{marginTop:30}}>
      <Button title="Read Data" onPress={readData}/>
      </View>
      {data !== null && <Text style={styles.data}>Data: {data}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:15
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  data: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default BluetoothConnection;