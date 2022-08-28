import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <>
      {" "}
      <Main />
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Horror" fetchURL={requests.requestHorror} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
    </>
  );
};

export default Home;
