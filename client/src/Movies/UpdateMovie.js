import React from "react";
import axios from "axios";

const UpdateMovie = (id) => {
  axios
    .put(`http://localhost:5000/api/movies/${id}`)
    .then((response) => console.log(response))
    .catch((err) => console.log(err));

  return (
    <div>
      <form></form>
    </div>
  );
};

export default UpdateMovie;
