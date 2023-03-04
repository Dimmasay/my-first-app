import React, {useEffect, useState} from "react";
import style from './Profile.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    }, [props.status])
    const activeMode = () => {setEditMode(true)}
    const deActiveMode = () => {
        setEditMode(false)
        props.updateStatusTC(status)
    }
    const onChangeText = (e) => {setStatus(e.currentTarget.value)}

    return (
        <div className={style.statusBlock}>
            <div className={style.blockText}>
                {!editMode && <div onDoubleClick={activeMode}>{props.status || 'Add your status'}</div>}
            </div>
            <div className={style.blockInput}>
                {editMode && <input autoFocus={true} onBlur={deActiveMode} onChange={onChangeText} value={status}/>}
            </div>
        </div>
    )

}

export default ProfileStatusWithHooks;
