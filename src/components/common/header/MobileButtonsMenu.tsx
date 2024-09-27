import { useTranslation } from "react-i18next";
import { assets } from "../../../imagesImports/assets";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const MobileButtonsMenu = () => {
    const { t } = useTranslation()!;

    const [isExpanded, setIsExpanded] = useState(false);

    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOnClick = (event: Event) => {
            if (!divRef.current?.contains(event.target as Node)) {
                setIsExpanded(false);
            }
        };

        window.addEventListener("click", handleOnClick);
    }, []);

    return (
        <div className="lg:hidden block z-[20]" ref={divRef}>
            <div onClick={() => setIsExpanded((prevState) => !prevState)}>
                <img
                    src={
                        isExpanded
                            ? assets.icons.cross
                            : assets.icons.burgerMenu
                    }
                    alt="burger menu"
                    className={`lg:hidden block md:w-[45px] md:h-[45px] w-[32px] h-[32px]`}
                />
            </div>
            <div
                className={`absolute sm:top-[100px] sm:right-[50px] top-[80px] right-[19px]
                           w-[118px] h-[140px] UpDownDarkBlueBg
                           border-[1px] border-[#a4a4a4] rounded-[16px]
                           flex flex-col justify-start items-center text-[14px] font-semibold
                           ${!isExpanded && "hidden"}`}
                onClick={() => setIsExpanded(false)}
            >
                <Link to="/profile" className="mt-[10px] underline">
                    {t("profileText")}
                </Link>
                <Link to="/rules" className="mt-[10px] underline">
                    {t("rules")}
                </Link>
                <a
                    href="https://cryptoroll.su"
                    target="_blank"
                    className="mt-[10px] underline"
                >
                    {t("aboutMobile")}
                </a>
                <div className="mt-[10px] underline">{t("dailyChallenge")}</div>
            </div>
        </div>
    );
};

export default MobileButtonsMenu;
