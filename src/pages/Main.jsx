import axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect, useHistory, useParams } from "react-router";
import Memes from "../components/Memes";

export default function Main() {
  const [articles, setArticles] = useState([]);
  // const { category } = useParams();
  // const history = useHistory();

  useEffect(() => {
    const getMemes = async () => {
      const response = await axios.get(`/memes`);
      setArticles(response.data);
    };

    getMemes();
  }, []);

  // const handleChange = (event) => {
  //   const { value } = event.target;
  //   history.push(`/news/${value}`);
  // };

  return (
    <div>
      <h3>Memes</h3>
      <Memes articles={articles} />
    </div>
  );
}

function Formulario(props) {
  return (
    <form>
      <select onChange={props.onChange}>
        <option value="business">Negocios</option>
        <option value="entertainment">Entretenimiento</option>
        <option value="general">General</option>
      </select>
    </form>
  );
}
