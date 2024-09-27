import GradientText from "../common/GradientText";

const MultiplierCard = ({
    multiplier,
    text,
}: {
    multiplier: number;
    text: string;
}) => {
    return (
        <div
            className="md:w-[239px] sm:w-[150px] w-[94px] sm:h-[85px] buttonGrayGradient
                       border-[1.2px] border-[#747474] rounded-[10px]
                       flex flex-col justify-start items-center"
        >
            <GradientText
                text={multiplier.toString() + "x"}
                className="font-semibold sm:text-[40px] text-[26px] leading-[40px] mt-[5px]"
            />
            <GradientText
                text={text}
                className="font-semibold md:text-[18px] text-[12px] leading-[24px] sm:mt-[10px] mt-0"
            />
        </div>
    );
};

export default MultiplierCard;
