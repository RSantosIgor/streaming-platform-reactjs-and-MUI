import React from "react";
import './style.css';

import Filme from '../../../assets/account/film.svg';
import Setting from '../../../assets/account/settings.svg';

export default function Top() {

    return <>
        <div className='top'>
            <div className='account-logo'>
                <img src={Setting} className='img-setting mx-2' />
                <p className='title'>Conta </p>
            </div>
            <div>
                <p className='sub-title'>
                    <img src={Filme} className='logo-filme' />
                    Assistindo desde o dia 21 Fev. 2000
                </p>
            </div>
        </div>
    </>
}