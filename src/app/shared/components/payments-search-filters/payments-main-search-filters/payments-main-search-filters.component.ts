import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { MAT_DATE_FORMATS } from '@angular/material/core';

import { SearchFiltersParams } from '../search-filters-params';
import { PaymentsMainSearchFiltersService } from './payments-main-search-filters.service';

export const MY_FORMATS = {
    parse: {
        dateInput: ['l', 'LL'],
    },
    display: {
        dateInput: 'DD.MM.YYYY',
        monthYearLabel: 'DD.MM.YYYY',
        dateA11yLabel: 'DD.MM.YYYY',
        monthYearA11yLabel: 'DD.MM.YYYY',
    },
};

@Component({
    selector: 'cc-payments-main-search-filters',
    templateUrl: 'payments-main-search-filters.component.html',
    styleUrls: ['payments-main-search-filters.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        PaymentsMainSearchFiltersService,
        { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
    ],
})
export class PaymentsMainSearchFiltersComponent implements OnInit {
    @Input()
    partyID: string;

    @Input()
    initParams: SearchFiltersParams;

    @Output()
    valueChanges = new EventEmitter<SearchFiltersParams>();

    shops$ = this.paymentsMainSearchFiltersService.shops$;

    form = this.paymentsMainSearchFiltersService.form;

    constructor(private paymentsMainSearchFiltersService: PaymentsMainSearchFiltersService) {
        this.paymentsMainSearchFiltersService.searchParamsChanges$.subscribe((params) => {
            this.valueChanges.emit(params);
        });
    }

    ngOnInit() {
        this.paymentsMainSearchFiltersService.init(this.initParams);
        this.paymentsMainSearchFiltersService.getShops(this.partyID);
    }
}