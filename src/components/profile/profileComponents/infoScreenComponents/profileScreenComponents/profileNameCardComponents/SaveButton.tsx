import { useTranslation } from "react-i18next";

const SaveButton = ({
    width,
    height,
    handleOnClick,
    fontSize,
}: {
    width: string;
    height: string;
    fontSize: string;
    handleOnClick: () => void;
}) => {
    const { t } = useTranslation();

    return (
        <button
            onClick={handleOnClick}
            className="border-[1px] border-[#ccc3c3] rounded-[5px]
                       font-semibold text-[#ccc3c3] flex-none"
            style={{
                width,
                height,
                fontSize,
            }}
        >
            {t("saveChanges")}
        </button>
    );
};

export default SaveButton;
