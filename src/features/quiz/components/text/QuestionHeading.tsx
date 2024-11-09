const QuestionHeading = ({ text, num }: { text: string; num: number }) => {
    return (
        <h1
            className="text-[2rem] upDownTextWhite font-semibold max-w-[991px]
                       flex justify-start space-x-[1rem]"
        >
            <div>{num}.</div>
            <div>{text}</div>
        </h1>
    );
};

export default QuestionHeading;
