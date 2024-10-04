const TextWithUnderlineInfo = ({
    text,
    underlineInfo,
}: {
    text: string;
    underlineInfo: string;
}) => {
    return (
        <>
            <h2 className="upDownTextWhite font-semibold text-[26px] mb-[-5px]">
                {text}
            </h2>
            <span className="UpDownGrayText text-[0.9rem] underline font-light">
                {underlineInfo}
            </span>
        </>
    );
};

export default TextWithUnderlineInfo;
