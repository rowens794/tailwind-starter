import React, { ReactElement } from "react";
import Image from "next/image";
import { InformationCircleIcon, PlusIcon } from "@heroicons/react/outline";

interface Props {
  color: string;
  attractions: {
    name: string;
    tagline: string;
    gameID: string;
    imageUrl: string;
    imgWidth: number;
    imgHeight: number;
    active: boolean;
  }[];
}

export default function index({ color, attractions }: Props): ReactElement {
  return (
    // <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
    <ul className="flex flex-wrap">
      {attractions.map((attraction) => {
        const {
          name,
          tagline,
          gameID,
          imageUrl,
          imgWidth,
          imgHeight,
          active,
        } = attraction;

        return (
          <Poster
            name={name}
            tagline={tagline}
            gameID={gameID}
            imageUrl={imageUrl}
            imgWidth={imgWidth}
            imgHeight={imgHeight}
            active={active}
            color={color}
            key={gameID}
          />
        );
      })}
    </ul>
  );
}

interface PosterProps {
  name: string;
  tagline: string;
  gameID: string;
  imageUrl: string;
  imgWidth: number;
  imgHeight: number;
  active: boolean;
  color: string;
}

const Poster = ({
  name,
  tagline,
  gameID,
  imageUrl,
  imgWidth,
  imgHeight,
  active,
  color,
}: PosterProps): ReactElement => {
  //load image from cloudinary
  const gameLoader = () => {
    return imageUrl;
  };

  const backgroundLoader = () => {
    return `https://res.cloudinary.com/dfebwzrhb/image/upload/v1627760808/TailwindImages/background.png`;
  };

  //colorize games depending on active state
  if (!active) color = "gray";

  return (
    <li
      className={`flex flex-col col-span-1 divide-y divide-gray-200 rounded-md bg-gray-50 w-52 h-80 m-4`}
    >
      <div
        className={`relative h-full overflow-hidden text-center border border-gray-300 rounded-md bg-gray-50`}
      >
        <p
          className={`relative z-20 p-4 text-3xl font-black text-${color}-900 transform -rotate-6`}
        >
          {name}
        </p>

        {/* Game Image */}
        <div className={`absolute z-10 w-full text-center bottom-9`}>
          <Image
            className={!active ? "filter grayscale" : ""}
            loader={gameLoader}
            width={imgWidth}
            height={imgHeight}
            src="game-image.png"
          />
        </div>

        {/* Background Image */}
        <div
          style={{
            width: "450px",
            height: "450px",
            transform: "translate(-100px, -100px)",
          }}
          className="absolute top-0 z-0"
        >
          <Image
            className={
              !active
                ? "filter grayscale animate-spin-slow"
                : "animate-spin-slow"
            }
            loader={backgroundLoader}
            width={800}
            height={800}
            src="background.png"
          />
        </div>

        {/* Bottom Interaction Buttons */}
        <PosterButtons gameID={gameID} active={active} />
      </div>
    </li>
  );
};

interface PosterButtonProps {
  gameID: string;
  active: boolean;
}

const PosterButtons = ({ gameID, active }: PosterButtonProps): ReactElement => {
  const handleInfoClick = (id) => {
    console.log(`getting info for ${id}`);
  };

  const handleAddGameClick = (id) => {
    console.log(`creating game for ${id}`);
  };

  return (
    <>
      {active ? (
        <div className="absolute bottom-0 z-30 flex w-full h-10 px-3 bg-gray-100">
          <button
            className="align-text-left"
            onClick={() => handleInfoClick(gameID)}
          >
            <InformationCircleIcon className="flex-1 h-6 my-2 text-gray-500 align-text-left" />
          </button>

          <div className="flex-grow"></div>

          <button
            className="my-2 align-right"
            onClick={() => handleAddGameClick(gameID)}
          >
            <span>
              <PlusIcon className="flex-1 inline-block h-4 text-gray-600" />
              <p className="inline-block text-gray-600">Add</p>
            </span>
          </button>
        </div>
      ) : (
        <div className="absolute bottom-0 z-30 flex w-full h-10 px-3 bg-gray-100">
          <button
            className="align-text-left"
            onClick={() => handleInfoClick(gameID)}
          >
            <InformationCircleIcon className="flex-1 h-6 my-2 text-gray-500 align-text-left" />
          </button>

          <div className="flex-grow"></div>

          <div className="my-2 align-right">
            <span>
              <PlusIcon className="flex-1 inline-block h-4 text-gray-300" />
              <p className="inline-block text-gray-300">Add</p>
            </span>
          </div>
        </div>
      )}
    </>
  );
};
