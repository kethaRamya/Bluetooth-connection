
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import BluetoothConnection from './components/BluetoothConnection';
import { syncData } from './services/DataStorage';

const BluetoothApp = () => {
 
  useEffect(() => {
    const syncInterval = setInterval(syncData, 30000); // Sync every 30 seconds
    return () => clearInterval(syncInterval);
  }, []);

  

  return (
    <View>
      <BluetoothConnection />
    </View>
  );
};

export default BluetoothApp;

