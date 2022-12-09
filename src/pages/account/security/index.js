import React from "react";

import './style.css';
import Shield from '../../../assets/account/shield.svg';

export default function Security() {

    return <>
        <div className="top-security">
            <p className="title-h1-security"><img src={Shield} className='img-shield'/>SEGURANÇA E PRIVACIDADE</p>
        </div>
        <div className="container-security">
            <div className="view-security">
                Controle o acesso à esta conta, veja os aparelhos ativos mais recentemente e muito mais.
            </div>
            <div className="view-security-2">
                <a href='#' className="link-security"><p>Gerenciar Acessos e Aparelhos</p></a>
                <a href='#' className="link-security"><p>Sait da conta Netflix de todos os aparelhos</p></a>
                <a href='#' className="link-security"><p>Baixe suas informações pessoais</p></a>
            </div>
        </div>
    </>
}