import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

const imports = [
  CommonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatIconModule,
  MatListModule
];

const exports = imports;

@NgModule({
  declarations: [],
  imports,
  exports
})
export class MaterialModule { }
