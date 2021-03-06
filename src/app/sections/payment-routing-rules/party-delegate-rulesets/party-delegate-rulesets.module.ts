import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

import { DetailsItemModule } from '@cc/components/details-item';

import { PaymentRoutingRulesetHeaderModule } from '../payment-routing-ruleset-header';
import { AttachNewRulesetDialogComponent } from './attach-new-ruleset-dialog';
import { PartyDelegateRulesetsRoutingModule } from './party-delegate-rulesets-routing.module';
import { PartyDelegateRulesetsComponent } from './party-delegate-rulesets.component';

const EXPORTED_DECLARATIONS = [PartyDelegateRulesetsComponent, AttachNewRulesetDialogComponent];

@NgModule({
    imports: [
        PartyDelegateRulesetsRoutingModule,
        PaymentRoutingRulesetHeaderModule,
        MatButtonModule,
        FlexLayoutModule,
        CommonModule,
        RouterModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatPaginatorModule,
        MatMenuModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDividerModule,
        MatSelectModule,
        MatRadioModule,
        DetailsItemModule,
        MatInputModule,
    ],
    declarations: EXPORTED_DECLARATIONS,
    exports: EXPORTED_DECLARATIONS,
})
export class PartyDelegateRulesetsModule {}
