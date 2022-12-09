import React from "react";
import './style.css';

import Tool from '../../../assets/account/tool.svg';

export default function Setting(){

    return <>
        <div className="container-setting">
            <div className="body-setting">
                <p className="title-setting"><img src={Tool} className='img-setting' /> CONFIGURAÇÕES </p>
            </div>
            <div className="info-setting">
                <p className="info-setting"><a href="#">Desativar transferência de usuário</a> </p>
                <p className="info-setting"><a href="#">Participação em testes</a></p>
                <p className="info-setting"><a href="#">Gerenciar aparelhos de Download</a></p>
            </div>
        </div>
        <p></p>
    </>
}