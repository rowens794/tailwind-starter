import React, { ReactElement } from "react";

const people = [
  {
    name: "Lindsay Walton",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
  },
  {
    name: "Ted Smith",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
  },
  {
    name: "Lucy Knowles",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
  },
  // More people...
];
const activityItems = [
  {
    id: 1,
    person: people[0],
    project: "Workcation",
    commit: "2d89f0c8",
    environment: "production",
    time: "1h",
  },
  {
    id: 2,
    person: people[1],
    project: "Workcation",
    commit: "898sdf98",
    environment: "development",
    time: "2h",
  },
  {
    id: 3,
    person: people[2],
    project: "Workcation",
    commit: "5s7d57sd6",
    environment: "production",
    time: "5h",
  },
  {
    id: 4,
    person: people[1],
    project: "Workcation",
    commit: "34sd5f667",
    environment: "development",
    time: "8h",
  },
  // More items...
];

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <div>
      <ul className="divide-y divide-gray-200">
        {activityItems.map((activityItem) => (
          <li key={activityItem.id} className="py-4">
            <div className="flex space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src={activityItem.person.imageUrl}
                alt=""
              />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">
                    {activityItem.person.name}
                  </h3>
                  <p className="text-sm text-gray-500">{activityItem.time}</p>
                </div>
                <p className="text-sm text-gray-500">
                  Deployed {activityItem.project} ({activityItem.commit} in
                  master) to {activityItem.environment}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
