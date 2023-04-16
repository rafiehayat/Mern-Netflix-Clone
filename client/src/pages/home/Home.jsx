import { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import React from "react";
import axios from "axios";

const Home = ({ type }) => {
  const [list, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type" + type : ""} ${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzI1MjRhODdlMTIwNWRkYTgxY2M1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MTM2NjQyMCwiZXhwIjoxNjgxNzk4NDIwfQ.WkU5jv37zVu-HwvgieHGBGZT1unnVfAd1Gr3gAS7aEE",
            },
          }
        );
        console.log(res);
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} setGenre={setGenre} />
      {list.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
