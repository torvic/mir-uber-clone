import React, {useState} from 'react';
import {View, TextInput, SafeAreaView} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import styles from './styles';

const DestinationSearchScreen = () => {
  const [fromText, setFromText] = useState('');
  const [destinationText, setDestinationText] = useState('');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="From"
          value={fromText}
          onChangeText={setFromText}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Where to?"
          value={destinationText}
          onChangeText={setDestinationText}
        />
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyAzkNxJBQVfR_agMVOlXqLs0HC-yzeoOV0',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearchScreen;
