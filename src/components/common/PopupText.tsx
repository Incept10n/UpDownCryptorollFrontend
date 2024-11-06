const PopupText = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    return (
        <h1
            className={`sm:text-[1.6rem] text-[1.4rem] popupTextGradient font-semibold text-center 
                       mt-[55px] relative ${className}`}
        >
            {text}
        </h1>
    );
};

export default PopupText;
