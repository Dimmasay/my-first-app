import Posts from "./Posts/Posts";
import profile from "./Profile.module.css";

const Profile = () => {
  return (
    <div>
      <div className={profile.banner}>
        <div className={profile.banner__image}>
          <img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg"></img>
        </div>
      </div>
      <div className={profile.person}>
        <div className={profile.person__photo}>
          <img src="https://img.freepik.com/premium-vector/beard-man-avatar_96853-399.jpg"></img>
        </div>
        <div className={profile.person__body}>
          <div className={profile.person__name}>Dmytro Kruhliak</div>
          <div className={profile.person__list}>
            <div className={profile.person__date}>
              <div className={profile.person__dateName}>Date of Birth:</div>
              <div className={profile.person__dateValue}>28.05.1994</div>
            </div>
            <div className={profile.person__city}>
              <div className={profile.person__cityName}>City:</div>
              <div className={profile.person__cityValue}>Kyiv</div>
            </div>
            <div className={profile.person__education}>
              <div className={profile.person__educationName}>Education:</div>
              <div className={profile.person__educationValue}>BSU 11</div>
            </div>
            <div className={profile.person__site}>
              <div className={profile.person__siteName}>Web Site:</div>
              <div className={profile.person__siteValue}>
                <a href="https://dimmasay18.com">https://dimmasay18.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
