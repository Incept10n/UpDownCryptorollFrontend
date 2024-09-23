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
            className="w-[239px] h-[85px] buttonGrayGradient
                       border-[1.2px] border-[#747474] rounded-[10px]
                       flex flex-col justify-start items-center"
        >
            <GradientText
                text={multiplier.toString() + "x"}
                className="font-semibold text-[40px] leading-[40px]"
            />
            <GradientText
                text={text}
                className="font-semibold text-[20px] leading-[24px] mt-[10px]"
            />
        </div>
    );
};

export default MultiplierCard;
