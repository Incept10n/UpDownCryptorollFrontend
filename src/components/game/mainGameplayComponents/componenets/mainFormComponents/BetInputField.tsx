import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { assets } from "../../../../../imagesImports/assets";

const BetInputField = ({
    betValue,
    setBetValue,
}: {
    betValue: string;
    setBetValue: Dispatch<SetStateAction<string>>;
}) => {
    const handleOnChange = (ev: ChangeEvent<HTMLInputElement>) => {
        const newValue = ev.target.value;

        if (newValue === "" || newValue.length <= 11) {
            setBetValue(newValue);
        }
    };

    return (
        <div
            className="relative max-w-[252px] h-[52px] min-[1620px]:scale-100 scale-[0.8]
                                   bg-[#0d121d] rounded-[25px] px-[11px]
                                   flex justify-between items-center"
        >
            <div className="h-full flex flex-col justify-end items-center">
                <input
                    type="number"
                    className="w-full h-[35px] text-[#ffffff] text-[25px] 
                               bg-transparent outline-none ml-[19px]"
                    value={betValue}
                    onChange={handleOnChange}
                />
                <div className="bg-[#ffffff] h-[1px] w-[90%] mb-[10px]" />
            </div>
            <img src={assets.images.inputFormCoin} alt="input form coin" />
        </div>
    );
};

export default BetInputField;
