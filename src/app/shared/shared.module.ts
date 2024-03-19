import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
// import { AngularMaterialModule } from '@lightning-spa/angular-material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material-module/material-module/angular-material.module';
import { SigninComponent } from './signin/signin.component';
// import { MaterialModuleModule } from 'angular-material-module/material-module/material-module.module';
// import { LoginDialogComponent } from './login-dialog/login-dialog.component';
@NgModule({
  declarations: [
    // LoginDialogComponent,

    SigninComponent,
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    // LoginDialogComponent,
    SigninComponent,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
