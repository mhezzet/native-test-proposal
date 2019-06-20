import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Picker,
  TextInput,
  ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import TutorCard from '../components/TutorCard'

export default function Tutors({
  setScreen,
  locations,
  setCity,
  setSearchField,
  city,
  searchField,
  tutors
}) {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Search Result</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.picker}>
          <Picker
            selectedValue={city}
            onValueChange={value => setCity(value)}
            mode="dropdown"
          >
            <Picker.Item
              label={locations.length === 0 ? 'loading ...' : 'City'}
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

        <View style={styles.searchInput}>
          <TextInput
            value={searchField}
            onChangeText={value => setSearchField(value)}
            style={{ marginLeft: 10, fontSize: 16 }}
            placeholder="Search here ..."
          />
          <View style={styles.icon}>
            <Icon name="search" size={18} color="white" />
          </View>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center', direction: 'rtl' }}
      >
        {tutors.map(tutor => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </ScrollView>
    </View>
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
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  picker: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    width: 100
  },
  searchInput: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200
  },
  icon: {
    backgroundColor: '#f6a11a',
    height: '100%',
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomEndRadius: 4,
    borderTopEndRadius: 4
  }
})
