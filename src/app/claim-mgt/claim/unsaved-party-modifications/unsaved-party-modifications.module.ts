import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';

import { SharedPipesModule } from '@cc/app/shared/pipes';
import { PrettyJsonModule } from '@cc/components/pretty-json';

import { EditUnsavedModificationModule } from '../conversation/edit-unsaved-modification/edit-unsaved-modification.module';
import { UnsavedPartyModificationsComponent } from './unsaved-party-modifications.component';

@NgModule({
    imports: [
        CommonModule,
        MatExpansionModule,
        SharedPipesModule,
        MatButtonModule,
        FlexLayoutModule,
        MatDialogModule,
        EditUnsavedModificationModule,
        PrettyJsonModule,
    ],
    declarations: [UnsavedPartyModificationsComponent],
    exports: [UnsavedPartyModificationsComponent],
})
export class UnsavedPartyModificationsModule {}
