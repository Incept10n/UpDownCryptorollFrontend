import { assets } from "../../../../../../imagesImports/assets";
import { PredictionValue } from "../../../../../../types/HelperTypes";

const UpDownBean = ({
    predictionValue,
    className,
}: {
    predictionValue: PredictionValue;
    className?: string;
}) => {
    return (
        <div
            className={`bg-opacity-[0.72] ml-[6px]
                                       ${
                                           predictionValue ===
                                           PredictionValue.Up
                                               ? "bg-[#CCF751] greenBeanShadow"
                                               : "bg-[#fd5254] redBeanShadow"
                                       }
                                       rounded-tl-[100px] rounded-tr-[1000px] 
                                       rounded-bl-[1000px] rounded-br-[100px]
                                       flex justify-center items-center relative
                       ${className}`}
        >
            <img
                src={assets.icons.winLoseArrow}
                alt="arrow"
                className={`${
                    predictionValue === PredictionValue.Up
                        ? "rotate-[0deg] top-[2px]"
                        : "rotate-[180deg] top-[-2px]"
                } w-[100%] h-[100%] absolute `}
            />
        </div>
    );
};

export default UpDownBean;
