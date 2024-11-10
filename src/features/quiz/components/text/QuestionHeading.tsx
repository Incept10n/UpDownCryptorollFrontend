const QuestionHeading = ({ text, num }: { text: string; num: number }) => {
    return (
        <h1
            className="md:text-[2rem] text-[1.25rem] 
                       upDownTextWhite font-semibold md:max-w-[991px] max-w-[400px]
                       flex justify-start space-x-[1rem]"
        >
            <div>{num}.</div>
            <div>{text}</div>
        </h1>
    );
};

export default QuestionHeading;
