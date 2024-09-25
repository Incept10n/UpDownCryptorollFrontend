import { assets } from "../../../../../imagesImports/assets";

const CardUpDownBackground = ({ className }: { className?: string }) => {
    return (
        <div className={`${className}`}>
            <div
                className="gradientBorder flex justify-center items-end 
                            pt-[2px] px-[2px] w-full h-full"
            >
                <div
                    className="bg-no-repeat rounded-[68px] bg-center w-full h-full"
                    style={{
                        backgroundImage: `url(${assets.images.main.bg})`,
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
