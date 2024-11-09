import { useTranslation } from "react-i18next";
import QuestionBlock from "./QuestionBlock";

const MainQuizForm = () => {
    const { t } = useTranslation();

    return (
        <div>
            <QuestionBlock
                questionNumber={1}
                headingText={t("question1")}
                questions={[
                    t("question1Answer1"),
                    t("question1Answer2"),
                    t("question1Answer3"),
                    t("question1Answer4"),
                ]}
            />
            <QuestionBlock
                questionNumber={2}
                headingText={t("question2")}
                questions={[
                    t("question2Answer1"),
                    t("question2Answer2"),
                    t("question2Answer3"),
                    t("question2Answer4"),
                    t("question2Answer5"),
                ]}
            />
            <QuestionBlock
                questionNumber={3}
                headingText={t("question3")}
                questions={[
                    t("question3Answer1"),
                    t("question3Answer2"),
                    t("question3Answer3"),
                    t("question3Answer4"),
                ]}
            />
            <QuestionBlock
                questionNumber={4}
                headingText={t("question4")}
                questions={[
                    t("question4Answer1"),
                    t("question4Answer2"),
                    t("question4Answer3"),
                    t("question4Answer4"),
                ]}
            />
            <QuestionBlock
                questionNumber={5}
                headingText={t("question5")}
                questions={[
                    t("question5Answer1"),
                    t("question5Answer2"),
                    t("question5Answer3"),
                ]}
            />
        </div>
    );
};

export default MainQuizForm;
