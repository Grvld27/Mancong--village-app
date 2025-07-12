"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Cell,
  PolarAngleAxis,
} from "recharts";
import {
  Card,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  cn,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import React from "react";

// ======================
// Tipe Props
// ======================

type ChartData = {
  name: string;
  value: number;
  [key: string]: string | number;
};

type CircleChartProps = {
  title: string;
  color: "primary" | "secondary" | "danger";
  chartData: ChartData[];
  total: number;
};

// ======================
// Dummy Data
// ======================

const data: CircleChartProps[] = [
  {
    title: "Population",
    color: "danger",
    total: 575,
    chartData: [{ name: "Total", value: 100, fill: "red" }],
  },
  {
    title: "Male",
    color: "primary",
    total: 300,
    chartData: [{ name: "Total", value: 100, fill: "red" }],
  },
  {
    title: "Female",
    color: "secondary",
    total: 275,
    chartData: [{ name: "Total", value: 100, fill: "#ffffff" }],
  },
];

// ======================
// Komponen Utama
// ======================

export default function PieChart() {
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
      className="grid w-200 grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 lg:grid-cols-3 m-auto mt-20"
    >
      {data.map((item, index) => (
        <CircleChartCard key={index} {...item} />
      ))}
    </motion.dl>
  );
}

// ======================
// Komponen Card Chart
// ======================

const formatTotal = (value: number | undefined) => {
  return value?.toLocaleString() ?? "0";
};

// 🛠 Gunakan ComponentPropsWithoutRef untuk kompatibilitas Card
type HeroUICardProps = React.ComponentPropsWithoutRef<typeof Card>;

const CircleChartCard = React.forwardRef<
  HTMLDivElement,
  CircleChartProps & HeroUICardProps
>(({ className, title, color, chartData, total, ...props }, ref) => {
  return (
    <Card
      ref={ref}
      className={cn(
        "h-[230px] border border-gray-700 dark:border-default-2 rounded-xl bg-gray-900",
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-y-2 p-4 pb-0">
        <div className="flex items-center justify-between gap-x-2">
          <dt>
            <h3 className="text-small font-medium text-default-500">{title}</h3>
          </dt>
          <div className="flex items-center justify-end gap-x-2">
            <Dropdown
              classNames={{
                content: "min-w-[120px]",
              }}
              placement="bottom-end"
            >
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <Icon height={16} icon="solar:menu-dots-bold" width={16} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                itemClasses={{
                  title: "text-tiny",
                }}
                variant="flat"
              >
                <DropdownItem key="view-details">View Details</DropdownItem>
                <DropdownItem key="export-data">Export Data</DropdownItem>
                <DropdownItem key="set-alert">Set Alert</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className="flex h-full gap-x-3">
        <ResponsiveContainer
          className="[&_.recharts-surface]:outline-none"
          height="100%"
          width="100%"
        >
          <RadialBarChart
            barSize={10}
            cx="50%"
            cy="50%"
            data={chartData}
            endAngle={-45}
            innerRadius={90}
            outerRadius={70}
            startAngle={225}
          >
            <PolarAngleAxis
              angleAxisId={0}
              domain={[0, total]}
              tick={false}
              type="number"
            />
            <RadialBar
              angleAxisId={0}
              animationDuration={1000}
              animationEasing="ease"
              background={{ fill: "blue" }}
              cornerRadius={12}
              dataKey="value"
            >
              {chartData.map((_, index) => (
                <Cell key={`cell-${index}`} fill="#ffffff" />
              ))}
            </RadialBar>
            <g>
              <text textAnchor="middle" x="50%" y="48%">
                <tspan className="fill-white text-tiny" dy="-0.5em" x="50%">
                  {chartData?.[0].name}
                </tspan>
                <tspan
                  className="fill-white text-medium font-semibold"
                  dy="1.5em"
                  x="50%"
                >
                  {formatTotal(total)}
                </tspan>
              </text>
            </g>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
});

CircleChartCard.displayName = "CircleChartCard";
