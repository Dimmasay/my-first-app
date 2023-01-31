import Posts from "./Posts/Posts";
import profile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={profile.profile__wrapper}>
            <ProfileInfo/>
            <Posts/>
        </div>
    );
};

export default Profile;
