import {
    Component, OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked,
    OnDestroy, Input, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-parent',
    templateUrl: './parent.component.html'
})
export class LHParentComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() parentInput = 0;

    constructor() {
        console.log('Parent: constructor');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('Parent: ngOnChanges', changes);
    }

    ngOnInit() {
        console.log('Parent: ngOnInit');
    }

    ngDoCheck() {
        console.log('Parent: ngDoCheck');
    }

    ngAfterContentInit() {
        console.log('Parent: ngAfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('Parent: ngAfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('Parent: ngAfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('Parent: ngAfterViewChecked');
    }

    ngOnDestroy() {
        console.log('Parent: ngOnDestroy');
    }

    parentCounter = 0;
    incrementCounter() {
        this.parentCounter++;
    }
}
