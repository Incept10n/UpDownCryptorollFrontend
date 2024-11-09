import RadioCheckmark from "../other/RadioCheckmark";

const QuestionAnswerOption = ({ text }: { text: string }) => {
    return (
        <div className="flex justify-start items-start space-x-[24px] hover:cursor-pointer">
            <RadioCheckmark
                isChecked={false}
                className="w-[26px] h-[26px] flex-none mt-[5px]"
            />
            <div className="upDownTextWhite text-[1.5rem] font-semibold">
                {text}
            </div>
        </div>
    );
};

export default QuestionAnswerOption;
