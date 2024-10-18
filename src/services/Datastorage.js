import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export  const storeData = async (value) => {
    try {
      const existingData = await AsyncStorage.getItem('bluetoothData');
      const newData = existingData ? JSON.parse(existingData) : [];
      newData.push(value);
      await AsyncStorage.setItem('bluetoothData', JSON.stringify(newData));
    } catch (error) {
      Alert.alert('Error storing data: ' + error.message);
    }
  };

  export  const syncData = async () => {
    // Simulate syncing with a cloud service
    const storedData = await AsyncStorage.getItem('bluetoothData');
    if (storedData) {
      console.log('Syncing data to cloud:', JSON.parse(storedData));
      // Clear local storage after syncing
      await AsyncStorage.removeItem('bluetoothData');
    }
  };


