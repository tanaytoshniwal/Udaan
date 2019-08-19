import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { GetTaskComponent } from './get-task/get-task.component';
import { AllocateTaskComponent } from './allocate-task/allocate-task.component';
import { AllAssetssComponent } from './all-assetss/all-assetss.component';
import { AddWorkerComponent } from './add-worker/add-worker.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddAssetComponent } from './add-asset/add-asset.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetTaskComponent,
    AllocateTaskComponent,
    AllAssetssComponent,
    AddWorkerComponent,
    AddTaskComponent,
    AddAssetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
