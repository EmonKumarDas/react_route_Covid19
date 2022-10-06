import React, { useEffect, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts';

const Chart = () => {
    const [cvdData,setCvdData] = useState([]);
    useEffect(()=>{
        fetch("https://disease.sh/v3/covid-19/all").then(res=>res.json()).then(data=>setCvdData(data));
    },[]);
const ListData = [
    {name: 'TodayCases', Cases: cvdData.todayCases},
    {name: 'Deaths', Cases: cvdData.deaths},
    {name: 'TodayDeaths', Cases: cvdData.todayDeaths},
    {name: 'Recovered', Cases: cvdData.recovered},
    {name: 'TodayRecovered', Cases: cvdData.todayRecovered},
]

    return (
        <div>
<div className='flex justify-center my-10'>
<AreaChart
          width={500}
          height={400}
          data={ListData}
          margin={{
            top: 10,
            right: 30,
            left: 30,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Cases" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>

        </div>
        </div>
    );
};

export default Chart;