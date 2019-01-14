import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';

import { InvoicePaymentAdjustmentParams as InvoicePaymentAdjustmentParamsObject, UserInfo as UserInfoObject } from './gen-nodejs/payment_processing_types';
import { InvoicePaymentAdjustment, InvoicePaymentAdjustmentParams, UserInfo } from '../gen-damsel/payment_processing';
import { encode } from '../shared/thrift-js-formatter';
import { ThriftService } from './thrift-service';
import * as Invoicing from './gen-nodejs/Invoicing';

@Injectable()
export class PaymentProcessingService extends ThriftService {
    constructor(zone: NgZone) {
        super(zone, '/v1/processing/invoicing', Invoicing);
    }

    createPaymentAdjustment = (user: UserInfo, id: string, paymentId: string, params: InvoicePaymentAdjustmentParams): Observable<InvoicePaymentAdjustment> =>
        this.toObservableAction('CreatePaymentAdjustment')(
            new UserInfoObject(encode(user)), id, paymentId, new InvoicePaymentAdjustmentParamsObject(encode(params))
        )

    capturePaymentAdjustment = (user: UserInfo, id: string, paymentId: string, adjustmentId: string): Observable<void> =>
        this.toObservableAction('CapturePaymentAdjustment')(new UserInfoObject(encode(user)), id, paymentId, adjustmentId)

    cancelPaymentAdjustment = (user: UserInfo, id: string, paymentId: string, adjustmentId: string): Observable<void> =>
        this.toObservableAction('CancelPaymentAdjustment')(new UserInfoObject(encode(user)), id, paymentId, adjustmentId)
}