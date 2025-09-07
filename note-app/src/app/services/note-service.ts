import { Injectable, signal } from '@angular/core';
import { Note } from '../models/note.type';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  selectedNote = signal<Note|null>(null);

  setNote(note: Note) {
    this.selectedNote.set(note);
  }

  getNote() {
    return this.selectedNote();
  }
}
