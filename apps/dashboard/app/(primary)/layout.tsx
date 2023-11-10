// primary view, it contains logo and left panel. It defines 
// what to see in the first {children} 
// first children contain central and right panel.
// in the central panel we will see another children defined by tabs
import { ButtonList, ProfileCard } from 'components';
import Link from 'next/link';
import React from 'react';
import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <body>
      <div className="primary-page">
        <div className="primary-page__grid">
          <div className="left-navbar">
            <div className="left-navbar__logo">
              Logo
            </div>
            <ButtonList>
              <Link href="/">
                <ButtonList.Button>
                  <i className="fas fa-home left-navbar__icon"></i>
                  <span className="left-navbar__label">Home</span>
                </ButtonList.Button>
              </Link>
              <Link href="/settings">
                <ButtonList.Button>
                  <i className="fas fa-cog left-navbar__icon"></i>
                  <span className="left-navbar__label">Settings</span>
                </ButtonList.Button>
              </Link>
            </ButtonList>
            <ProfileCard name="John Doe" bio="Software Engineer" imgSrc="https://loremflickr.com/40/40" />
          </div>
          {children}
        </div>
      </div>
    </body>
  )
}
