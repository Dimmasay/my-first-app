import profile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {
    return (
        <div className={profile.profile__wrapper}>
            <ProfileInfo/>
            <PostsContainer />
        </div>
    );
};

export default Profile;
