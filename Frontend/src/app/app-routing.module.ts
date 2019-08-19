import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddAssetComponent } from './add-asset/add-asset.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import { AllAssetssComponent } from './all-assetss/all-assetss.component';
import { AllocateTaskComponent } from './allocate-task/allocate-task.component';
import { GetTaskComponent } from './get-task/get-task.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'addasset', component: AddAssetComponent },
  { path: 'addtask', component: AddTaskComponent },
  { path: 'addworker', component: AddWorkerComponent },
  { path: 'allassets', component: AllAssetssComponent },
  { path: 'allocatetask', component: AllocateTaskComponent },
  { path: 'gettask', component: GetTaskComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
