"use client";

import { motion, useInView } from "framer-motion";
import {

  Card,

  cn,
} from "@heroui/react";
import { useEffect, useState, useRef } from 'react';



const data = [
  {
    title: "Catholic",
    value: 70,
    status: "secondary",
  
  },
  {
    title: "Protestant ",
    value: 25,
    status: "danger",

  },
  {
    title: "Moslem ",
    value: 5,
    status: "warn",

  },
];

export default function KpiStat4() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(isInView);
  }, [isInView]);

  return (
    <motion.dl
initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
    
    
    className="grid w-auto xl:w-200 grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 m-auto mt-20">
      {data.map(({title, value,}, index) => (
        <Card
          key={index}
          className="flex flex-col border border-gray-700 p-4 dark:border-default-2 rounded-2xl bg-gray-900"
        >


          <div className="pt-1">
            <dt className="my-2 text-sm font-bolder text-default-500">{title}</dt>
            <dd className="text-1xl font-bolder text-default-700">{value}%</dd>
          </div>
<div className="w-full bg-gray-200 rounded-full h-2 mt-2">
  <div
    className="bg-blue-700 h-2 rounded-full transition-all duration-1000"
    style={{ width: `${value}%` }}

  ></div>
</div>
         
        </Card>
      ))}
    </motion.dl>
  );
}
