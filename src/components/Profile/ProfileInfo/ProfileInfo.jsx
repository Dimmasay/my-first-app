
import profileInfo from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={profileInfo.profileInfo}>
            <div className={profileInfo.banner}>
                <div className={profileInfo.banner__image}>
                    <img src="https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg"></img>
                </div>
            </div>
            <div className={profileInfo.person}>
                <div className={profileInfo.person__photo}>
                    <img src="https://img.freepik.com/premium-vector/beard-man-avatar_96853-399.jpg"></img>
                </div>
                <div className={profileInfo.person__body}>
                    <div className={profileInfo.person__name}>Dmytro Kruhliak</div>
                    <div className={profileInfo.person__list}>
                        <div className={profileInfo.person__date}>
                            <div className={profileInfo.person__dateName}>Date of Birth:</div>
                            <div className={profileInfo.person__dateValue}>28.05.1994</div>
                        </div>
                        <div className={profileInfo.person__city}>
                            <div className={profileInfo.person__cityName}>City:</div>
                            <div className={profileInfo.person__cityValue}>Kyiv</div>
                        </div>
                        <div className={profileInfo.person__education}>
                            <div className={profileInfo.person__educationName}>Education:</div>
                            <div className={profileInfo.person__educationValue}>BSU 11</div>
                        </div>
                        <div className={profileInfo.person__site}>
                            <div className={profileInfo.person__siteName}>Web Site:</div>
                            <div className={profileInfo.person__siteValue}>
                                <a href="https://dimmasay18.com">https://dimmasay18.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default ProfileInfo;
