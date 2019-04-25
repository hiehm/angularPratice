import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-little-mouse-search',
  templateUrl: './little-mouse-search.component.html',
  styleUrls: ['./little-mouse-search.component.css']
})
export class LittleMouseSearchComponent implements OnInit {
  acceptPartialContent: any;

  constructor() { }

  ngOnInit() {

  }

  acceptConetnt(content: any) {
   this.acceptPartialContent = content;
  }
 
}
