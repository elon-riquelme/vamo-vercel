'use client'
import Link from 'next/link';
import './settings.scss'
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import { MobileNavbar, PanelHeader } from 'components';

const Settings = ({ children }: PropsWithChildren) => {
  const pathName = usePathname();
  return (
    <>
      <div className="main-view">
        <PanelHeader
          className="p-2"
          mainSlot={'Settings'}
          leftSlot={<img src="https://loremflickr.com/40/40" alt="User Profile Image" className="profile-image profile-header__image" />}
        />
        <main className="main-content" >
          <div className='items-list-item'>
            <Link href="/settings/account" className={classNames('items-list-item__link', {
              'items-list-item_selected': pathName === '/settings/account'
            })}>
              <PanelHeader
                className='p-3 text-xl'
                mainSlot={'Profile'}
                rightSlot={<i className="fas fa-angle-right"></i>}
              />
            </Link>
          </div>
          <div className='items-list-item'>

            <Link href="/settings" className={classNames('items-list-item__link', {
              'items-list-item_selected': pathName === '/settings'
            })}>
              <PanelHeader
                className='p-3 text-xl'
                mainSlot={'Settings'}
                rightSlot={<i className="fas fa-angle-right"></i>}
              />
            </Link>
          </div>
          <div className='items-list-item'>
            <Link href="/settings/languages" className={classNames('items-list-item__link', {
              'items-list-item_selected': pathName === '/settings/languages'
            })}>
              <PanelHeader
                className='p-3 text-xl'
                mainSlot={'Languages'}
                rightSlot={<i className="fas fa-angle-right"></i>}
              />
            </Link>
          </div>
        </main>
        <MobileNavbar>
          {['A', 'B', 'C', 'E'].map((content) => {
            return <MobileNavbar.Button key={content}>{content}</MobileNavbar.Button>
          })}
        </MobileNavbar>
      </div>
      <div className="side-content">
        {children}
      </div>
    </>
  );
};

export default Settings;
