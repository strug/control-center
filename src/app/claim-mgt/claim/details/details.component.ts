import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter } from 'rxjs/operators';

import { AppAuthGuardService } from '../../../app-auth-guard.service';
import { Claim } from '../../../thrift-services/damsel/gen-model/claim_management';
import { ClaimService } from '../claim.service';
import { RecreateClaimService } from '../recreate-claim';
import { getAvailableClaimStatuses } from '../status-changer/get-available-claim-statuses';
import { StatusChangerComponent } from '../status-changer/status-changer.component';

@Component({
    selector: 'cc-claim-details',
    templateUrl: 'details.component.html',
})
export class DetailsComponent {
    @Input() claim: Claim;

    recreateClaimInProcess$ = this.recreateClaimService.isInProcess$;

    canRecreate = this.appAuthGuardService.userHasRoles(['create_claim']);
    canAddClaimMod = this.appAuthGuardService.userHasRoles(['add_claim_mod']);

    constructor(
        private dialog: MatDialog,
        private claimService: ClaimService,
        private recreateClaimService: RecreateClaimService,
        private appAuthGuardService: AppAuthGuardService
    ) {}

    editStatus() {
        this.dialog
            .open(StatusChangerComponent, {
                width: '500px',
                disableClose: true,
                data: {
                    partyID: this.claim.party_id,
                    claimID: this.claim.id,
                    claimStatus: this.claim.status,
                },
            })
            .afterClosed()
            .pipe(filter((r) => r))
            .subscribe(() => {
                this.claimService.getClaim(this.claim.party_id, this.claim.id);
            });
    }

    canChangeStatus(): boolean {
        return getAvailableClaimStatuses(this.claim.status).length > 0;
    }

    recreate() {
        this.recreateClaimService.recreate(this.claim);
    }
}
