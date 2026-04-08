import { X } from 'lucide-react';
import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes=use(marksPromise);
    const marksData=marksDataRes.data;
    console.log(marksData);
    return (
        <div>
            <BarChart width={500} height={300} data={marksData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="marks.math" fill='blue'></Bar>
                <Bar dataKey="marks.physics" fill='red'></Bar>
                <Bar dataKey="marks.chemistry" fill='green'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;