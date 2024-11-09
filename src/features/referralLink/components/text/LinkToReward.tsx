import { useTranslation } from "react-i18next";
import AdditionalInfoText from "./AdditionalInfoText";
import TextWithMoney from "../../../../components/common/text/TextWithMoney";
import RewardLinkButton from "../buttons/RewardLinkButton";

const LinkToReward = () => {
    const { t } = useTranslation();

    return (
        <div className="flex justify-start items-center space-x-[8px]">
            <AdditionalInfoText text={t("get")} />
            <TextWithMoney
                moneyAmount={5000}
                spaceBetweenAmountAndImg="5px"
                textClassName="md:text-[1.125rem] text-[0.875rem]"
                imgClassName="md:w-[24px] md:h-[24px] w-[16px] h-[16px]"
            />
            <AdditionalInfoText text={t("afterInvitingFriends")} />
            <RewardLinkButton />
        </div>
    );
};

export default LinkToReward;
