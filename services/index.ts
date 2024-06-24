import axios from 'axios';

export const fetchData = async () => {
    let data: any = [];
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
    let years: number[] = [];
  try {
    const response = await axios.get('https://xjvq5wtiye.execute-api.us-east-1.amazonaws.com/interview/api/v1/challenge');
    
    response.data.calendar.map((element,i)=>{
    //    if (!data.find((item)=>item.year === element.year)){
        data.push(
            {
                year: element.year,
                // appointmentsByMonth: [
                //     {
                        month: months[element.month],
                        actions: element.actions
       
                    }
            //     ]
            // }
        ) 
    // }
            
    //         else
    //     {
    //      const newData = data.find(item => item.year === element.year)
          
    //     newData.appointmentsByMonth.push({
    //     month: months[element.month],
    //     appointment: [
    //         {
    //          ...element.actions
    //         }
    //     ]
    })
    //     data = [...data, newData]
    //     }

    //     })


    

    return data;
  } catch (error) {
    throw error;
  }
};