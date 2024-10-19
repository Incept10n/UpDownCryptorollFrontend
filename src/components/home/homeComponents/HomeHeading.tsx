import { useTranslation } from "react-i18next";
import BeanBackgroundGreen from "./BeanBackgroundGreen";
import BeanBackgroundRed from "./BeanBackgroundRed";

const HomeHeading = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full h-full flex justify-center items-center appearAnimation">
            <div
                className="relative min-[820px]:text-[5.6rem] text-[3.75rem] 
                           font-semibold defaultGradientText
                           lg:scale-100 min-[820px]:scale-[0.7] scale-100"
            >
                <div className="min-[820px]:block hidden">
                    {t("upPartOfTitle")}{" "}
                    <BeanBackgroundGreen text={t("upPartOfTitleMobile")} />
                </div>
                <div className="ml-[435px] min-[820px]:block hidden">
                    {t("downPartOfTitle")}{" "}
                    <BeanBackgroundRed text={t("downPartOfTitleMobile")} />
                </div>
                <div className="min-[820px]:hidden block">
                    <BeanBackgroundGreen text={"up"} />
                </div>
                <div className="ml-[90px] min-[820px]:hidden block">
                    <BeanBackgroundRed text={"down"} />
                </div>
            </div>
        </div>
    );
};

export default HomeHeading;
