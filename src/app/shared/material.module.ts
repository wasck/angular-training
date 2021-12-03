import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

const imports = [
  CommonModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
];

const exports = imports;

@NgModule({
  declarations: [],
  imports,
  exports
})
export class MaterialModule { }
