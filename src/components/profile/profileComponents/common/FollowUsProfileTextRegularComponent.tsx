import { useTranslation } from "react-i18next";
import { assets } from "../../../../imagesImports/assets";

const FollowUsProfileTextRegularComponent = () => {
    const { t } = useTranslation();

    return (
        <div className="flex lg:flex-row flex-col-reverse justify-start items-center min-w-[353px]">
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

export default FollowUsProfileTextRegularComponent;
