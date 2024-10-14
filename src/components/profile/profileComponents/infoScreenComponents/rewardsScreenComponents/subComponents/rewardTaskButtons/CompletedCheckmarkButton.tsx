import { assets } from "../../../../../../../imagesImports/assets";

const CompletedCheckmarkButton = () => {
    return (
        <button
            className="min-[1450px]:w-[43px] min-[1450px]:h-[41px] w-[29px] h-[27px] 
                       flex justify-center items-center
                       buttonGrayGradient border-[#747474] border-[1.2px] rounded-[10px]"
        >
            <img
                src={assets.icons.taskCompletedCheckmark}
                alt="arrow right"
                className="min-[1450px]:w-[45px] min-[1450px]:h-[45px] w-[34px] h-[34px]"
            />
        </button>
    );
};

export default CompletedCheckmarkButton;
