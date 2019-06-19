import React, { useState, useRef } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Picker,
  TextInput,
  ScrollView
} from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import useLocations from '../hooks/useLocations'

export default function Landing({
  setScreen,
  locations,
  setCity,
  setSearchField,
  city,
  searchField
}) {
  console.log(locations)
  const listView = useRef(null)
  return (
    <ScrollView ref={listView}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Find a Tutor</Text>
      </View>
      <Text style={styles.subTitle}>
        Compare the best teacher and choose the most appropriate
      </Text>
      <Text style={styles.middleTitle}>Here is best tutor in</Text>
      <Text style={styles.middleSection}>
        Engineering | Science | Law | Medicine
      </Text>
      <Text style={styles.middleSection}>Business | English</Text>
      <View style={styles.picker}>
        <Picker
          placeholder="hola"
          selectedValue={city}
          onValueChange={value => setCity(value)}
          mode="dropdown"
        >
          <Picker.Item
            label={locations.length === 0 ? 'loading ...' : 'Select City ...'}
            value=""
          />
          {locations.map(location => (
            <Picker.Item
              key={location.id}
              label={location.name}
              value={location.name}
            />
          ))}
        </Picker>
      </View>
      <KeyboardAwareScrollView extraScrollHeight={50} enableOnAndroid={true}>
        <View style={styles.searchInput}>
          <TextInput
            value={searchField}
            onChangeText={value => setSearchField(value)}
            onFocus={() => {
              setTimeout(() => {
                listView.current.scrollToEnd({ animated: true })
              }, 500)
            }}
            style={{ marginLeft: 10, fontSize: 16 }}
            placeholder="Search the course or test name"
          />
        </View>

        <View style={styles.searchButton}>
          <Button
            onPress={() => setScreen('tutors')}
            disabled={searchField && city ? false : true}
            color="#f6a11a"
            title="Search"
          />
        </View>
      </KeyboardAwareScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    marginTop: 35,
    fontSize: 30,
    color: 'white',
    marginBottom: 10
  },
  titleContainer: {
    backgroundColor: '#f6a11a'
  },
  middleTitle: {
    textAlign: 'center',
    color: '#f6a11a',
    marginTop: 30,
    marginBottom: 20,
    fontSize: 26
  },
  subTitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
    fontWeight: 'bold'
  },
  middleSection: {
    color: '#666666',
    textAlign: 'center',
    fontSize: 16
  },
  picker: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 30
  },
  searchInput: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 30,
    height: 50,
    display: 'flex',
    justifyContent: 'center'
  },
  searchButton: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 30
  }
})
