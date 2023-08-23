import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
	selector: 'datepicker-range-popup',
	standalone: true,
	imports: [NgbDatepickerModule, FormsModule, JsonPipe],
	templateUrl: './date-picker.component.html',
	
})
export class NgbdDatepickerRangePopup {
	@Input() fromdate : any;
    @Input() todate : any;
    @Output() dateRangeChanged  = new EventEmitter<{ from: any, to: any }>();

  emitDateRangeChange()
  {
	this.dateRangeChanged.emit({ from: this.fromdate, to: this.todate });
  }

}