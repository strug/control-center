import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators';

import { DomainTypedManager } from '../../../../../thrift-services';
import { BusinessScheduleObject } from '../../../../../thrift-services/damsel/gen-model/domain';

@Component({
    selector: 'cc-business-schedule-selector',
    templateUrl: 'business-schedule-selector.component.html',
})
export class BusinessScheduleSelectorComponent implements OnInit {
    @Input()
    initialValue: string;

    @Output()
    idChange = new EventEmitter<number>();

    schedules$: Observable<BusinessScheduleObject[]>;

    isLoading = true;

    hasError = false;

    constructor(private domainManager: DomainTypedManager, private snackBar: MatSnackBar) {}

    selectionChange(change: MatSelectChange) {
        this.idChange.emit(change.value);
    }

    ngOnInit() {
        this.schedules$ = this.domainManager.getBusinessScheduleObjects().pipe(
            tap(
                () => {
                    this.isLoading = false;
                },
                () => {
                    this.isLoading = false;
                    this.hasError = true;
                    this.snackBar.open('An error occurred while business schedule receiving', 'OK');
                }
            )
        );
    }
}
