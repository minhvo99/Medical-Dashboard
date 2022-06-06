import {ButtonModule} from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { MenuModule } from 'primeng/menu';
import { NgModule } from "@angular/core";
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {RippleModule} from 'primeng/ripple';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';

const PrimeNgComponent = [
    ButtonModule,
    InputTextModule,
    RippleModule,
    ToastModule,
    ProgressSpinnerModule,
    MenuModule,
    DropdownModule,
    DialogModule,
    TableModule
]

@NgModule({
    imports : [
        ...PrimeNgComponent 
    ],
    exports: [
        ...PrimeNgComponent 
    ],
})

export class PrimeNgModule {}