import React, { ReactElement } from "react";
import Toggle from "../../../components/buttons/Toggle";

interface Props {
  color: string;
  data: {
    name: string;
    attraction: string;
    fans: number;
    couponsGen: number;
    ordersRec: number;
    active: boolean;
    update: any;
  }[];
}

export default function index({ color, data }: Props): ReactElement {
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Campaign Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                  >
                    Attraction
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                  >
                    Fans Captured
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                  >
                    Coupons Generated
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                  >
                    Orders Recieved
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                  >
                    Campaign Active
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                  >
                    {" "}
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((game, i) => {
                  const {
                    name,
                    attraction,
                    fans,
                    couponsGen,
                    ordersRec,
                    active,
                    update,
                  } = game;
                  return (
                    <Row
                      name={name}
                      attraction={attraction}
                      fans={fans}
                      couponsGen={couponsGen}
                      ordersRec={ordersRec}
                      active={active}
                      update={update}
                      i={i}
                      color={color}
                      key={i}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

interface GameProps {
  name: string;
  attraction: string;
  fans: number;
  couponsGen: number;
  ordersRec: number;
  active: boolean;
  update: any;
  i: number;
  color: string;
}

const Row = ({
  name,
  attraction,
  fans,
  couponsGen,
  ordersRec,
  active,
  update,
  i,
  color,
}: GameProps): ReactElement => {
  return (
    <tr key={name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
        {name}
      </td>
      <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {attraction}
      </td>
      <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {fans}
      </td>
      <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {couponsGen}
      </td>
      <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {ordersRec}
      </td>
      <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        <Toggle active={active} update={update} color={color} />
      </td>
      <td className="px-6 py-4 text-sm font-medium text-center whitespace-nowrap">
        <a href="#" className={`text-${color}-600 hover:text-${color}-900`}>
          Edit
        </a>
      </td>
    </tr>
  );
};
