import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LocalStorage = new Storage({
    size: 1000,    // maximum capacity, default 1000 key-ids
    storageBackend: AsyncStorage,
    defaultExpires: null,
    enableCache: true,
    // if data was not found in storage or expired data was found,
    // the corresponding sync method will be invoked returning
    // the latest data.
    sync: {
    }
});

export default LocalStorage;
