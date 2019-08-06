import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.page.html',
  styleUrls: ['./maths.page.scss'],
})
export class MathsPage implements OnInit {

  
  radios:any;
  numQuestions;
 
  userInput = new Array();
timerObject: any;
timerValue : number = 0;
counter: number=0;
counter1: number=0;
dispalyCounter: number = 0;
score : number = 0;
done : boolean = false;
scores = [];
// scores = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
answersUser = ["ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph", "ph"];
// answers = ['lacrosse/Ice hockey','bhutan','jamaica','	wrestling','1930',
//            ' pollen ',' fish   ',' prion','2 methyl-1, 4-naphthoquinone','vasopressin'
           
//           ];
answers = ["A","A","C","D","B"];
tot = this.answers.length;
  constructor(private maths:Router) { }
  
  onStart(){
    // this.timerObject = Observable.interval(1000).subscribe(
    //   x => {
    //     this.timerValue = x;
    //   }
    // );
    this.proceed();
  }
  
  //next question
  proceed(){
    if(this.counter < 5)
      this.counter++; 
  }
  category(){
    // this.timerObject = Observable.interval(1000).subscribe(
    //   x => {
    //     this.timerValue = x;
    //   }
    // );
    this.next();
  }
  
  //next question
  next(){
    if(this.counter1 < 5)
      this.counter1++; 
  }
  //track user score
  scoreTracker(arg){
    this.answersUser[this.counter1-1] = arg;
  }

 
  getCheckedValue( radioName ){
  this.radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<this.radios.length; y++)
      if(this.radios[y].checked) return this.radios[y].value; // return the checked value
}

getScore(){
  this.score = 0;
  for (var i=0; i<this.tot; i++)
    if(this.getCheckedValue("question"+i)===this.answers[i]) this.score += 1; // increment only
  return this.score;
}

 returnScore(){
  this.score=this.getScore();
  alert("Your score is "+ this.score +"/"+ this.tot);
  this.maths.navigate(['/results'], {queryParams:{score: this.score}})
 
}


  ngOnInit() {
    
  }

}
