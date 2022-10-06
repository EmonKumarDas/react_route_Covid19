import React from 'react';

const Card = (props) => {
  let { country, countryInfo, cases, todayCases, deaths } = props.data;
  return (
    <div className="card lg:w-[22vw] md:w-[28vw] m-5 bg-base-100 shadow-sm border-solid border-2 border-slate-900">
      <img className='h-full' src={countryInfo.flag} alt="Shoes" />
      <div className="card-body">
        <h2 className="card-title text-start">{country}</h2>
        <h2 className="card-title text-start">Case:-{cases}</h2>
        <h2 className="card-title text-start">todayCases:-{todayCases}</h2>
        <h2 className="card-title text-start">deaths:-{deaths}</h2>
        <div className="card-actions justify-center mt-10">
          <h2 className="absolute inset-x-0 bottom-0 h-14 btn btn-primary">See More</h2>

        </div>
      </div>
    </div>
  );
};

export default Card;