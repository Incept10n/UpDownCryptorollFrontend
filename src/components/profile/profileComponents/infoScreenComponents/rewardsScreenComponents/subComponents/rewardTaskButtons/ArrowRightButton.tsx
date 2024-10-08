import { assets } from "../../../../../../../imagesImports/assets";

const ArrowRightButton = () => {
    return (
        <button
            className="w-[29px] h-[27px] flex justify-center items-center
                       buttonGrayGradient border-[#747474] border-[1.2px] rounded-[10px]"
        >
            <img
                src={assets.icons.singleArrowRight}
                alt="arrow right"
                className="w-[17px] h-[16px]"
            />
        </button>
    );
};

export default ArrowRightButton;
