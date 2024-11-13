import { useTranslation } from "react-i18next";
import LoadingIcon from "../../../../components/common/LoadingIcon";

const CheckingQuizAnimation = () => {
    const { t } = useTranslation();

    return (
        <div
            className="flex justify-start items-center 
                                md:space-x-[30px] space-x-[9px] text-white"
        >
            <div className="md:block hidden">
                <LoadingIcon width="60px" height="60px" borderWidth="8px" />
            </div>
            <div className="md:hidden block">
                <LoadingIcon width="31px" height="31px" borderWidth="5px" />
            </div>
            <div className="md:text-[2rem] text-[1.25rem]">{t("checking")}</div>
        </div>
    );
};

export default CheckingQuizAnimation;
