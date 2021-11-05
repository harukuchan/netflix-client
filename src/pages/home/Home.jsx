import React, { useEffect, useState } from "react";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomList = async () => {
      try {
        const res = await axios.get(
          `lists${type ? "?type=" + type : ""}${  // get url from server and type url to client
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTE3NDVhMDE4Nzc0MzdhYzBlNjY4ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzMzQxNzI5NywiZXhwIjoxNjMzODQ5Mjk3fQ.0n56WRutER8o7KSn9p1ZgfXJ69eRmiijXm70EO7qf7E",
            }, // insert token
          }
        );
        setLists(res.data); 
      } catch (err) {
        console.error(err);
      }
    };
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list} />
      ))}
    </div>
  );
};

export default Home;
