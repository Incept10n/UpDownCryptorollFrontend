import { assets } from "../../../imagesImports/assets";

const HomeCoins = () => {
    return (
        <div className="opacity-0 appearAnimationCoins min-[820px]:block hidden">
            <img
                src={assets.icons.coins.btc}
                alt="bitcoin"
                className="w-[169px] h-[174px] absolute left-[20%] top-[53%]"
            />
            <img
                src={assets.icons.coins.eth}
                alt="ethereum"
                className="w-[98px] h-[159px] absolute top-[15%] left-[63%]"
            />
            <img
                src={assets.icons.coins.ton}
                alt="ton"
                className="w-[132px] h-[132px] absolute top-[76%] left-[63%]"
            />
        </div>
    );
};

export default HomeCoins;
