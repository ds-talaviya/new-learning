import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html',
})
export class CDParentComponent {
    // Child input
    counter = 0;

    // Unrelated variable
    unrelated = 0;

    // Increment counter (affects child)
    incrementCounter() {
        this.counter++;
    }

    // Increment unrelated variable (does NOT affect child input)
    incrementUnrelated() {
        this.unrelated++;
    }

    logParentCheck() {
        console.log('%cParent checked', 'color: green');
        return true;
    }
}
