import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  serviceName: Subject<string> = new Subject<string>();

  constructor() { }

  setServiceName(name: string) {
    this.serviceName.next(name);
  }

}
