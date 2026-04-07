import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    { "id": 1, "name": "Student 1", "physics": 78, "chemistry": 82, "math": 85 },
    { "id": 2, "name": "Student 2", "physics": 88, "chemistry": 79, "math": 91 },
    { "id": 3, "name": "Student 3", "physics": 67, "chemistry": 73, "math": 70 },
    { "id": 4, "name": "Student 4", "physics": 92, "chemistry": 89, "math": 94 },
    { "id": 5, "name": "Student 5", "physics": 74, "chemistry": 68, "math": 72 },
    { "id": 6, "name": "Student 6", "physics": 81, "chemistry": 85, "math": 87 },
    { "id": 7, "name": "Student 7", "physics": 59, "chemistry": 64, "math": 60 },
    { "id": 8, "name": "Student 8", "physics": 86, "chemistry": 90, "math": 88 },
    { "id": 9, "name": "Student 9", "physics": 71, "chemistry": 75, "math": 73 },
    { "id": 10, "name": "Student 10", "physics": 95, "chemistry": 93, "math": 97 }
]

const ResultsChart = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"math"}></Line>
                <Line dataKey={"physics"} stroke='blue'></Line>
                <Line dataKey={"chemistry"} stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultsChart;