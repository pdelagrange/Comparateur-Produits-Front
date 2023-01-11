import {needConnectionRestriction} from "../Utils/AdminPageRestriction";

const Account = () => {
    needConnectionRestriction();
    return (
        <div id='vue'>
        </div>
    );
}

export default Account;