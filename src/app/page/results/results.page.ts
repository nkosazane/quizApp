import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  @Input() score:string ;
  @Input() drop:string;
  @Input() drop1:string;
  @Input() date1:number;
  @Input() date2:number;
  @Input() answers:number;
  per:string;
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.queryParams.subscribe( data => {console.log(data);

      this.score = data.score,  
      console.log(this.score);
    //  if(this.score="1"){
    //   this.per="10";
    //  }
    //  if(this.score="2"){
    //   this.per="20";
    //  }
    // else if(this.score="3"){
    //   this.per=30;
    //  }

      });
  }

}
