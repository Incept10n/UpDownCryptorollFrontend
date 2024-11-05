import { ReactNode, useState } from "react";
import {
    PasswordValidationResult,
    UsernameValidationResult,
} from "../../types/enums";
import { UserChangeInfoContext } from "../../context/UserChangeInfoContext";

const UserChangeInfoContextProvider = ({
    children,
}: {
    children: ReactNode;
}) => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [walletAddress, setWalletAddress] = useState("");
    const [usernameValidationErrors, setUsernameValidationErrors] = useState(
        UsernameValidationResult.Success,
    );
    const [passwordValidationErrors, setPasswordValidationErrors] = useState(
        PasswordValidationResult.Success,
    );
    const [isLoading, setIsLoading] = useState(false);

    return (
        <UserChangeInfoContext.Provider
            value={{
                username,
                password,
                usernameValidationErrors,
                setUsernameValidationErrors,
                passwordValidationErrors,
                setPasswordValidationErrors,
                isLoading,
                setIsLoading,
                walletAddress,
                setUsername,
                setPassword,
                setWalletAddress,
            }}
        >
            {children}
        </UserChangeInfoContext.Provider>
    );
};

export default UserChangeInfoContextProvider;
