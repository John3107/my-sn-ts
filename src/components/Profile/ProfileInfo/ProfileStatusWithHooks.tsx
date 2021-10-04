import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void

}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const activateEditMode = () => {
        setEditMode(true)
    }

    const diActivateEditMode = () => {
        props.updateStatus(status)
        setEditMode(false)
    }

        return (
            <div>
                {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Where is status???'}</span>
                </div>
                }
                {editMode &&
                <div>
                    <input autoFocus
                           onBlur={diActivateEditMode}
                           value={status}
                           onChange={onStatusChange}
                    />
                </div>
                }
            </div>
        )
    }


export default ProfileStatusWithHooks;