import React from 'react';
import {
    useLoaderData,
} from "react-router-dom";
import ShowCovidData from './ShowCovidData';
const Covid = () => {
    const coviddata = useLoaderData();
    return (
        <div className='grid grid-cols-3 gap-3 mt-5 mx-10'>
            {
                coviddata.map(datas=><ShowCovidData datas={datas}></ShowCovidData>)
            }
        </div>
    );
};

export default Covid;