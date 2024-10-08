import { assets } from "../../../../../../../imagesImports/assets";

const CompletedCheckmarkButton = () => {
    return (
        <button
            className="w-[29px] h-[27px] flex justify-center items-center
                       buttonGrayGradient border-[#747474] border-[1.2px] rounded-[10px]"
        >
            <img
                src={assets.icons.taskCompletedCheckmark}
                alt="arrow right"
                className="w-[34px] h-[34px]"
            />
        </button>
    );
};

export default CompletedCheckmarkButton;
