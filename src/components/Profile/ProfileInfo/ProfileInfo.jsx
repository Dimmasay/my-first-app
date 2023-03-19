import style from "./ProfileInfo.module.css";
import preloader from '../../../files/images/preloader.gif'
import ProfileStatusWithHooks from "../ProfileStatusWithHooks";
import React, {useEffect, useState} from "react";
import ProfileDataForm from "./ProfileDataForm";


const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false)
    useEffect(() => {

    }, [props.user])
    let goToEditMode = () => {
        setEditMode(true)
    }

    let saveMode = () => {
        setEditMode(false)
    }
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
                        {props.isOwner ? <input type='file' onChange={onAddedPhoto}/> : null}
                    </div>
                </div>
                <div className={style.body}>
                    {editMode
                        ? <ProfileDataForm user={props.user} saveMode={saveMode} isOwner={props.isOwner} updateProfileTC={props.updateProfileTC} id={props.id}/>
                        : <ProfileData user={props.user} goToEditMode={goToEditMode} isOwner={props.isOwner}/>}
                    <ProfileStatusWithHooks status={props.status} updateStatusTC={props.updateStatusTC}/>
                </div>
            </div>
        </div>
    );

};

const ProfileData = (props) => {
    return (
        <div>
            <div className={style.editMode}>
                {props.isOwner && <button onClick={props.goToEditMode} type='button'>Edit</button>}
            </div>
            <div className={style.name}>{props.user.fullName}</div>
            <div className={style.list}>
                <div className={style.job}>
                    <b className={style.jobName}>About Me:</b>
                    <div className={style.jobValue}>{props.user.aboutMe}</div>
                </div>
                <div className={style.job}>
                    <b className={style.jobName}>looking Job:</b>
                    <div className={style.jobValue}>{props.user.lookingForAJob ? 'Yes' : 'No'}</div>
                </div>
                <div className={style.job}>
                    <b className={style.jobName}>looking Job Description:</b>
                    <div className={style.jobValue}>{props.user.lookingForAJobDescription}</div>
                </div>
                <div className={style.contacts}>
                    <b>Contacts:</b>{
                    Object.keys(props.user.contacts).map(key => {
                        return <Contacts key={key} contactsTitle={key} contactsValue={props.user.contacts[key]}/>
                    })
                }
                </div>
            </div>
        </div>
    )
}
const Contacts = (props) => {
    return <div>
        <b>{props.contactsTitle}</b>:{props.contactsValue}
    </div>
}
export default ProfileInfo;
