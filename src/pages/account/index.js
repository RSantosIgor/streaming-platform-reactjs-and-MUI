import React from "react";
import './style.css';

import Top from './top/index';
import Signature  from '../account/signature';
import PlanDetails from "./plan-details";
import Security from "./security";
import Profile from "./profile";
import Settings from "./settings";

export default function Account() {

    return <>
        <div className="container-account">
            <div className='main'>
                <header className="App-header">
                    <Top />
                    <Signature />
                    <PlanDetails />
                    <Security />
                    <Profile />
                    <Settings />
                </header>
            </div>
        </div>
    </>
}