import { assets } from "../../../../../imagesImports/assets";

const CardUpDownBackground = ({
    widthPx,
    heightPx,
    className,
}: {
    widthPx: number;
    heightPx: number;
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
                    className="bg-no-repeat rounded-[68px] bg-center"
                    style={{
                        backgroundImage: `url(${assets.images.main.bg})`,
                        width: `${widthPx - 2}px`,
                        height: `${heightPx - 2}px`,
                    }}
                >
                    {
                        <div
                            className="w-full h-full rounded-[68px] bg-[#0d121d]
                           backdrop-blur-[30px] bg-opacity-[0.39]"
                        ></div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CardUpDownBackground;
