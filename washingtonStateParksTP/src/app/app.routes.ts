import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MountRainierComponent } from './pages/mount-rainier/mount-rainier.component';
import { OlympicComponent } from './pages/olympic/olympic.component';
import { SaltWaterComponent } from './pages/salt-water/salt-water.component';

export const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'mount-rainier', component: MountRainierComponent }, // Adjusted path
    { path: 'olympic-national-park', component: OlympicComponent },
    { path: 'salt-water-state-park', component: SaltWaterComponent }
];
