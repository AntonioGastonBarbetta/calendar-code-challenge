import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import React from 'react';

interface DateAndStatusProps {
  scheduledDate: string;
  status: string;
}

export default function DateAndStatus({ scheduledDate, status }: DateAndStatusProps) {
  const daysOfWeek: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const date = new Date(scheduledDate);
  const getIcon = () => status === 'Completed' ? 
    <Svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path fillRule="evenodd" clipRule="evenodd" d="M7.99999 15.2C11.9764 15.2 15.2 11.9764 15.2 7.99999C15.2 4.02354 11.9764 0.799988 7.99999 0.799988C4.02354 0.799988 0.799988 4.02354 0.799988 7.99999C0.799988 11.9764 4.02354 15.2 7.99999 15.2ZM11.3364 6.83638C11.6879 6.48491 11.6879 5.91506 11.3364 5.56359C10.9849 5.21212 10.4151 5.21212 10.0636 5.56359L7.09999 8.52719L5.93638 7.36359C5.58491 7.01212 5.01506 7.01212 4.66359 7.36359C4.31212 7.71506 4.31212 8.28491 4.66359 8.63638L6.46359 10.4364C6.81506 10.7879 7.38491 10.7879 7.73638 10.4364L11.3364 6.83638Z" fill="#00B47D"/>
    </Svg> : 
    <Svg style={styles.icon} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <Path d="M8 5V8L10.25 10.25M14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25C11.7279 1.25 14.75 4.27208 14.75 8Z" stroke="#00B47D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>;

  return (
    <View style={styles.container}>
      <Text style={styles.day}>{daysOfWeek[date.getDay()] ? daysOfWeek[date.getDay()] : 'TBD'}</Text>
      {date.getDate() ? <Text style={styles.date}>{date.getDate()}</Text> : null}
      {date.getDate() ? getIcon() : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 25,
    display: 'flex',
    alignItems: 'center'
  },
  day: {
    color: 'rgba(0, 0, 0, 0.60)',
    textAlign: 'center',
    fontSize: 9,
    fontWeight: '900',
    lineHeight: 9,
  },
  date: {
    color: 'rgba(0, 0, 0, 0.80)',
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 20,
    marginTop: 5,
  },
  icon: {
    marginTop: 8
  }
});
