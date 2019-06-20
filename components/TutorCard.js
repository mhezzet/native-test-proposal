import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Avatar } from 'react-native-elements'

function getRate(rate) {
  switch (rate) {
    case '1':
      return '⭐'
      break
    case '2':
      return '⭐⭐'
      break
    case '3':
      return '⭐⭐⭐'
      break
    case '4':
      return '⭐⭐⭐⭐'
      break
    case '5':
      return '⭐⭐⭐⭐⭐'
      break
    case '':
      return '✖'
      break

    default:
      return '✖'
      break
  }
}

export default function TutorCard({ tutor }) {
  return (
    <View style={styles.card}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <View>
          <Text>{`SR ${tutor.tutor_average_price}`}</Text>
          <Text>per hour</Text>
        </View>
        <View style={{ display: 'flex', flexGrow: 12, alignItems: 'flex-end' }}>
          <Text>{tutor.username}</Text>
          <Text>{getRate(tutor.avg_rating)}</Text>
          <Text>{`🎓 qualification - ${tutor.qualification}`}</Text>
        </View>
        <View>
          <Image
            style={{ width: 50, height: 50 }}
            source={{ uri: tutor.photo }}
          />
        </View>
      </View>
      <View
        style={{
          borderWidth: 0.3,
          width: '80%',
          marginTop: 20,
          alignSelf: 'center',
          borderColor: 'grey'
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 15,
          alignContent: 'center',
          justifyContent: 'center'
        }}
      >
        {tutor.subjects.map(subject => (
          <View
            key={subject.subject_id}
            style={{
              backgroundColor: '#f6a11a',
              padding: 5,
              margin: 3,
              borderRadius: 5
            }}
          >
            <Text>{subject.subject_name} </Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    elevation: 1,
    borderRadius: 4,
    borderWidth: 0.1,
    borderColor: '#f6a11a',
    width: '90%',
    marginTop: 20,
    padding: 5
  }
})
