import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-accept-other-post',
  templateUrl: './accept-other-post.component.html',
  styleUrls: ['./accept-other-post.component.css']
})
export class AcceptOtherPostComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(res => {
      console.log(res['uuid']);
      console.log(res['strEMP_NO']);
    });
  }

  ngOnInit() {
  }

}
