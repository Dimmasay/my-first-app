import Posts from "./Posts/Posts";
import profile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={profile.profile__wrapper}>
            <ProfileInfo/>
            <Posts posts={props.postsData.posts}
                   newPostText={props.postsData.newPostText}
                   dispatch={props.dispatch}
            />
        </div>
    );
};

export default Profile;
