import profile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";



const Profile = (props) => {

    return (
        <div className={profile.profile__wrapper}>
            <ProfileInfo currentIdProfile = {props.currentIdProfile}
                         user={props.user}
                         status={props.status}
                         updateStatusTC={props.updateStatusTC}
                         updatePhotoTC={props.updatePhotoTC}
                         id={props.id}
            />
            <PostsContainer />
        </div>
    );
};

export default Profile;
