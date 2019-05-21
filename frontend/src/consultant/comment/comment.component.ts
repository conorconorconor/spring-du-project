import { Component, OnInit } from '@angular/core';
import { ConsultantComment } from '../comment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  public comment = new ConsultantComment();

  constructor() { }

  ngOnInit() {
  }

  addComment() {

  }

}
