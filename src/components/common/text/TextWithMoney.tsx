import { assets } from "../../../imagesImports/assets";

const TextWithMoney = ({
    moneyAmount,
    spaceBetweenAmountAndImg,
    textClassName,
    imgClassName,
}: {
    moneyAmount: number;
    spaceBetweenAmountAndImg: string;
    textClassName?: string;
    imgClassName?: string;
}) => {
    return (
        <div className="flex space-x-[8px] justify-start items-center">
            <div
                className={`text-[1.125rem] text-[#ccc3c3] font-semibold ${textClassName}`}
            >
                {moneyAmount}
            </div>
            <img
                src={assets.images.inputFormCoin}
                alt="input coin"
                className={`${imgClassName}`}
                style={{
                    marginLeft: spaceBetweenAmountAndImg,
                }}
            />
        </div>
    );
};

export default TextWithMoney;
