import { User } from "../../../../../../types/User";
import ProfilePicture from "./ProfilePicture";
import UsernameInputField from "./UsernameInputField";

const UsernamePasswordForm = ({ user }: { user: User }) => {
    return (
        <div className="flex">
            <ProfilePicture />
            <div className="ml-[38px]">
                <UsernameInputField user={user} />
            </div>
        </div>
    );
};

export default UsernamePasswordForm;
