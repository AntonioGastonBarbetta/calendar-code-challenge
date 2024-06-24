import { ScrollView, View, Text, StyleSheet } from 'react-native';
import DateAndStatus from '../dateAndStatus';
import CalendarCard from '../calendarCard';

export default function CalendarList({data }: {data: []}) {
  return (
    <ScrollView >
    {data.map((appointmentByYear:any, index) => 
{     
     return (
      <View key={index}>
     <Text style={styles.title}>{appointmentByYear.month} {appointmentByYear.year}</Text>

 { appointmentByYear.actions.length?   appointmentByYear.actions.map((appointment, index) =>
{
  return      <View key={index} style={styles.cardListLayout} >
  <DateAndStatus scheduledDate={appointment.scheduledDate}  status={appointment.status}></DateAndStatus>
  <CalendarCard 
    title={appointment.name}
    subtitle={appointment.vendor?appointment.vendor.vendorName:null}
    phone={appointment.vendor? appointment.vendor.phoneNumber: null}
    address={appointment.vendor? appointment.vendor.streetAddress:null}
    status={appointment.status}
    arrivalEndWindow={appointment.arrivalEndWindow? appointment.arrivalEndWindow:null}
    arrivalStartWindow={appointment.arrivalStartWindow? appointment.arrivalStartWindow:null}>
  </CalendarCard> 
</View>
} 
): <View style={styles.noAppointments}>
     <Text style={styles.noAppointmentsText}>  No Maintenance Scheduled
     </Text>
     </View>
}


      </View>

      )
      
      }
      )
    }
  </ScrollView>
  )
}


const styles = StyleSheet.create({
  title: {
    color: 'rgba(0, 0, 0, 0.80)',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 16,
    marginBottom: 21,
    marginTop: 21,
    marginLeft: 15,
  },
  cardListLayout: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 4,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  noAppointments: {
    flex: 1 ,
    justifyContent: 'center', 
    height: 44,
    borderRadius: 4,
    backgroundColor: '#848FA5',
    marginRight: 16,
    marginLeft: 56,
    paddingLeft: 16,
  },
  noAppointmentsText: {
    color: '#FFF',  
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 16,
  }
});
