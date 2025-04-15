import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TrainingService } from '../training/training.service';
import { Exercise } from '../training/exercise.model';

@Component({
  selector: 'app-new-training',
  standalone: false,
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css'
})
export class NewTrainingComponent implements OnInit {

  @Output() trainingStart = new EventEmitter<void>()

  exercises: Exercise[] | null = null;

  constructor(private trainingService: TrainingService) {

  }

  ngOnInit(): void {
    this.exercises = this.trainingService.getAvailableExercises()
  }


  onStartTraining() {
    this.trainingStart.emit()
  }
}
