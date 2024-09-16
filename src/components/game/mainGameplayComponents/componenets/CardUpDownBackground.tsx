import { assets } from "../../../../imagesImports/assets";

const CardUpDownBackground = ({
    widthPx,
    heightPx,
    children,
    className,
}: {
    widthPx: number;
    heightPx: number;
    children?: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={`${className}`}>
            <div
                className="gradientBorder flex justify-center items-end"
                style={{
                    width: `${widthPx}px`,
                    height: `${heightPx}px`,
                }}
            >
                <div
                    className="w-[99.7%] h-[99.7%] bg-no-repeat"
                    style={{
                        backgroundImage: `url(${assets.images.main.bg})`,
                    }}
                >
                    <div
                        className="w-full h-full rounded-[68px] bg-[#0d121d]
                       backdrop-blur-[30px] bg-opacity-[0.39]"
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardUpDownBackground;
