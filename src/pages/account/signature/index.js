import React from 'react';
import './style.css';

import Edit from '../../../assets/account/edit.svg';
import Film from '../../../assets/account/credit-card.svg';
import Users from '../../../assets/account/users.svg';
import IconSignature from '../../../assets/account/edit-3.svg';

export default function Signature() {

    return <>
        <div className='top-signature'>
            <p className='title-h1'><img src={IconSignature} className='img-signature' />ASSINATURA E COBRANÇAS</p>
        </div>
        <div className='container'>
            <div className='email'>
                <div className='area-view'>
                    <img src={Users} className='img-film' /> <p className='title-signature'>DADOS PESSOAIS</p>
                </div>
                <div className='view'>
                    <div className='part'>
                        <p className='title-signature'>Email</p>
                        <p className='subtitle-signature'><img src={Edit} className='edit' /><a href="#" className='link'>fernando@edu.br</a></p>
                    </div>
                    <div className='part'>
                        <p className='title-signature'>Senha</p>
                        <p className='subtitle-signature'><img src={Edit} className='edit' /><a href="#" className='link'>******</a></p>
                    </div>
                    <div className='part'>
                        <p className='title-signature'>Telefone</p>
                        <p className='subtitle-signature'><img src={Edit} className='edit' /><a href="#" className='link'>62 3322-5236</a></p>
                    </div>
                </div>
            </div>
            <div className='card'>
                <div className='view-2'>
                    <div className='area-view-2'>
                        <img src={Film} className='img-film' /> <p className='title-signature'>**** **** **** **** 2023</p>
                    </div>
                    <p className='notification'>Fatura de cobrança para 18 Jan. 2023</p>
                    <ul>
                        <li>
                            <a href="#" className='link'> Alterar data de cobrança</a>
                        </li>
                        <li>
                            <a href="#" className='link'> Forma de pagamento alternativa</a>
                        </li>
                        <li>
                            <a href="#" className='link'> Detalhes da cobrança</a>
                        </li>
                        <li>
                            <a href="#" className='link'> Cancelar a Assinatura</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}