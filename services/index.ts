import axios from 'axios';

interface CalendarElement {
  year: number;
  month: string;
  actions: string[];
}

interface ApiResponse {
  calendar: { year: number; month: number; actions: string[] }[];
}

export const fetchData = async (): Promise<CalendarElement[]> => {
  let data: CalendarElement[] = [];
  const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
  ];
  try {
    const response = await axios.get<ApiResponse>('https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge');
    response.data.calendar.map((element) => {
      data.push({
        year: element.year,
        month: months[element.month],
        actions: element.actions
      });
    });
    return data;
  } catch (error) {
    throw error;
  }
};
