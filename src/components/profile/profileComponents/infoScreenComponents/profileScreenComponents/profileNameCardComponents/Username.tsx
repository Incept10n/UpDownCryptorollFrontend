import { ChangeEvent, KeyboardEvent } from "react";

const Username = ({
    isEditing,
    userName,
    handleOnChange,
    handleKeyDown,
}: {
    isEditing: boolean;
    userName: string;
    handleOnChange: (ev: ChangeEvent<HTMLInputElement>) => void;
    handleKeyDown: (ev: KeyboardEvent<HTMLInputElement>) => void;
}) => {
    return (
        <div>
            {!isEditing ? (
                <div className="upDownTextWhite lg:text-[30px] text-[16px]">
                    {userName}
                </div>
            ) : (
                <div className="flex flex-col">
                    <input
                        className="upDownTextWhite lg:text-[30px] text-[16px]
                                   bg-transparent outline-none lg:w-[200px] w-[80px]"
                        value={userName}
                        onChange={handleOnChange}
                        onKeyDown={handleKeyDown}
                        maxLength={13}
                    />
                    <div className="w-full h-[1px] bg-[#ccc3c3]"></div>
                </div>
            )}
        </div>
    );
};

export default Username;
