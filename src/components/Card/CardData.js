
import React, { useEffect, useState } from 'react';
import Card from './card';

const CardData = () => {
    const [cdata, setCdata] = useState([]);
    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/countries").then(res => res.json()).then(data => setCdata(data));
    }, [])
    return (
        <div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1'>
            {
                cdata.map(data => <Card data={data}></Card>)
            }
        </div>
        </div>
    );
};

export default CardData;