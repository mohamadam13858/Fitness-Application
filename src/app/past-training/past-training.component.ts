import { Component, OnInit } from '@angular/core';
import { TrainingService } from '../training/training.service';
import { Exercise } from '../training/exercise.model';

@Component({
  selector: 'app-past-training',
  standalone: false,
  templateUrl: './past-training.component.html',
  styleUrl: './past-training.component.css'
})
export class PastTrainingComponent implements OnInit {

  displayedColumns: string[] = ['name', 'duration', 'calories', 'date', 'state'];

  dataSource: Exercise[] = []
  constructor(private trainingService: TrainingService) {

  }

  ngOnInit(): void {
    const data = this.trainingService.getCompleteOrCancelExercises()
    this.dataSource = data
  }


}
