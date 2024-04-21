import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BookingCard = ({ desc }) => {
  const { departure, arrival, duration, from, to, date } = desc;

  return (
    <View style={styles.container}>
      <View style={styles.departureContainer}>
        <Text style={styles.airport}>{from}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{departure}</Text>
      </View>
      <Text style={styles.duration}>⌛ {duration}</Text>
      <View style={styles.arrivalContainer}>
        <Text style={styles.airport}>{to}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.time}>{arrival}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5A8EFB',
    height: 100,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 20,
    paddingHorizontal: 20,
    marginVertical: 10
  },
  departureContainer: {
    alignItems: 'flex-start',
  },
  arrivalContainer: {
    alignItems: 'flex-end',
  },
  airport: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    color: 'white',
    fontSize: 14,
  },
  time: {
    color: 'white',
    fontSize: 16,
  },
  duration: {
    color: 'white',
    fontSize: 16,
  },
});

export default BookingCard;
