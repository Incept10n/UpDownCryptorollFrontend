import { assets } from "../../../../../../imagesImports/assets";

const CheckmarkWithTextReward = ({ text }: { text: string }) => {
    return (
        <div className="inline-flex justify-start items-center space-x-[21px] font-semibold">
            <img
                src={assets.icons.checkRing}
                alt="reward check mark"
                className="2xl:w-[52px] 2xl:h-[52px] w-[38px] h-[38px]"
            />
            <div className="upDownTextWhite underline 2xl:text-[1.4rem] text-[1rem]">
                {text}
            </div>
        </div>
    );
};

export default CheckmarkWithTextReward;
