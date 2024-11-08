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
            className="border-[1px] border-[#ccc3c3] rounded-[18px] w-[603px] h-[70px]
                        flex justify-between items-center"
        >
            {isLoading ? (
                <div className="ml-[16px]">
                    <LoadingIcon width="30px" height="30px" borderWidth="4px" />
                </div>
            ) : (
                <div
                    className="text-[1.25rem] upDownTextWhite max-w-[360px] ml-[16px]
                            overflow-hidden whitespace-nowrap text-ellipsis"
                >
                    {userReferralLink}
                </div>
            )}
            <CopyButton handleOnClick={handleOnCopy} />
        </div>
    );
};

export default CopyField;
