import { useTranslation } from "react-i18next";
import PlayNowButton from "../../home/homeComponents/PlayNowButton";

const UpDownText = () => {
    const { t } = useTranslation();

    return (
        <div
            className="absolute min-[820px]:text-[90px] text-[60px] xl:block hidden
                           font-semibold defaultGradientText top-[60%] right-[130px]
                           lg:scale-[1] min-[820px]:scale-[0.7] sm:scale-[1]"
        >
            <div>{t("upPartOfTitleMobile")}</div>
            <div className="ml-[90px]">{t("downPartOfTitleMobile")}</div>
            <div
                className="min-[820px]:w-[155px] w-[102px] 
                               min-[820px]:h-[84px] h-[55.28px] 
                               bg-[#ccf751] bg-opacity-[42%] 
                               rounded-tl-[100px] rounded-tr-[1000px]
                               rounded-br-[100px] rounded-bl-[1000px] absolute
                               greenBeanShadow 
                               left-[-6%]
                               top-[43px]"
            />
            <div
                className="min-[820px]:w-[308px] w-[214px]  
                               min-[820px]:h-[104px] h-[72.26px] 
                               bg-[#fd5254] bg-opacity-[42%] 
                               rounded-tl-[1000px] rounded-tr-[100px]
                               rounded-br-[1000px] rounded-bl-[100px] absolute
                               redBeanShadow 
                               left-[20%] 
                               top-[155px]"
            />
            <div className="absolute top-[410px] left-[50%] translate-x-[-50%] 2xl:block hidden">
                <PlayNowButton />
            </div>
        </div>
    );
};

export default UpDownText;
