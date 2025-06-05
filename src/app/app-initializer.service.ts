import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitializerService {

  constructor() { }

  loadConfig() {
    // here you have to perform operation (before this operation done, app will not loads)
    // app will load after 5 second, you must have to return Promise or Observable
    return new Promise((res, rej) => {
      setTimeout(() => {
        res({});
      }, 2000);
    })
  }
}
