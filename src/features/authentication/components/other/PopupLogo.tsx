import { assets } from "../../../../imagesImports/assets";

const PopupLogo = ({
    widthPx,
    heightPx,
}: {
    widthPx: number;
    heightPx: number;
}) => {
    return (
        <div
            className="bg-[#828383] rounded-full relative"
            style={{
                width: `${widthPx}px`,
                height: `${heightPx}px`,
            }}
        >
            <img
                src={assets.icons.logo}
                alt="logo"
                className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
            />
        </div>
    );
};

export default PopupLogo;
