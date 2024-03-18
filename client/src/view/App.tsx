import React from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {GameStorage} from "../store/store";
import {Page} from "../store/pageSlice";
import {Game} from "./Game";
import {Leaderboard} from "./Leaderboard";
import {StartPage} from "./StartPage";
import {SubmitNamePage} from "./SubmitNamePage";

function App() {
  const page: Page = useSelector(((state: GameStorage) => state.page.currentPage));

  switch (page) {
    case Page.StartPage:
      return <StartPage/>
    case Page.GamePage:
      return <Game/>;
    case Page.LeaderBoard:
      return <Leaderboard/>
    case Page.SubmitResult:
      return <SubmitNamePage/>
  }
}

export default App;
