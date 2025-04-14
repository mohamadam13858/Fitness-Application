import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-training',
  standalone: false,
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.css'
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0;


  ngOnInit(): void {
   let intervalId = setInterval(() => {
      this.progress += 5
      if (this.progress >= 100) {
        clearInterval(intervalId);
      }
    }, 1000);
  }


}
