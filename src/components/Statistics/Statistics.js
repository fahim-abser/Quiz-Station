import React, { useContext } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'

import { ProductContext } from '../../layouts/Main';

const Statistics = () => {
    const data= useContext(ProductContext)
    // console.log(data);
    return (
        <div>
            <div className='position'>
            <LineChart width={500} height={400} data={data}>
            <Line type="monotone" dataKey="total" stroke="#ff0000" />
            <XAxis stroke="#ff0000" dataKey="name" />
          <YAxis stroke="#ff0000"/>
          <Tooltip></Tooltip>
            </LineChart>
            </div>
        </div>
    );
};

export default Statistics;