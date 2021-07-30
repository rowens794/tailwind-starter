import React, { ReactElement } from "react";

interface Props {
  color: string;
  data: {
    name: string;
    stat: string;
  }[];
}

export default function index({ color, data }: Props): ReactElement {
  return (
    <div>
      <h3 className="text-lg font-medium leading-6 text-gray-900">
        Last 30 days
      </h3>
      <dl className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-3">
        {data.map((item, i) => (
          <StatisticCard
            title={item.name}
            statistic={item.stat}
            color={color}
            key={i}
          />
        ))}
      </dl>
    </div>
  );
}

interface CardProps {
  title: string;
  statistic: string;
  color: string;
}

const StatisticCard = ({
  title,
  statistic,
  color,
}: CardProps): ReactElement => {
  return (
    <div
      className={`px-4 py-5 overflow-hidden bg-${color}-600 rounded-lg shadow sm:p-6`}
    >
      <dt className="text-sm font-medium truncate text-gray-50">{title}</dt>
      <dd className="mt-1 text-3xl font-semibold text-center text-gray-50">
        {statistic}
      </dd>
    </div>
  );
};
