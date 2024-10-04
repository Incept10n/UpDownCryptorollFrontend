import { Formatter } from "../../../../../../helperFunctions/Formater";
import { assets } from "../../../../../../imagesImports/assets";

const Payout = ({ amount }: { amount: number }) => {
    return (
        <div className="flex justify-start items-center">
            <div className="text-[14px] font-semibold upDownTextWhite leading-[14px] text-nowrap">
                {amount > 0 && "+"}
                {Formatter.formatMoney(amount)}
            </div>
            <img
                src={assets.images.inputFormCoin}
                alt="input form coin"
                className="w-[16px] h-[16px] ml-[5px]"
            />
        </div>
    );
};

export default Payout;
