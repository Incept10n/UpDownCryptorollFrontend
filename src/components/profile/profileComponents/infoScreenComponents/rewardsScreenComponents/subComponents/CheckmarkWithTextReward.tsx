import { assets } from "../../../../../../imagesImports/assets";

const CheckmarkWithTextReward = ({ text }: { text: string }) => {
    return (
        <div className="flex justify-start items-center space-x-[21px] font-semibold">
            <img
                src={assets.icons.checkRing}
                alt="reward check mark"
                className="w-[38px] h-[38px]"
            />
            <div className="upDownTextWhite underline text-[1rem]">{text}</div>
        </div>
    );
};

export default CheckmarkWithTextReward;
