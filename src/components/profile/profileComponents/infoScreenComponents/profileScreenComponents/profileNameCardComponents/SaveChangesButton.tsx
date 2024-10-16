import { useTranslation } from "react-i18next";

const SaveChangesButton = ({
    handleSaveChanges,
}: {
    handleSaveChanges: () => void;
}) => {
    const { t } = useTranslation();

    return (
        <button
            className="px-[19px] lg:rounded-[20px] rounded-full 
                       border-[1px] border-[#999999]
                       flex justify-center items-center
                       hover:scale-[1.1] scale-[1]
                       transition-all duration-[0.1s] ease-in-out"
            onClick={handleSaveChanges}
        >
            <div className="upDownTextWhite lg:text-[23px] text-[16px]">
                {t("saveChanges")}
            </div>
        </button>
    );
};

export default SaveChangesButton;
