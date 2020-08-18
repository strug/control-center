import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Modification } from '../../../thrift-services/damsel/gen-model/claim_management';
import { SendCommentService } from './send-comment.service';

@Component({
    selector: 'cc-send-comment',
    templateUrl: 'send-comment.component.html',
    styleUrls: ['send-comment.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [SendCommentService],
})
export class SendCommentComponent {
    @Output() changesetSaved: EventEmitter<Modification[]> = new EventEmitter();

    @Input()
    disabled?: boolean;

    form: FormGroup = this.sendCommentService.form;
    inProgress$ = this.sendCommentService.inProgress$;

    constructor(private sendCommentService: SendCommentService) {}

    sendComment() {
        this.sendCommentService.sendComment();
    }
}
