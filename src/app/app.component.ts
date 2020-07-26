import { Component } from '@angular/core';

export type EditorType = 'entry' | 'reviews';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reader Buddy';
  editor: EditorType = 'entry';

  get showEntryForm() {
    return this.editor === 'entry';
  }

  get showReviews() {
    return this.editor === 'reviews';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
