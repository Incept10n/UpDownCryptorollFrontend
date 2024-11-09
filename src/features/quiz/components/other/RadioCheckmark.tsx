const RadioCheckmark = ({
    isChecked,
    className,
}: {
    isChecked: boolean;
    className?: string;
}) => {
    return (
        <div
            className={`bg-[#d9d9d9] rounded-full flex justify-center items-center 
                         ${className}`}
        >
            {isChecked && (
                <div className="bg-[#282828] w-[66%] h-[66%] rounded-full"></div>
            )}
        </div>
    );
};

export default RadioCheckmark;
