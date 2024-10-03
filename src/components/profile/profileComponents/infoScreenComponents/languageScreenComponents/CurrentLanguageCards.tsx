import { assets } from "../../../../../imagesImports/assets";
import LanguageCard from "./LanguageCard";

const CurrentLanguageCards = () => {
    return (
        <div
            className="flex lg:flex-row flex-col 2xl:justify-start justify-center 
                       items-center lg:space-x-[34px] lg:space-y-0 
                       space-y-[28px] 2xl:ml-[66px] mt-[66px]"
        >
            <LanguageCard
                languageCode="en"
                image={assets.icons.countryFlag.us}
            />
            <LanguageCard
                languageCode="ru"
                image={assets.icons.countryFlag.ru}
            />
        </div>
    );
};

export default CurrentLanguageCards;
