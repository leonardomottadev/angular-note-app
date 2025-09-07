import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch:'full'},
    { path: 'login', component: LoginComponent},
    { path:'note-editor', component: NoteEditorComponent}
];