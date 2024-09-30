import { useTranslation } from "react-i18next";
import { assets } from "../../../../imagesImports/assets";

const FollowUsProfileScreen = () => {
    const { t } = useTranslation();

    return (
        <div
            className="absolute right-[96px] bottom-[78px] 
                        flex justify-start items-center space-x-[16px]"
        >
            <div className="upDownTextWhite text-[38px] font-semibold">
                {t("followUs")}
            </div>
            <img src={assets.icons.socialMedia.tg} alt="telegramm icon" />
            <img src={assets.icons.socialMedia.twitter} alt="twitter icon" />
            <img src={assets.icons.socialMedia.vk} alt="vk icon" />
        </div>
    );
};

export default FollowUsProfileScreen;
