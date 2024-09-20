import { assets } from "../../../../../../imagesImports/assets";

const CurrentMatchTextWithMoney = ({
    text,
    amountOfMoney,
}: {
    text: string;
    amountOfMoney: number;
}) => {
    return (
        <div className="flex justify-start items-center">
            <div className="popupTextGradient">{text}</div>
            <div className="flex justify-start items-center ml-[11px]">
                <div className="bitcoinTextGradient">{amountOfMoney}</div>
                <img
                    src={assets.images.inputFormCoin}
                    alt="coin currency image"
                    className="w-[24px] h-[24px] ml-[10px]"
                />
            </div>
        </div>
    );
};

export default CurrentMatchTextWithMoney;
