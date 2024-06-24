import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface CalendarCardProps {
  title: string;
  subtitle?: string;
  phone?: string;
  address?: string;
  status: string;
  arrivalStartWindow?: string;
  arrivalEndWindow?: string;
}

const CalendarCard: React.FC<CalendarCardProps> = ({ title, subtitle, phone, address, status, arrivalStartWindow, arrivalEndWindow }) => {
  const getBackground = () => {
    switch (status) {
      case 'Completed':
        return '#00B47D';
      case 'Scheduled':
        return '#006A4B';        
      case 'Unscheduled':
        return '#011638';    
    }
  } 

  const getStatus = () => {
    switch (status) {
      case 'Completed':
        return 'Completed';
      case 'Scheduled':
        return `Scheduled ${arrivalStartWindow} - ${arrivalEndWindow}`;               
      case 'Unscheduled':
        return 'Schedule date & time TBD'; 
    }
  }

  return (
    <View style={{ ...styles.card, backgroundColor: getBackground() }}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {phone && <Text style={styles.phone}>{phone}</Text>}
      {address && (
        <View style={styles.addressLayout}>
          <Svg xmlns="http://www.w3.org/2000/svg" width="7" height="10" viewBox="0 0 7 10" fill="none">
            <Path d="M3.5 0C1.565 0 0 1.565 0 3.5C0 6.125 3.5 10 3.5 10C3.5 10 7 6.125 7 3.5C7 1.565 5.435 0 3.5 0ZM3.5 4.75C2.81 4.75 2.25 4.19 2.25 3.5C2.25 2.81 2.81 2.25 3.5 2.25C4.19 2.25 4.75 2.81 4.75 3.5C4.75 4.19 4.19 4.75 3.5 4.75Z" fill="white"/>
          </Svg>
          <Text style={styles.address}>{address}</Text>
        </View>
      )}
      <Text style={{ ...styles.status, marginTop: address ? 1 : 15 }}>{getStatus()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingTop: 9,
    paddingBottom: 14,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginLeft: 15,
    flex: 1,
  },
  title: {
    color: '#FFF',
    fontSize: 16,
    lineHeight: 16,
    marginBottom: 1,
  },
  subtitle: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 12,
    marginBottom: 1,
  },
  phone: {
    color: '#FFF',
    fontSize: 12,
    lineHeight: 12,
  },
  addressLayout: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 15,
  },
  address: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 12,
    marginLeft: 8,
  },
  status: {
    color: '#FFF',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 12,
  },
});

export default CalendarCard;
