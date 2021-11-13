import React, { useState } from 'react'
import UserContext from './UserContext'

const UserState = (props) => {
    const [User, setUser] = useState( {
        username: '',
        uid: '',
        password: ''
    })
    const UpdateUsercred = (name, uid, pass) => {
        setUser({
            username: name,
            uid: uid,
            password: pass
        })
    }
    return (
        <UserContext.Provider value={{ User, UpdateUsercred }}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserState;