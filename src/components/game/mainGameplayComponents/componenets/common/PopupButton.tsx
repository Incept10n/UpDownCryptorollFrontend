const PopupButton = ({
    text,
    width,
    height,
    fontSize,
    onClick,
}: {
    text: string;
    width: string;
    height: string;
    fontSize: string;
    onClick?: () => void;
}) => {
    return (
        <button
            className="buttonGrayGradient rounded-[8px]
                       border-[1.3px] border-[#747474] hover:scale-[1.1] active:scale-[1.1]
                       transition-all duration-[0.3s] ease-in-out"
            style={{
                width: width,
                height: height,
            }}
            onClick={onClick}
        >
            <div
                className="popupTextGradient font-semibold"
                style={{
                    fontSize: fontSize,
                }}
            >
                {text}
            </div>
        </button>
    );
};

export default PopupButton;
