import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
    useLoaderData,
} from "react-router-dom";
const Detailspage = () => {
    let covidData = useLoaderData();

    let data = [
        { name: "Cases", case: covidData.cases },
        { name: "deaths", case: covidData.deaths },
        { name: "recovered", case: covidData.recovered },
        { name: "active", case: covidData.active },
    ]
    return (
        <div>
            <div className='w-[150px] mx-[30%] my-5'>
                <BarChart width={400} height={300} data={data} margin={{
                    top: 50,
                    right: 30,
                    left: 30,
                    bottom: 0,
                }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="case" fill="#8884d8" />
                </BarChart>
            </div>

            <div className='w-[80%] m-auto'>
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">

                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br></br>
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                               
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Detailspage;