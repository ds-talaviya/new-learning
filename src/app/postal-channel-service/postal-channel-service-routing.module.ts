import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostalChannelServiceComponent } from './postal-channel-service.component';

const routes: Routes = [
  {
    path: '', component: PostalChannelServiceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostalChannelServiceRoutingModule { }
