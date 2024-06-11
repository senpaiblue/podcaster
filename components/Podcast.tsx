import Image from "next/image";
import React from "react";

const Podcast = ({
  imgUrl,
  title,
  description,
  podcastId,
}: {
  imgUrl: string;
  title: string;
  description: string;
  podcastId: number;
}) => {
  return (
    <div className="cursor pointer">
      <figure className="flex flex-col gap-2">
        <Image src={imgUrl} alt={title} width={174} height={174} className="pb-2 aspect-square h-fit rounded-xl 2xl:size-[200px] w-full"/>
        <div className="flex flex-col">
        <h1 className="text-white-1 truncate text-[20px] font-semibold pb-1">{title}</h1>
        <p className="text-white-1/[0.8] truncate text-[16px] font-regular ">{description}</p>
        </div>
      </figure>
    </div>
  );
};

export default Podcast;
