import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-child-default',
    templateUrl: './child-default.component.html',
})
export class ChildDefaultComponent {
    @Input() count!: number;

    logCheck() {
        console.log('%cChild Default checked', 'color: blue');
        return true;
    }
}
