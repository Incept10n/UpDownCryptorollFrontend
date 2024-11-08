const AdditionalInfoText = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    return (
        <div
            className={`text-[#a4a4a4] text-[1rem] font-semibold inline-block
                        text-left relative ${className}`}
        >
            {text}
        </div>
    );
};

export default AdditionalInfoText;
