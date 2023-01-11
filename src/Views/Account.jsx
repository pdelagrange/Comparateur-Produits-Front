import {needConnectionRestriction} from "../Utils/AdminPageRestriction";
import AccountComponent from "../Components/Account";
import Header from "../Components/Header";
import Banner from "../Components/Banner";

const Account = () => {
    needConnectionRestriction();
    return (
        <div className="bg-secondary" id='vue'>
            <Header/>
            <Banner section="Compte"/>
            <AccountComponent/>
        </div>
    );
}

export default Account;