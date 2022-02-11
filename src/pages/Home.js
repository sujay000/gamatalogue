import React, { useEffect } from "react";

//use redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";

//components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

//styling and animation
import styled from "styled-components";
import { motion } from "framer-motion";

import { useLocation } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //get the location
  const location = useLocation();
  const pathID = location.pathname.split("/")[2];

  //getting that data from the redux store or state
  const { popular, newGames, upcoming } = useSelector((state) => state.games);

  return (
    <GameList>
      {pathID && <GameDetail />}

      <h2>Upcoming games</h2>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>

      <h2>Popular games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>

      <h2>New games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
