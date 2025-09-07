import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-note-editor.component',
  imports: [],
  templateUrl: './note-editor.component.html',
  styleUrl: './note-editor.component.css'
})
export class NoteEditorComponent implements OnInit{
  username = signal<string>('');

  ngOnInit(): void {
    if(localStorage.getItem('username'))
    {
      this.username.set(localStorage.getItem('username') ?? '');
    }
  }
}
