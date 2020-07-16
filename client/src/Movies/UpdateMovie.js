import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
const UpdateMovie = () => {
  const { push } = useHistory();

  const { id } = useParams();

  const [movie, setMovie] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: [],
  });

  const handleSubmit = (e) => {
    axios.put(`http://localhost:5000/api/movies/${id}`, movie);
    push(`/movies/${movie.id}`);
  };

  const handleChange = (e) => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === "stars") {
      value = value.split(",");
    }
    if (e.target.name === "metascore") {
      value = parseInt(value, 10);
    }
    setMovie({
      ...movie,
      [e.target.name]: value,
    });
  };

  useEffect(() => {
    axios.get(`http://localhost:5000/api/movies/${id}`).then((res) => {
      setMovie(res.data);
    });
  }, [id]);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputGroupAddon addonType="prepend">Title </InputGroupAddon>
          <Input
            type="text"
            name="title"
            onChange={handleChange}
            value={movie.title}
          />
        </InputGroup>

        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">Title </InputGroupAddon>
          <Input
            type="text"
            name="director"
            onChange={handleChange}
            value={movie.director}
          />
        </InputGroup>

        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">Title </InputGroupAddon>
          <Input
            type="number"
            name="metascore"
            onChange={handleChange}
            value={movie.metascore}
          />
        </InputGroup>
        <br />
        <InputGroup>
          <InputGroupAddon addonType="prepend">Title </InputGroupAddon>
          <Input
            type="text"
            name="star"
            onChange={handleChange}
            value={movie.stars}
          />
        </InputGroup>

        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default UpdateMovie;
