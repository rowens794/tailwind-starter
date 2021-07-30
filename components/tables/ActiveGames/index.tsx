import React, { ReactElement } from "react";

interface Props {
  color: string;
  data: {
    name: string;
    gameType: string;
    prizes: string;
    revenue: string;
  }[];
}

export default function index({ color, data }: Props): ReactElement {
  return (
    <div className="flex flex-col pt-24">
      <h3 className="pb-4 text-lg font-medium leading-6 text-gray-900">
        Active Games
      </h3>
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
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Game
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Prizes Awarded
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                  >
                    Revenue
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((game, i) => {
                  const { name, gameType, prizes, revenue } = game;
                  return (
                    <Row
                      name={name}
                      game={gameType}
                      prizes={prizes}
                      revenue={revenue}
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
  game: string;
  prizes: string;
  revenue: string;
  i: number;
  color: string;
}

const Row = ({
  name,
  game,
  prizes,
  revenue,
  i,
  color,
}: GameProps): ReactElement => {
  return (
    <tr key={name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
        {name}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {game}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {prizes}
      </td>
      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {revenue}
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <a href="#" className={`text-${color}-600 hover:text-indigo-900`}>
          Edit
        </a>
      </td>
    </tr>
  );
};
