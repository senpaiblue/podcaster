"use client";
import Podcast from "@/components/Podcast";
import { Button } from "@/components/ui/button";
import { podcastData } from "@/constants";
import React, { useEffect } from "react";

const Home = () => {
  return (
    <main className="mt-9 flex flex-col gap-9">
      <h1 className="text-white-1 font-bold text-3xl">Trending Podcasts</h1>
      
      <div className="podcast_grid">
      {podcastData.map(({imgURL,title,description,id})=>(
       <Podcast
        imgUrl={imgURL}
        title={title}
        description={description}
        podcastId={id}
        />
        ))}
      </div>
    </main>
  );
};

export default Home;
