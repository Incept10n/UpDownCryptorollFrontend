import { useState } from "react";
import PasswordChangeDummy from "../PasswordChangeDummy";
import PasswordChangeForm from "../PasswordChangeForm";

const PasswordInputFieldUnderlined = () => {
    const [isEditing, setIsEditing] = useState(false);

    return (
        <div className="flex flex-col relative">
            {isEditing ? (
                <PasswordChangeForm setIsEditing={setIsEditing} />
            ) : (
                <PasswordChangeDummy
                    handleOnClickEdit={() => setIsEditing(true)}
                />
            )}
        </div>
    );
};

export default PasswordInputFieldUnderlined;
