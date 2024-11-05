import { assets } from "../../../../imagesImports/assets";

const PopupLogo = ({ className }: { className?: string }) => {
    return (
        <div className={`bg-[#828383] rounded-full relative ${className}`}>
            <img
                src={assets.icons.logo}
                alt="logo"
                className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
                           sm:w-[67px] sm:h-[40px] w-[58px] h-[35px]"
            />
        </div>
    );
};

export default PopupLogo;
