import React, { ReactElement } from "react";
import Heading from "../../../components/pageHeadings/SimpleWithActionButton";
import CardBody from "../../../components/shells/CardBasic";
import FansTable from "../../../components/tables/FansTable";

interface Props {
  color: string;
}

export default function index({ color }: Props): ReactElement {
  return (
    <div>
      <Heading
        title="Fans"
        color={color}
        actionTitle="Export to CSV"
        actionFunction={() => console.log("clicked")}
      />
      <CardBody>
        <FansTable data={fansData} color={color} />
      </CardBody>
    </div>
  );
}

const fansData = [
  {
    customerID: "234-234-34534",
    name: "Rita Haywood",
    phone: "(323) 345-6789",
    prizes: [
      {
        code: "fwoijf23",
        desc: "25% off",
      },
      {
        code: "lkjwefoij23",
        desc: "$10 off",
      },
    ],
    customerRevenue: 1234.23,
    totalCustomerOrders: 13,
    dateAdded: "9/12/2021",
  },
  {
    customerID: "234-234-98349",
    name: "Tom Music",
    phone: "(323) 345-6789",
    prizes: [
      {
        code: "lkjwefoij23",
        desc: "$10 off",
      },
    ],
    customerRevenue: 124.23,
    totalCustomerOrders: 1,
    dateAdded: "9/12/2021",
  },
  {
    customerID: "234-252-34534",
    name: "Larry David",
    phone: "(323) 345-6789",
    prizes: [
      {
        code: "fwoijf23",
        desc: "25% off",
      },
      {
        code: "fwoijf23",
        desc: "25% off",
      },
      {
        code: "fwoijf23",
        desc: "25% off",
      },
      {
        code: "lkjwefoij23",
        desc: "$10 off",
      },
    ],
    customerRevenue: 934.23,
    totalCustomerOrders: 6,
    dateAdded: "9/12/2021",
  },
  {
    customerID: "456-234-34534",
    name: "Mike Smit",
    phone: "(323) 345-6789",
    prizes: [
      {
        code: "fwoijf23",
        desc: "25% off",
      },
      {
        code: "fwoijf23",
        desc: "25% off",
      },
      {
        code: "lkjwefoij23",
        desc: "$10 off",
      },
    ],
    customerRevenue: 123.45,
    totalCustomerOrders: 2,
    dateAdded: "9/12/2021",
  },
];
