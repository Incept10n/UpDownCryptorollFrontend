import { useTranslation } from "react-i18next";
import { assets } from "../../../../../../imagesImports/assets";
import { Dispatch, SetStateAction } from "react";

const EditButton = ({
    setIsEditing,
    isLoading,
}: {
    setIsEditing: Dispatch<SetStateAction<boolean>>;
    isLoading: boolean;
}) => {
    const { t } = useTranslation();

    return (
        <button
            className={`w-[98px] lg:h-[40px] h-[30px] 
                       ${isLoading && "pointer-events-none opacity-60"}
                       lg:rounded-[10px] rounded-full 
                       border-[1px] border-[#999999]
                       flex lg:justify-center justify-around items-center
                       hover:scale-[1.1] scale-[1]
                       transition-all duration-[0.1s] ease-in-out`}
            onClick={() => setIsEditing(true)}
        >
            <div className="upDownTextWhite lg:text-[23px] text-[16px]">
                {t("edit")}
            </div>
            <img
                src={assets.icons.pencil}
                alt="pencil"
                className="ml-[9px] lg:w-auto lg:h-auto w-[20px] h-[20px]"
            />
        </button>
    );
};

export default EditButton;
