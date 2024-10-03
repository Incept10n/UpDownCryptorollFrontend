import { useTranslation } from "react-i18next";

const LanguageCard = ({
    languageCode,
    image,
}: {
    languageCode: string;
    image: string;
}) => {
    const { i18n } = useTranslation();

    return (
        <div
            className={`lg:w-[97px] lg:h-[123px] w-[228px] h-[42px] 
                        buttonGrayGradient rounded-[10px] 
                        ${
                            i18n.language === languageCode
                                ? "border-[5px]"
                                : "border-[1.1px]"
                        } border-[#747474]
                        flex lg:flex-col flex-row items-center lg:justify-start justify-around
                        hover:cursor-pointer`}
            onClick={() => i18n.changeLanguage(languageCode)}
        >
            <div className="text-[30px] upDownTextWhite font-semibold lg:ml-0">
                {`${languageCode[0].toUpperCase() + languageCode[1].toLowerCase()}`}
            </div>
            <img
                src={image}
                alt="english flag"
                className="lg:mt-[21px] lg:w-auto lg:h-auto w-[37px] h-[24px]"
            />
        </div>
    );
};

export default LanguageCard;
