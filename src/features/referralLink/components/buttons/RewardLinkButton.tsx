import { useContext } from "react";
import { assets } from "../../../../imagesImports/assets";
import { ProfileContext } from "../../../../context/ProfileContext";
import { ProfilePageType } from "../../../../types/HelperTypes";
import { useNavigate } from "react-router-dom";

const RewardLinkButton = () => {
    const profContext = useContext(ProfileContext);
    const navigate = useNavigate();

    const handleOnClick = () => {
        if (profContext) {
            profContext.setCurrentProfilePage(ProfilePageType.Rewards);
        } else {
            navigate("/profile?page=rewards");
        }
    };

    return (
        <button
            className="md:w-[26px] md:h-[24px] w-[17px] h-[16px] 
                       bg-[#4c508c] bg-opacity-[0.33] 
                       rounded-[6px] flex justify-center items-center
                       active:scale-[1.05] transition-all duration-[0.1s] ease-in-out"
            onClick={handleOnClick}
        >
            <img
                src={assets.icons.return}
                alt="return icon"
                className="md:w-[18px] md:h-[19px] w-[12px] h-[12px]"
            />
        </button>
    );
};

export default RewardLinkButton;
