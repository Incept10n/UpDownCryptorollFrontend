import { assets } from "../../../../../../../imagesImports/assets";

const ArrowRightButton = () => {
    return (
        <button
            className="min-[1450px]:w-[43px] min-[1450px]:h-[41px] w-[29px] h-[27px] 
                       flex justify-center items-center
                       buttonGrayGradient border-[#747474] border-[1.2px] rounded-[10px]"
        >
            <img
                src={assets.icons.singleArrowRight}
                alt="arrow right"
                className="min-[1450px]:w-[34px] min-[1450px]:h-[34px] w-[17px] h-[16px]"
            />
        </button>
    );
};

export default ArrowRightButton;
