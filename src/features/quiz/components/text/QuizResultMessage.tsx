import { useTranslation } from "react-i18next";
import { QuizButtonState } from "../../types/enums";

const QuizResultMessage = ({
    buttonState,
}: {
    buttonState: QuizButtonState;
}) => {
    const { t } = useTranslation();

    const getTextBasedOnButtonText = () => {
        switch (buttonState) {
            case QuizButtonState.CheckQuiz:
                return "";
            case QuizButtonState.Checking:
                return "";
            case QuizButtonState.YouHaveMistakes:
                return t("youHaveMistakes");
            case QuizButtonState.AllAnswersCorrect:
                return t("allAnswersCorrect");
        }
    };

    return (
        <div
            className={`${
                buttonState === QuizButtonState.YouHaveMistakes
                    ? "text-[#d45353]"
                    : buttonState === QuizButtonState.AllAnswersCorrect
                      ? "text-[#4daf63]"
                      : "text-transparent"
            } md:text-[1.6rem] text-[1rem] text-center font-semibold`}
        >
            {getTextBasedOnButtonText()}
        </div>
    );
};

export default QuizResultMessage;
