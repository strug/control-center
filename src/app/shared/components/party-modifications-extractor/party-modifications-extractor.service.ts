import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';

import { ChangesetInfo } from '../../../sections/party-claim/changeset/changeset-infos';
import { Questionary } from '../../../thrift-services/ank/gen-model/questionary_manager';
import { PartyModification } from '../../../thrift-services/damsel/gen-model/claim_management';
import { PartyID } from '../../../thrift-services/damsel/gen-model/domain';
import { PartyModificationsExtractorDialogComponent } from './party-modifications-extractor-dialog.component';

@Injectable()
export class PartyModificationsExtractorService {
    private destroy$: Subject<void> = new Subject();
    private extractMods$: Subject<{
        partyID: PartyID;
        questionary: Questionary;
        unsaved: ChangesetInfo[];
    }> = new Subject();
    private extracted$: Subject<PartyModification[]> = new Subject();

    modsExtracted$: Observable<PartyModification[]> = this.extracted$.asObservable();

    constructor(private dialog: MatDialog) {}

    init() {
        this.extractMods$
            .pipe(
                takeUntil(this.destroy$),
                switchMap(({ partyID, questionary, unsaved }) =>
                    this.dialog
                        .open(PartyModificationsExtractorDialogComponent, {
                            disableClose: true,
                            data: { questionary, partyID, unsaved },
                            width: '800px',
                        })
                        .afterClosed()
                        .pipe(filter((r) => r.length > 0))
                )
            )
            .subscribe((r) => this.extracted$.next(r));
    }

    extractMods(partyID: PartyID, questionary: Questionary, unsaved: ChangesetInfo[]) {
        this.extractMods$.next({ partyID, questionary, unsaved });
    }

    destroy() {
        this.destroy$.next();
    }
}
