import { PureComponent } from 'react';

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: '0-14', uv: 4000, count: 300, amt: 2400 },
  { name: '15-29', uv: 3000, count: 250, amt: 2210 },
  { name: '30-49', uv: 2000, count: 280, amt: 2290 },
  { name: '50+', uv: 2780, count: 170, amt: 2000 },

];

export default class BarChartAge extends PureComponent {

 
  
  render()
  
  
  {


 
    
    return (
      <div 
     
      className='mt-15 justify-items-center ' style={{ width: '100%', height: '100%' }}>
        <ResponsiveContainer width="100%" height="50%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="5"   />
            <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar className="e" dataKey="count" fill='blue' background={{ fill: 'white' }} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
