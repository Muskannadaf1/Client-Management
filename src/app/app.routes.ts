import { Routes } from '@angular/router';
import { CreateClientComponent } from './create-client/create-client.component';
import { ScheduleMeetingComponent } from './schedule-meeting/schedule-meeting.component';

export const routes: Routes = [
    {path:'addnewclient', component:CreateClientComponent},
    {path:'schedulemeet', component:ScheduleMeetingComponent}
];
