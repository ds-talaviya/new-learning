import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: ToggleComponent,
    multi: true
  }]
})
export class ToggleComponent implements ControlValueAccessor {
  value = false;
  isDisabled = false;

  constructor() { }

  onChange = (value: any) => { }
  onTouched: () => void = () => { };

  writeValue(obj: any): void {
    console.log(obj)
    this.value = !!obj;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  onInputChanged(event: any) {
    let value = event.target as HTMLInputElement;
    this.value = value.checked;
    this.onChange(this.value);
    this.onTouched()
  }
}
