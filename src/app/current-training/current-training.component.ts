import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StopTrainingComponent } from './stop-training/stop-training.component';
import { TrainingService } from '../training/training.service';

@Component({
  selector: 'app-current-training',
  standalone: false,
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.css'
})
export class CurrentTrainingComponent implements OnInit {

  progress = 0;

  timer: any;


  name: string | null = null


  @Output() dialogState = new EventEmitter();


  constructor(private dialog: MatDialog, private trainingService: TrainingService) {

  }

  ngOnInit(): void {
    this.startInterval()
    const Name = this.trainingService.getRunningExercise().name
    this.name = Name!
  }


  startInterval() {
    const increament = this.trainingService.getRunningExercise().duration! / 100 * 1000
    this.timer = setInterval(() => {
      this.progress += 1
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, increament)
  }

  onStop() {
    clearInterval(this.timer)
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress
      }
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res === true) {
        this.dialogState.emit()
      } else {
        this.startInterval()
      }


    })
  }



}
