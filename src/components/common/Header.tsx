import { Link } from "react-router-dom";
import { assets } from "../../imagesImports/assets";
import ChooseGameButton from "./header/ChooseGameButton";
import MainHeaderButtons from "./header/MainHeaderButtons";
import MakePredictionText from "./header/MakePredictionText";

const Header = () => {
    return (
        <header className="flex justify-between w-full h-[68px] sm:mt-[40px] mt-[25px] z-[20]">
            <div
                className="flex justify-between items-center font-semibold 
                           sm:space-x-[34px] space-x-[20px]
                           lg:ml-[72px] md:ml-[50px] ml-[27px]"
            >
                <Link to="/">
                    <img
                        src={assets.icons.logo}
                        alt="logo"
                        className="md:w-[67.13px] md:h-[38.52px] w-[46.3px] h-[26.56px]"
                    />
                </Link>
                <ChooseGameButton />
            </div>
            <MakePredictionText />
            <MainHeaderButtons />
        </header>
    );
};

export default Header;
