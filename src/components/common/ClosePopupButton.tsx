import { assets } from "../../imagesImports/assets";

const ClosePopupButton = ({
    handleOnClick,
    className,
}: {
    handleOnClick: () => void;
    className?: string;
}) => {
    return (
        <button
            className={`absolute right-[10px] top-[10px] hover:scale-[1.1] scale-[1]
                        transition-all duration-[0.3] ease-in-out ${className}`}
            onClick={handleOnClick}
        >
            <img
                src={assets.icons.popupCloseBtn}
                alt="popup close button"
                className="sm:w-[52px] sm:h-[54px] w-[40px] h-[42px]"
            />
        </button>
    );
};

export default ClosePopupButton;
