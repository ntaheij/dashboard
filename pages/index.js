import { useQuery } from "react-query";
import { useState } from "react";

import Page from "../components/cards/Page";
import Clock from "../components/general/Clock";

import { getHumanizedDate } from "../utils/getHumanDate";
import capitalizeTheFirstLetterOfEachWord from "../utils/captializeLetters";
import weatherQuery from "../utils/weatherQuery";

export default function Home({weather_api_key, ip_locator_key}) {
  const weather = weatherQuery(weather_api_key, ip_locator_key);  

  const items = [
    "Nucleus", "Nucleus", "Nucleus", "Nucleus", "Nucleus", "Nucleus", "Nucleus", "Nucleus", "Nucleus",
  ];

  return (
    <main className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-100">
      <div id="hello" className="p-4 md:p-24">
        <h2 className="gradient-text text-md md:text-2xl"><Clock /></h2>
        <h1 className="text-4xl md:text-6xl font-semibold">{getHumanizedDate()}, <span className="gradient-text">Noah!</span></h1>

        <h3 className="mt-1 md:mt-4 text-xl md:text-2xl">
          { true ? (
              <span className="gradient-text">
                  Loading weather data...
              </span>
            ) : (
              <>
              <span className="gradient-text">
                {capitalizeTheFirstLetterOfEachWord(weather.weather[0].description)}
              </span>
              ,{" "}
              <span className="gradient-text">
                {Math.trunc(weather.main.temp - 273.15)}
              </span>{" "}
              degrees, but feels like{" "}
              <span className="gradient-text">
                  {Math.trunc(weather.main.feels_like - 273.15)}{" "}
              </span>
              degrees in{" "}
              <span className="gradient-text cursor-pointer">
                  {location.city}
              </span>
            </>
            )}
        </h3>

        <h4 className="mt-8 text-3xl md:text-4xl font-semibold">Saved <span className="gradient-text">Pages</span></h4>
        
        <div id="cards" className="md:ml-4 mt-10 mb-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
          { 
            items.map((item) => {
              return (
                <Page 
                  key={item}
                  title={item}
                  subTitle="Hypervisor"
                  link="http://dev.local"
                  linkText="dev.local"
                  image="https://dash.davidapps.dev/_next/image?url=https%3A%2F%2Fuser-images.githubusercontent.com%2F47594764%2F124385080-8c4d8480-dcd4-11eb-9dbb-090f17f5b7ec.png&w=64&q=75"
                />
              )
            })
          }
        </div>
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  return {
      props: {
          weather_api_key: process.env.WEATHER_API_KEY,
          ip_locator_key: process.env.IP_LOCATOR_KEY,
      },
  };
}
