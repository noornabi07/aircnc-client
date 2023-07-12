import React, { useContext } from 'react';
import avatar from '../../../assets/images/download.png'
import { AuthContext } from '../../../Providers/AuthProvider';

const Avatar = () => {
    const {user} = useContext(AuthContext)
    return <img className='rounded-full' src={user && user.photoURL ? user.photoURL : avatar} alt="profile" width="30" height="30" />
};

export default Avatar;