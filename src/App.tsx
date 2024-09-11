import { BrowserRouter, Route, Routes } from "react-router-dom";
import GameManager from "./components/game/GameManager";
import Layout from "./components/common/Layout";
import Home from "./components/home/Home";
import Profile from "./components/profile/Profile";
import Rules from "./components/rules/Rules";
import { useState } from "react";
import { ApplicationContext, GameCoice } from "./context/ApplicationContext";
import "./i18n";

function App() {
    const [currentGame, setCurrentGame] = useState<GameCoice>(GameCoice.None);

    return (
        <ApplicationContext.Provider value={{ currentGame, setCurrentGame }}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="play" element={<GameManager />} />
                        <Route path="profile" element={<Profile />}></Route>
                        <Route path="rules" element={<Rules />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </ApplicationContext.Provider>
    );
}

export default App;
