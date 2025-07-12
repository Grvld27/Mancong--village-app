
import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: 'Petani/Kebun',
    uv: 300,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Pengrajin',
    uv: 80,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Pekerja Swasta',
    uv: 60,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Guru/ASN',
    uv: 40,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Lainnya',
    uv: 50,
    pv: 4800,
    amt: 2181,
  },

];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function BarChart1() {

  const ref = useRef(null);
  const isInView = useInView(ref);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isInView);
  }, [isInView]);


  return (
<motion.div 
 initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

className='justify-items-center mt-20'>
    <BarChart 
      width={700}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </motion.div>
  );
}
