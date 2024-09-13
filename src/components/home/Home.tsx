import { useContext, useEffect } from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../context/ApplicationContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const { setCurrentGame } = useContext(ApplicationContext)!;
    const navigate = useNavigate();

    useEffect(() => {
        setCurrentGame(GameCoice.None);
    }, []);

    return (
        <>
            <div>Home</div>
            <button
                onClick={() => {
                    setCurrentGame(GameCoice.Btc);
                    navigate("/play");
                }}
                className="upDownTextWhite border-gray-300 border-[1px] p-2 rounded-[14px]"
            >
                Click me
            </button>
        </>
    );
};

export default Home;
