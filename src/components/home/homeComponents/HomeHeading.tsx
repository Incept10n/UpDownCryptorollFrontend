import { useTranslation } from "react-i18next";

const HomeHeading = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full h-full flex justify-center items-center appearAnimation">
            <div
                className="relative min-[820px]:text-[90px] text-[60px] 
                           font-semibold defaultGradientText
                           lg:scale-[1] min-[820px]:scale-[0.7] sm:scale-[1]"
            >
                <div className="min-[820px]:block hidden">
                    {t("upPartOfTitle")}
                </div>
                <div className="ml-[435px] min-[820px]:block hidden">
                    {t("downPartOfTitle")}
                </div>
                <div className="min-[820px]:hidden block">
                    {t("upPartOfTitleMobile")}
                </div>
                <div className="ml-[90px] min-[820px]:hidden block">
                    {t("downPartOfTitleMobile")}
                </div>
                <div
                    className="min-[820px]:w-[155px] w-[102px] 
                               min-[820px]:h-[84px] h-[55.28px] 
                               bg-[#ccf751] bg-opacity-[42%] 
                               rounded-tl-[100px] rounded-tr-[1000px]
                               rounded-br-[100px] rounded-bl-[1000px] absolute
                               greenBeanShadow 
                               min-[820px]:left-[46%] left-[-5%]
                               min-[820px]:top-[43px] top-[27px]"
                />
                <div
                    className="min-[820px]:w-[308px] w-[214px]  
                               min-[820px]:h-[104px] h-[72.26px] 
                               bg-[#fd5254] bg-opacity-[42%] 
                               rounded-tl-[1000px] rounded-tr-[100px]
                               rounded-br-[1000px] rounded-bl-[100px] absolute
                               redBeanShadow 
                               min-[820px]:left-[65%] left-[27%] 
                               min-[820px]:top-[159px] top-[100px]"
                />
            </div>
        </div>
    );
};

export default HomeHeading;
