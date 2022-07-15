import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native'

export default function Lembrets() {
  return (
    <ScrollView
      style={styles.containerPrimary}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.date}>Data</Text>
          <Text style={styles.label}>10/07/2022</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.date}>Evento</Text>
          <Text style={styles.textAgenda}>Reunião da Project</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.date}>Data</Text>
          <Text style={styles.label}>07/07/2022</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.date}>Evento</Text>
          <Text style={styles.textAgenda}>Aniversário Gabriel</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.date}>Data</Text>
          <Text style={styles.label}>10/07/2022</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.date}>Evento</Text>
          <Text style={styles.textAgenda}>Dentista</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    shadowColor: '#000',
    elevation: 2,
    marginBottom: 10,
    alignItems: 'center'
  },
  containerPrimary: {
    flexDirection: 'row',
    marginHorizontal: 10
  },
  content: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 8,
    marginEnd: 14
  },
  date: {
    fontSize: 16,
    fontWeight: 'bold',
    marginStart: 14,
    marginEnd: 14
  },
  label: {
    color: '#5E2129',
    fontWeight: 'bold',
    alignItems: 'flex-end'
  },
  textAgenda: {
    fontSize: 16,
    color: '#5E2129',
    fontWeight: 'bold'
  }
})
