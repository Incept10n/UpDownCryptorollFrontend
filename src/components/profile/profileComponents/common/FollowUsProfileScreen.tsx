import { useTranslation } from "react-i18next";
import { assets } from "../../../../imagesImports/assets";

const FollowUsProfileScreen = () => {
    const { t } = useTranslation();

    return (
        <div
            className="absolute xl:right-[96px] right-[50%] max-xl:translate-x-[50%] 
                       lg:bottom-[78px] bottom-[0px] mb-[40px]
                       flex lg:flex-row flex-col-reverse justify-start items-center min-w-[353px]"
        >
            <div
                className="upDownTextWhite lg:text-[38px] text-[16px] min-[1024px]:block hidden
                            font-semibold flex-none lg:mt-0 mt-[20px] mr-[16px]"
            >
                {t("followUs")}
            </div>
            <div
                className="upDownTextWhite lg:text-[38px] text-[16px] min-[1024px]:hidden block
                            font-semibold flex-none lg:mt-0 mt-[20px]"
            >
                {t("followUsMobile")}
            </div>
            <div className="flex space-x-[16px]">
                <img
                    src={assets.icons.socialMedia.tg}
                    alt="telegramm icon"
                    className="lg:w-auto lg:h-auto w-[40px] h-[40px]"
                />
                <img
                    src={assets.icons.socialMedia.twitter}
                    alt="twitter icon"
                    className="lg:w-auto lg:h-auto w-[40px] h-[40px]"
                />
                <img
                    src={assets.icons.socialMedia.vk}
                    alt="vk icon"
                    className="lg:w-auto lg:h-auto w-[40px] h-[40px]"
                />
            </div>
        </div>
    );
};

export default FollowUsProfileScreen;
