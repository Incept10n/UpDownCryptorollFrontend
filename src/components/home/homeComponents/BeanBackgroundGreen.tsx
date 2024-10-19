import { useTranslation } from "react-i18next";

const BeanBackgroundGreen = ({ text }: { text: string }) => {
    const { i18n } = useTranslation();

    return (
        <span className="relative inline-block">
            <span
                className={`bg-[#ccf751] bg-opacity-[42%]
                   rounded-tl-[100px] rounded-tr-[1000px]
                   rounded-br-[100px] rounded-bl-[1000px]
                   absolute top-1/2 left-1/2 greenBeanShadow
                   transform -translate-x-1/2 -translate-y-[36%]
                   ${
                       i18n.language === "en"
                           ? "min-[850px]:w-[170px] min-[850px]:h-[100px] w-[150px] h-[70px]"
                           : "min-[850px]:w-[300px] min-[850px]:h-[100px] w-[150px] h-[70px]"
                   }`}
            ></span>
            <span className="defaultGradientText">{text}</span>
        </span>
    );
};

export default BeanBackgroundGreen;
