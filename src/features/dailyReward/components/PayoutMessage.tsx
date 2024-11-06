import { assets } from "../../../imagesImports/assets";

const PayoutMessage = ({
    payout,
    fontSize,
    lineHeight,
}: {
    payout: number;
    fontSize: string;
    lineHeight: string;
}) => {
    return (
        <div className="flex space-x-[8px] justify-center items-center mt-[33px]">
            <div
                className={`text-[#57b14f] font-semibold`}
                style={{
                    fontSize,
                    lineHeight,
                }}
            >
                + {payout}
            </div>
            <img
                src={assets.images.inputFormCoin}
                alt="input coin"
                className="w-[24px] h-[24px]"
            />
        </div>
    );
};

export default PayoutMessage;
