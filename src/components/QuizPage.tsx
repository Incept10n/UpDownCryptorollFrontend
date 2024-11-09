import { useContext, useEffect } from "react";
import { ApplicationContext, GameCoice } from "../context/ApplicationContext";
import HomeBgGradient from "./home/homeComponents/HomeBgGradient";
import UpDownText from "./rules/rulesComponents/UpDownText";
import FollowUsFooter from "./rules/rulesComponents/FollowUsFooter";
import { QuizForm } from "../features/quiz";

const QuizPage = () => {
    const { setCurrentGame } = useContext(ApplicationContext)!;

    useEffect(() => {
        setCurrentGame(GameCoice.None);
    }, []);

    return (
        <div>
            <HomeBgGradient />
            <UpDownText displayPlayNowButton={false} />
            <QuizForm />
            <FollowUsFooter />
        </div>
    );
};

export default QuizPage;
