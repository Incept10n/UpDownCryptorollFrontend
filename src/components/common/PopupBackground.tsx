const PopupBackground = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div
            className={`UpDownDarkBlueBg
                        whitePopupShadow rounded-[28px] relative
                        ${className}`}
        >
            {children}
        </div>
    );
};

export default PopupBackground;
