import CalendarList from '@/components/calendarList';
import { fetchData } from '@/services';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Calendar() {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
      }
    };
    getData();
  }, []);

  return (
   <View  style={styles.calendarLayout} >
      <Text style={styles.title}>Calendar</Text>
      {data  && <CalendarList data={data}></CalendarList>}
    </View>
  );
}

const styles = StyleSheet.create({
  calendarLayout: {
    paddingTop: 50,
    backgroundColor: '#fff'
  },
  title: {
    color: 'rgba(0, 0, 0, 0.80)',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 16,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: '#DCDCDC'
  },
});