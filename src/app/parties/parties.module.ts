import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SharedPipesModule } from '@cc/app/shared/pipes';
import { CardContainerModule } from '@cc/components/card-container/card-container.module';

import { PartiesRoutingModule } from './parties-routing.module';
import { PartiesComponent } from './parties.component';

@NgModule({
    imports: [
        CommonModule,
        PartiesRoutingModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        SharedPipesModule,
        CardContainerModule,
    ],
    declarations: [PartiesComponent],
})
export class PartiesModule {}
