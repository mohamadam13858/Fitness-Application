import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TrainingService } from '../training/training.service';
import { Exercise } from '../training/exercise.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort'


@Component({
  selector: 'app-past-training',
  standalone: false,
  templateUrl: './past-training.component.html',
  styleUrl: './past-training.component.css'
})
export class PastTrainingComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'duration', 'calories', 'date', 'state'];

  dataSource = new MatTableDataSource<Exercise>;

  @ViewChild(MatSort) sort: MatSort | null = null


  constructor(private trainingService: TrainingService) {

  }

  ngOnInit(): void {
    this.dataSource.data = this.trainingService.getCompleteOrCancelExercises()

  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
  }
  applyFilter(filterValue: Event) {
    this.dataSource.filter = (filterValue.target as HTMLInputElement).value.trim().toLowerCase()
  }



}
