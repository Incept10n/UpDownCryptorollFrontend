import { useTranslation } from "react-i18next";

const BeanBackgroundRed = ({ text }: { text: string }) => {
    const { i18n } = useTranslation();

    return (
        <span className="relative inline-block">
            <span
                className={`bg-[#fd5254] bg-opacity-[42%]
                   rounded-tl-[1000px] rounded-tr-[100px]
                   rounded-br-[1000px] rounded-bl-[100px]
                   absolute top-1/2 left-1/2 redBeanShadow
                   transform -translate-x-1/2 -translate-y-[43%]
                   ${
                       i18n.language === "en"
                           ? "min-[850px]:w-[320px] min-[850px]:h-[100px] w-[210px] h-[70px]"
                           : "min-[850px]:w-[280px] min-[850px]:h-[100px] w-[210px] h-[70px]"
                   }`}
            ></span>
            <span className="defaultGradientText">{text}</span>
        </span>
    );
};

export default BeanBackgroundRed;
