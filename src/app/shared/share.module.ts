import { DialogModule } from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { IconsModule } from 'src/assets/icons.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DropdownModule } from 'primeng/dropdown';
import { PhoneFormatPipe } from './pipes/phone-format.pipe';


@NgModule({
  declarations: [HeaderComponent, SidebarComponent, PhoneFormatPipe],
  imports: [IconsModule, DialogModule,FormsModule, RouterModule,DropdownModule],
  exports: [HeaderComponent, SidebarComponent],
})
export class ShareModule {}
