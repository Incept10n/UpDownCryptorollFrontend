const PopupBackground = ({
    children,
    width,
    height,
}: {
    children: React.ReactNode;
    width: string;
    height: string;
}) => {
    return (
        <div
            className="UpDownDarkBlueBg whitePopupShadow rounded-[28px] relative"
            style={{
                width,
                height,
            }}
        >
            {children}
        </div>
    );
};

export default PopupBackground;
