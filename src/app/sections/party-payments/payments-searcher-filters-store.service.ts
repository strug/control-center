import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import pickBy from 'lodash-es/pickBy';

import { SearchFiltersParams } from '@cc/app/shared/components';
import { QueryParamsStore } from '@cc/app/shared/services';
import { wrapValuesToArray } from '@cc/utils/index';

const shopIDsAndPrimitives = (v, k) => typeof v === 'string' && k === 'shopIDs';

@Injectable()
export class PaymentsSearchFiltersStore extends QueryParamsStore<SearchFiltersParams> {
    constructor(protected route: ActivatedRoute, protected router: Router) {
        super(router, route);
    }

    mapToData(queryParams: Params): SearchFiltersParams {
        return {
            ...queryParams,
            ...wrapValuesToArray(pickBy(queryParams, shopIDsAndPrimitives)),
        } as SearchFiltersParams;
    }

    mapToParams(data: SearchFiltersParams): Params {
        return data;
    }
}
