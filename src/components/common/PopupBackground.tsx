const PopupBackground = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={`UpDownDarkBlueBg w-[387px] h-[431px] 
                        whitePopupShadow rounded-[28px] relative
                        ${className}`}
        >
            {children}
        </div>
    );
};

export default PopupBackground;
