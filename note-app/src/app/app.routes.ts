import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';
import { AuthGuard } from './guards/auth.guard';
import { NoteListComponent } from './components/note-list/note-list.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch:'full'},
    { path: 'login', component: LoginComponent},
    { path:'note-editor', component: NoteEditorComponent, canActivate: [AuthGuard]},
    { path:'note-list', component: NoteListComponent, canActivate: [AuthGuard]},
    { path: '**', redirectTo: 'login' }
];