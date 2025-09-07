import { Component, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Note } from '../../models/note.type';
import { NoteService } from '../../services/note-service';

@Component({
  selector: 'app-note-list.component',
  imports: [RouterModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css'
})
export class NoteListComponent implements OnInit{
  username = signal<string>('');
  noteList = signal<Array<Note>>([
    { id:1, text:'note 1 text', title:'note 1', userId:1 }, 
    { id:2, text:'note 2 text', title:'note 2', userId:1 }, 
    { id:3, text:'note 3 text', title:'note 3', userId:3 }
  ]);

  constructor(private router: Router, private noteService: NoteService) {}

  ngOnInit(): void {
    this.username.set(localStorage.getItem('username') ?? '');
  }

  createNote() {
    const newNote: Note = {
      id: this.noteList().length + 1,
      title: `note ${this.noteList().length + 1}`,
      text: `note ${this.noteList().length + 1} text`,
      userId: 1
    }

    this.noteList.set([...this.noteList(), newNote]);
  }

  editNote(note: Note) {
    console.log(`${note.title} clicked`);
    this.noteService.setNote(note);
    this.router.navigate(['/note-editor']);
  }
}