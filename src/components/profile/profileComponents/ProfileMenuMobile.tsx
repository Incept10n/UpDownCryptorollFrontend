import { useEffect, useRef, useState } from "react";
import { assets } from "../../../imagesImports/assets";
import { useTranslation } from "react-i18next";
import ProfileMenuItem from "./menuComponents/ProfileMenuItem";
import { ProfilePageType } from "../../../types/HelperTypes";

const ProfileMenuMobile = () => {
    const [isMenuExpanded, setIsMenuExpanded] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutsideOfDiv = (ev: MouseEvent) => {
            if (divRef.current?.contains(ev.target as Node)) {
                setIsMenuExpanded(false);
            }
        };

        window.addEventListener("click", handleClickOutsideOfDiv);

        return () => {
            window.removeEventListener("click", handleClickOutsideOfDiv);
        };
    }, []);

    return (
        <div className="absolute left-0 top-0 lg:hidden block">
            <div
                className="absolute w-[27px] h-[50px] rounded-tr-[18px] buttonGrayGradientRight 
                           border-[1px] border-[#747474] flex justify-center items-center
                           transition-transform duration-200 ease-out
                           active:scale-110 left-0 top-[96px] z-[20]"
                onClick={() => setIsMenuExpanded(true)}
            >
                <img src={assets.icons.doubleArrow} alt="double arrow" />
            </div>
            {isMenuExpanded && (
                <div
                    className="absolute h-[100vh] bg-[#3c3939] bg-opacity-[70%] z-[19]"
                    style={{
                        width: `${window.innerWidth}px`,
                    }}
                    ref={divRef}
                ></div>
            )}
            <div
                className={`absolute left-0 top-0 UpDownDarkBlueBg overflow-hidden
                            ${
                                isMenuExpanded
                                    ? "w-[290px] border-r-[1px] border-r-[#a4a4a4]"
                                    : "w-0"
                            } h-[100vh]
                            rounded-tr-[35px] rounded-br-[35px]
                            transition-all duration-[0.5] ease-in-out z-[20]`}
            >
                <img
                    src={assets.icons.arrowDown}
                    alt="arrow left"
                    className="absolute rotate-[90deg] w-[30px] h-[30px] opacity-[50%]
                               top-[20px] left-[20px]"
                    onClick={() => setIsMenuExpanded(false)}
                />
                <div
                    className="absolute UpDownGrayText text-[24px] font-light
                                top-[20px] right-[30px]"
                >
                    {t("menu")}
                </div>
                <ul
                    className="absolute top-[60px] left-0 flex 
                               flex-col justify-start items-center w-full mt-[44px]"
                    onClick={() => setIsMenuExpanded(false)}
                >
                    <ProfileMenuItem
                        icon={assets.icons.home}
                        text={t("Profile")}
                        pageType={ProfilePageType.Profile}
                    />
                    <ProfileMenuItem
                        icon={assets.icons.world}
                        text={t("Language")}
                        pageType={ProfilePageType.Language}
                    />
                    <ProfileMenuItem
                        icon={assets.icons.book}
                        text={t("History")}
                        pageType={ProfilePageType.History}
                    />
                    <ProfileMenuItem
                        icon={assets.icons.reward}
                        text={t("Reward")}
                        pageType={ProfilePageType.Rewards}
                    />
                </ul>
            </div>
        </div>
    );
};

export default ProfileMenuMobile;
