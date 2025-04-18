import { Component, EventEmitter, inject, OnDestroy, OnInit, Output } from '@angular/core';
import { TrainingService } from '../training/training.service';
import { Exercise } from '../training/exercise.model';
import { NgForm } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Subscription } from 'rxjs';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';



@Component({
  selector: 'app-new-training',
  standalone: false,
  templateUrl: './new-training.component.html',
  styleUrl: './new-training.component.css'
})
export class NewTrainingComponent implements OnInit, OnDestroy {


  exercises$: Exercise[] | null;


  constructor(private trainingService: TrainingService) {

  }




  ngOnInit() {
    this.exercises$ = this.trainingService.getAvailableExercises()
  }


  ngOnDestroy(): void {
  }



  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise)

  }
}
