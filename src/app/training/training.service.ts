import { Exercise } from "./exercise.model";





export class TrainingService {


    private availableExercises: Exercise[] = [
        { id: 'crunches', name: 'کرانچ', duration: 30, calories: 8 },
        { id: 'squet', name: 'اسکوات', duration: 180, calories: 15 },
        { id: 'side-iunges', name: 'لانچ اسکوات', duration: 120, calories: 18 },
        { id: 'burpees', name: 'شنا', duration: 68, calories: 8 },
    ]




    getAvailableExercises() {
        return this.availableExercises.slice()
    }


}