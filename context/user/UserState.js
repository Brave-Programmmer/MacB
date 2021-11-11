import React, { useState } from 'react'
import UserContext from './UserContext'

const UserState = (props) => {
    const myvar = {
        username: '',
        uid: '',
        password: ''
    }
    const [User, setUser] = useState(myvar)

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