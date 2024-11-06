import "../styles/dailyRewardStyle.css";

const ShieldPopupBackground = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className="shieldShapeContainer relative">
            <div
                className="absolute UpDownDarkBlueBg shieldShape 
                           sm:w-[387px] sm:h-[431px] w-[325px] h-[320px]"
            ></div>
            <div
                className={`sm:w-[387px] sm:h-[431px] w-[325px] h-[320px] relative ${className}`}
            >
                {children}
            </div>
        </div>
    );
};

export default ShieldPopupBackground;
