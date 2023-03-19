import profile from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {updateProfileTC} from "../../redux/reducerProfile";



const Profile = (props) => {

    return (
        <div className={profile.profile__wrapper}>
            <ProfileInfo isOwner = {props.isOwner}
                         user={props.user}
                         status={props.status}
                         id={props.id}
                         updateStatusTC={props.updateStatusTC}
                         updatePhotoTC={props.updatePhotoTC}
                         updateProfileTC={props.updateProfileTC}
            />
            <PostsContainer />
        </div>
    );
};

export default Profile;
