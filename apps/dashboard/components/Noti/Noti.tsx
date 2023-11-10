'use client';
import React, { useEffect } from 'react';
import { Capacitor } from '@capacitor/core';
import  { LocalNotifications } from '@capacitor/local-notifications';


const Noti = () => {
  useEffect(() => {
    console.log('hola')
    console.log(Capacitor.isNativePlatform() ? 'native' : 'notNative')
    LocalNotifications.requestPermissions().then((rrr) => console.log({rrr})).catch(console.log)
      LocalNotifications.schedule({
        notifications: [
          {
            title: "Title title title",
            body: "Body body body body",
            id: Math.floor(Math.random() * 6000000),
            schedule: { at: new Date(Date.now() + 1000 * 5) },
            sound: 'beep.wav',
            // attachments: null,
            actionTypeId: "",
            extra: null,
            
          }
        ]
      });
      LocalNotifications.schedule({
        notifications: [
          {
            title: "Title title title",
            body: "Body body body body",
            id: Math.floor(Math.random() * 6000000),
            schedule: { at: new Date(Date.now() + 1000 * 60) },
            sound: 'beep.wav',
            // attachments: null,
            actionTypeId: "",
            extra: null,
            
          }
        ]
      });
    }
    
  , []);
	return (
		<div>
			hola mudo Noti
		</div>
	);
};


export default Noti;
