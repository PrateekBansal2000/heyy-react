import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/prateekbansal2000")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);
  return (
    <>
      <div className="text-center m-4 bg-gray-600 font- text-white p-4 text-2xl">
        <h1 className="text-center bg-black rounded-lg p-2">
          User Name: {data.login}
        </h1>
        Github followers: {data?.followers}
        <img src={data.avatar_url} alt="Git picture" width={300}></img>
      </div>
    </>
  );
}

export default Github;

export const gitHubInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/prateekbansal2000"
  );
  return response.json();
};
