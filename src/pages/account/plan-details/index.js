import React from "react";
import './style.css';

import Info from '../../../assets/account/info.svg';
import Edit from '../../../assets/account/edit-red.svg';

export default function PlanDetails() {

    return <>
        <div className="body-plan-datails">
            <p className="title-h1-details"><img src={Info} className='img-info-plan-details'/> DETALHES DO PLANO </p>
            <div className="view-plan-details">
                <p className="title-plan-datails">Tipo de Plano:</p>
                <a href="#" className='link-plan-details'><p className="subtitle-plan-details"><img src={Edit} className='img-edit-plan-details' />Padrão</p> </a>
            </div>
        </div>
    </>
}