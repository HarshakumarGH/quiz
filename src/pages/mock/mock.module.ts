import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MockPage } from './mock';

@NgModule({
  declarations: [
    MockPage,
  ],
  imports: [
    IonicPageModule.forChild(MockPage),
  ],
})
export class MockPageModule {}
