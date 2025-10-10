import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-subect-observable',
  templateUrl: './subect-observable.component.html',
  styleUrls: ['./subect-observable.component.scss']
})
export class SubectObservableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let subject = new Subject();
    subject.subscribe((data) => {
      console.log("🚀 ~ subject1 ~ ngOnInit ~ data:", data)
    })
    subject.subscribe((data) => {
      console.log("🚀 ~ subject2 ~ ngOnInit ~ data:", data)
    })
    setTimeout(() => {
      console.log("called")
      subject.subscribe((data) => {
        console.log("🚀 ~ subject3 ~ ngOnInit ~ data:", data)
      })
    }, 1000);

    subject.next(Math.floor(Math.random() * 10));
    subject.next(Math.floor(Math.random() * 10));
    subject.next(Math.floor(Math.random() * 10));

    let observer = new Observable((obs) => {
      obs.next(Math.floor(Math.random() * 10));
      obs.next(Math.floor(Math.random() * 10));
      obs.next(Math.floor(Math.random() * 10));
    })

    observer.subscribe((data) => {
      console.log("🚀 ~ Observable1 ~ ngOnInit ~ data:", data)
    })

    observer.subscribe((data) => {
      console.log("🚀 ~ Observable2 ~ ngOnInit ~ data:", data)
    })
  }

}
