import { useTranslation } from "react-i18next";
import { assets } from "../../../../../../imagesImports/assets";

const ProfilePicture = ({ isEditing }: { isEditing: boolean }) => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center">
            <img
                src={assets.icons.profilePicture}
                alt="profile picture"
                className={`
                            ${
                                isEditing
                                    ? "lg:w-[110px] lg:h-[110px] w-[32px] h-[32px] flex-none"
                                    : "lg:w-[138px] lg:h-[138px] w-[40px] h-[40px] flex-none"
                            }`}
            />
            {isEditing && (
                <div
                    className="text-[#ccc3c3] text-opacity-[50%] text-[14px] 
                                   text-center underline font-light max-w-[166px] 
                                   min-[1560px]:block hidden"
                >
                    {t("changingPfp")}
                </div>
            )}
        </div>
    );
};

export default ProfilePicture;
