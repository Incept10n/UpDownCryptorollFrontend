import { useTranslation } from 'react-i18next';
import { assets } from '../../../imagesImports/assets';

const FollowUsFooter = () => {
    const { t } = useTranslation();

    return (
        <div
            className="lg:text-[42px] md:text-[30px] text-[16px]  
                       text-[#ccc3c3] font-semibold w-full 
                       flex md:flex-row flex-col-reverse 
                       justify-center items-center md:space-x-[40px] space-x-0
                       md:my-[97px] my-[61px]"
        >
            <div className="text-center md:mt-0">{t('followUs')}</div>
            <div className="flex justify-center space-x-[20px] md:scale-[1] scale-[0.7]">
                <img src={assets.icons.socialMedia.tg} alt="telegram icon" />
                <img
                    src={assets.icons.socialMedia.twitter}
                    alt="twitter icon"
                />
            </div>
        </div>
    );
};

export default FollowUsFooter;
