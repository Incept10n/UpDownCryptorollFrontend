import { useContext } from "react";
import {
    ApplicationContext,
    GameCoice,
} from "../../../context/ApplicationContext";
import { assets } from "../../../imagesImports/assets";
import { useNavigate } from "react-router-dom";

const ChooseGameExpandMenuItem = ({
    coinIcon,
    coinName,
    lastChild,
}: {
    coinIcon: string;
    coinName: string;
    lastChild?: boolean;
}) => {
    const { setCurrentGame } = useContext(ApplicationContext)!;

    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate("/play");

        if (coinIcon === assets.icons.coins.btc) {
            setCurrentGame(GameCoice.Btc);
        } else if (coinIcon === assets.icons.coins.eth) {
            setCurrentGame(GameCoice.Eth);
        } else if (coinIcon === assets.icons.coins.ton) {
            setCurrentGame(GameCoice.Ton);
        }
    };

    return (
        <div
            className="flex flex-col mt-[10px] hover:cursor-pointer"
            onClick={handleOnClick}
        >
            <div className="flex justify-between items-center md:w-[75%] w-[93%] md:ml-[19px] ml-[15px]">
                <img
                    src={coinIcon}
                    alt="bitcoin logo"
                    className="md:w-[29px] md:h-[30px] w-[22px] h-[22px]"
                />
                <div className="upDownTextWhite w-[70px] text-left md:text-[16px] text-[12px]">
                    {coinName}
                </div>
            </div>
            {!lastChild && (
                <div className="bg-[#CCC3C3] w-[85%] md:h-[2px] h-[0.5px] rounded-full mt-[10px] mx-auto optacity-[0.5]" />
            )}
        </div>
    );
};

export default ChooseGameExpandMenuItem;
