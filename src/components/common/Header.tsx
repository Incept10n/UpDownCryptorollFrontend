import { assets } from "../../imagesImports/assets";
import ChooseGameButton from "./header/ChooseGameButton";

const Header = () => {
    return (
        <header className="flex justify-between">
            <div className="flex justify-between items-center">
                <img src={assets.icons.logo} alt="logo" />
                <ChooseGameButton />
            </div>
            <div></div>
            <div></div>
        </header>
    );
};

export default Header;
