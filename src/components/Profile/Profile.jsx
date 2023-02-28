import profile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {updateStatusTC} from "../../redux/reducerProfile";

const Profile = (props) => {

    return (
        <div className={profile.profile__wrapper}>
            <ProfileInfo user={props.user} status={props.status} updateStatusTC={props.updateStatusTC}/>
            <PostsContainer />
        </div>
    );
};

export default Profile;
