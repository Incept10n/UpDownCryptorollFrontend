import { useTranslation } from "react-i18next";
import PageNameHeader from "./text/PageNameHeader";
import MainQuizForm from "./forms/MainQuizForm";

const QuizForm = () => {
    const { t } = useTranslation();

    return (
        <div className="ml-[114px] mt-[153px]">
            <PageNameHeader
                mainText={t("quiz")}
                secondaryText={t("askToGetRewards")}
            />
            <MainQuizForm />
        </div>
    );
};

export default QuizForm;
