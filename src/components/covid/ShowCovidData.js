import React from 'react';
import { Link } from 'react-router-dom';

const ShowCovidData = (props) => {
    let {country} = props.datas;
    let {iso3,flag} = props.datas.countryInfo;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <img className='h-[200px] w-full' src={flag} alt="Shoes" />
                <div className="card-body">
                    <h2 className="card-title font-mono">{country}!</h2>
                    <h2 className="card-title">{iso3}!</h2>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to={`/cvdData/${iso3}`}> See Data</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowCovidData;