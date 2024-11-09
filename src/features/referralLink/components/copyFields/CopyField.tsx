import CopyButton from "../buttons/CopyButton";
import LoadingIcon from "../../../../components/common/LoadingIcon";
import useRefferalLink from "../../hooks/useReferralLink";

const CopyField = () => {
    const { userReferralLink, isLoading } = useRefferalLink();

    const handleOnCopy = async () => {
        await navigator.clipboard.writeText(userReferralLink);
    };

    return (
        <div
            className="border-[1px] border-[#ccc3c3] md:rounded-[18px] rounded-[10px]
                       md:w-[603px] md:h-[70px] w-full h-[36px]
                       flex justify-between items-center"
        >
            {isLoading ? (
                <div className="ml-[16px]">
                    <LoadingIcon width="30px" height="30px" borderWidth="4px" />
                </div>
            ) : (
                <div
                    className="md:text-[1.25rem] text-[0.87rem] 
                               upDownTextWhite md:max-w-[360px] max-w-[256px] ml-[16px]
                               overflow-hidden whitespace-nowrap text-ellipsis font-semibold"
                >
                    {userReferralLink}
                </div>
            )}
            <CopyButton handleOnClick={handleOnCopy} />
        </div>
    );
};

export default CopyField;
