import React from "react";
import { setTrainerName } from "../store/slices/trainerName.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(setTrainerName(e.target.trainerName.value))
      navigate("/pokedex")
  };
  return (
    <main>
      <section>
        <div>
          <div>
            <img src="/images/title.png" alt="" />
          </div>
          <h3>Hi coach!</h3>
          <p>To start give me your name:</p>
          <form onSubmit={handleSubmit}>
            <input name="trainerName" type="text" placeholder="your Name.." />
            <button>Start</button>
          </form>
        </div>
      </section>
      <footer></footer>
    </main>
  );
};

export default Home;
