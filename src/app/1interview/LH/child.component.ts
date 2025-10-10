import {
    Component, OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked,
    OnDestroy, Input, SimpleChanges
} from '@angular/core';

@Component({
    selector: 'app-lhchild',
    templateUrl: './child.component.html'
})
export class LHChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    @Input() childInput = 0;

    constructor() {
        console.log('Child: constructor');
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('Child: ngOnChanges', changes);
    }

    ngOnInit() {
        console.log('Child: ngOnInit');
    }

    ngDoCheck() {
        console.log('Child: ngDoCheck');
    }

    ngAfterContentInit() {
        console.log('Child: ngAfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('Child: ngAfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('Child: ngAfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('Child: ngAfterViewChecked');
    }

    ngOnDestroy() {
        console.log('Child: ngOnDestroy');
    }
}
