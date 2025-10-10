import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-child-onpush',
    templateUrl: './child-onpush.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildOnpushComponent {
    @Input() count!: number;

    logCheck() {
        console.log('%cChild OnPush checked', 'color: red');
        return true;
    }
}
