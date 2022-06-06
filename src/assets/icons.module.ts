import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { asAppoinment } from './icons/svg/appoinment';
import { asAppointment } from './icons/svg/appointment';
import { asCalls } from './icons/svg/calls';
import { asChats } from './icons/svg/chats';
import { asDashboard } from './icons/svg/dashboard';
import { asDepartments } from './icons/svg/department';
import { asDoctor } from './icons/svg/doctor';
import { asDr } from './icons/svg/dr';
import { asEarning } from './icons/svg/Earing';
import { asImgDoctor } from './icons/svg/img-doctor';
import { asLogo } from './icons/svg/logo';
import { asNewPetients } from './icons/svg/newPatients';
import { asOperations } from './icons/svg/operations';
import { asPatients } from './icons/svg/patients';
import { asPlus } from './icons/svg/plus';
import { asRing } from './icons/svg/ring';
import { asSettings } from './icons/svg/settings';
import { asUser } from './icons/svg/user';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule.forRoot({
      sizes: {
        xs: '5px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '25px',
        xxl: '30px',
      },
      icons : [
        asAppoinment,
        asDoctor,
        asDashboard,
        asDepartments ,
        asPatients,
        asLogo,
        asChats,
        asCalls,
        asPlus,
        asSettings,
        asUser,
        asRing,
        asDr,
        asImgDoctor,
        asAppointment,
        asOperations,
        asNewPetients,
        asEarning
      ]
    }),
  ],
  exports : [SvgIconsModule]
})
export class IconsModule {}
