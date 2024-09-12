import { Link } from "react-router-dom";
import { assets } from "../../imagesImports/assets";
import ChooseGameButton from "./header/ChooseGameButton";
import MainHeaderButtons from "./header/MainHeaderButtons";
import MakePredictionText from "./header/MakePredictionText";

const Header = () => {
    return (
        <header className="flex justify-between">
            <div className="flex justify-between items-center font-semibold">
                <Link to="/">
                    <img src={assets.icons.logo} alt="logo" />
                </Link>
                <ChooseGameButton />
            </div>
            <MakePredictionText />
            <MainHeaderButtons />
        </header>
    );
};

export default Header;
