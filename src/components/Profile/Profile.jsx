import profile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    debugger
    return (
        <div className={profile.profile__wrapper}>
            <ProfileInfo user={props.user}/>
            <PostsContainer />
        </div>
    );
};

export default Profile;
