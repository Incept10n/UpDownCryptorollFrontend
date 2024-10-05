const HeaderItem = ({
    text,
    className,
}: {
    text: string;
    className?: string;
}) => {
    return (
        <div
            className={`text-[1em] xl:text-[1.5em] font-semibold upDownTextWhite border-[1px]
                        flex justify-center items-center
                        border-[#ccc3c3] rounded-[10px] ${className}`}
        >
            {text}
        </div>
    );
};

export default HeaderItem;
