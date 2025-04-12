import { NgModule } from "@angular/core";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatDatepickerModule } from '@angular/material/datepicker'
import {MatNativeDateModule} from '@angular/material/core'
import {MatCheckboxModule} from '@angular/material/checkbox'
@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule , 
        MatNativeDateModule , 
        MatCheckboxModule

    ],
    exports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCheckboxModule
    ]
})

export class MaterialModule {

}