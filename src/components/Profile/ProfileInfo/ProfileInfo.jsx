import style from "./ProfileInfo.module.css";
import preloader from '../../../files/images/preloader.gif'
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import {useEffect} from "react";
import {updatePhotoTC} from "../../../redux/reducerProfile";

const ProfileInfo = (props) => {
    let currentIdNumber = parseInt(props.currentIdProfile)

    const onAddedPhoto = (e) => {
        props.updatePhotoTC(e.currentTarget.files[0])
    }

    if (!props.user) {
        return (
            <div className={style.preloader}>
                <img src={preloader} className={style.preloaderImg}/>
            </div>
        )
    }
    return (
        <div className={style.profileInfo}>
            <div className={style.banner}>
                <div className={style.bannerImg}>
                    <img src={"https://cdn.pixabay.com/photo/2013/10/09/02/27/lake-192990__340.jpg"}></img>
                </div>
            </div>
            <div className={style.person}>
                <div className={style.avatar}>
                    <div className={style.photo}>
                        <img
                            src={props.user.photos.small || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU"'}/>
                    </div>
                    <div className={style.photoInput}>
                        {props.id === currentIdNumber ? <input type='file' onChange={onAddedPhoto}/> : null}
                    </div>
                </div>
                <div className={style.body}>
                    <div className={style.name}>{props.user.fullName}</div>
                    <ProfileStatusWithHooks status={props.status} updateStatusTC={props.updateStatusTC}/>
                    <div className={style.list}>
                        <div className={style.about}>
                            <div className={style.aboutName}>About Me:</div>
                            <div className={style.aboutValue}>{props.user.aboutMe}</div>
                        </div>
                        <div className={style.job}>
                            <div className={style.jobName}>looking Job:</div>
                            <div className={style.jobValue}>{props.user.lookingForAJob ?'Yes' :'No'}</div>
                        </div>
                        <div className={style.contacts}>
                            <div className={style.contactsSite}>
                                <div className={style.siteName}>Web Site:</div>
                                <a className={style.siteValue} href="#">{props.user.contacts.website ?props.user.contacts.website :'...'} </a>
                            </div>
                            <div className={style.contactsInstagram}>
                                <div className={style.siteName}>Instagram:</div>
                                <a className={style.siteValue} href="#">{props.user.contacts.instagram ?props.user.contacts.instagram :'...'}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
