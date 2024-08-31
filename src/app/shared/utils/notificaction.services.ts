// notification.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  requestPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        console.log(permission)
        if (permission === 'granted') {
          console.log('Notification permission granted.');
        } else {
          console.log('Notification permission denied.');
        }
      });
    } else {
      console.log('Notifications are not supported by this browser.');
    }
  }

  showNotification(title: string, options: NotificationOptions) {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, options);
    } else {
      console.log('Notification permission not granted or notifications are not supported.');
    }
  }
}
