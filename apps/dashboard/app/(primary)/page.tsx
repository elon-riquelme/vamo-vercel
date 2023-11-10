"use client"
import {MobileNavbar, PanelHeader, Tabs} from 'components'
import Link from 'next/link';
import { Capacitor } from '@capacitor/core';
import React from 'react';
import Noti from '../../components/Noti/Noti';

function createInternalLink({href, active, text}: {href: string, active: boolean, text: string}) {
  return <Link
    href={href || '#'}
    className={active ? 'tab tab--active' : 'tab'}
  >
    {text}
  </Link>
}

const tabsCfg = [
  {id: 1, text: 'Tab 1'},
  {id: 2, text: 'Tab 2'},
  {id: 3, text: 'Tab 5', active: true}
];

const Home = () => {
  return (
    <>
      <div className="main-view">
        <PanelHeader 
          mainSlot={'Hola'}
          leftSlot={<img src="https://loremflickr.com/40/40" alt="User Profile Image" className="profile-image profile-header__image" />}
        />
        <Tabs  tabs={tabsCfg} createInternalLink={createInternalLink} />
        <main className="main-content">        
          {Capacitor.isNativePlatform() ? 'native' : 'notNative'}
          <Noti/>
        </main>
        <MobileNavbar>
          {['A', 'B', 'C', 'E'].map((content) => {
            return <MobileNavbar.Button key={content}>{content}</MobileNavbar.Button>
          })}
        </MobileNavbar>
      </div>
      <div className="side-content">
        side
      </div>
    </>
  ) 
};

export default Home;
