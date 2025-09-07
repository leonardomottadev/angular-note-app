import { Component, input, OnInit, signal } from '@angular/core';
import { Note } from '../../models/note.type';
import { NoteService } from '../../services/note-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-editor.component',
  imports: [CommonModule, FormsModule],
  templateUrl: './note-editor.component.html',
  styleUrl: './note-editor.component.css'
})
export class NoteEditorComponent implements OnInit{
  username = signal<string>('');
  note = signal<Note>({
    id: 0,
    title: '',
    text: '',
    userId: 0
  });

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.username.set(localStorage.getItem('username') ?? '');

    const selectedNote = this.noteService.getNote();
    if (selectedNote) {
      this.note.set(selectedNote);
    }
  }

  saveNote() {
    this.noteService.setNote(this.note());
  }
}