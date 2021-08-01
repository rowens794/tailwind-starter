import React, { ReactElement } from "react";

interface Props {
  color: string;
  data: {
    customerID: string;
    name: string;
    phone: string;
    prizes: {
      code: string;
      desc: string;
    }[];
    customerRevenue: number;
    totalCustomerOrders: number;
    dateAdded: string;
  }[];
}

export default function index({ data, color }: Props): ReactElement {
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
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                  >
                    Phone
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                  >
                    Prizes
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                  >
                    Total Revenue
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-center text-gray-500 uppercase"
                  >
                    Orders Placed
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((fan, i) => {
                  const {
                    customerID,
                    name,
                    phone,
                    prizes,
                    customerRevenue,
                    totalCustomerOrders,
                    dateAdded,
                  } = fan;
                  return (
                    <Row
                      customerID={customerID}
                      name={name}
                      phone={phone}
                      prizes={prizes}
                      customerRevenue={customerRevenue}
                      totalCustomerOrders={totalCustomerOrders}
                      i={i}
                      key={i}
                      color={color}
                      clickHandler={(id) =>
                        console.log(`Customer: ${id} clicked`)
                      }
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

interface CustomerProps {
  customerID: string;
  name: string;
  phone: string;
  prizes: {
    code: string;
    desc: string;
  }[];
  customerRevenue: number;
  totalCustomerOrders: number;
  i: number;
  color: string;
  clickHandler: Function;
}

const Row = ({
  customerID,
  name,
  phone,
  prizes,
  customerRevenue,
  totalCustomerOrders,
  i,
  color,
  clickHandler,
}: CustomerProps): ReactElement => {
  return (
    <tr key={name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
        <button onClick={() => clickHandler(customerID)}>
          <p
            className={`text-${color}-900 font-semibold underline whitespace-nowrap`}
          >
            {name}
          </p>
        </button>
      </td>
      <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {phone}
      </td>
      <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {prizes.length} Prizes Won
      </td>
      <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {customerRevenue}
      </td>
      <td className="px-6 py-4 text-sm text-center text-gray-500 whitespace-nowrap">
        {totalCustomerOrders}
      </td>
    </tr>
  );
};
