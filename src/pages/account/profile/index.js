import React from "react";
import './style.css';

import USER from '../../../assets/account/user-plus.svg';
import User from '../../../assets/account/user.svg';
import EditProfile from '../../../assets/account/chevron-down.svg';

export default function Profile() {

    return <>
        <div className="container-profile">
            <p className="title-h1-profile"><img src={USER} className="img-user" /> PERFIL E CONTROLE PARENTAL</p>
            <div className="body-profile">
                <div className="user-profile">
                    <p className="title-user-name"><img src={User} className='img-user-profile' /> Fernando Furtado</p>
                    <a href="#" className='img-edit-profile'><img src={EditProfile} className='img-edit-profile' /></a>
                </div>
                <div className="user-profile">
                    <p className="title-user-name"> <img src={User} className='img-user-profile' /> Igor Santos</p>
                    <a href="#" className='img-edit-profile'><img src={EditProfile} className='img-edit-profile' /></a>
                </div>
                <div className="user-profile">
                    <p className="title-user-name"> <img src={User} className='img-user-profile' /> Mariana Mérida</p>
                    <a href="#" className='img-edit-profile'><img src={EditProfile} className='img-edit-profile' /></a>
                </div>
                <div className="user-profile">
                    <p className="title-user-name"> <img src={User} className='img-user-profile' />Bianca Sudário</p>
                    <a href="#" className='img-edit-profile'><img src={EditProfile} className='img-edit-profile' />  </a>
                </div>
            </div>
        </div>
    </>
}