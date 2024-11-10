import { useTranslation } from "react-i18next";
import { QuestionBlockInfo } from "../../types/interfaces";
import { fetchCheckQuiz } from "../../services/fetchFuncions";
import { getCurrentUsername } from "../../../../helperFunctions/jwtTokenFuncions";

const CheckQuizButton = ({ quizData }: { quizData: QuestionBlockInfo[] }) => {
    const { t } = useTranslation();

    const handleOnClick = async () => {
        fetchCheckQuiz(quizData, getCurrentUsername()!);
    };

    return (
        <button
            className="border-[ccc3c3] border-[1px] rounded-[20px] 
                       px-[40px] py-[10px] mt-[100px] active:scale-[1.1]"
            onClick={handleOnClick}
        >
            <div className="text-[1.8rem] text-white font-semibold">
                {t("checkQuiz")}
            </div>
        </button>
    );
};

export default CheckQuizButton;
