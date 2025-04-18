import { Subject } from "rxjs";
import { Exercise } from "./exercise.model";

export class TrainingService {

    exerciseChanged = new Subject<Exercise | null>()

    private availableExercises: Exercise[] = [
        { id: 'crunches', name: 'کرانچ', duration: 30, calories: 8 },
        { id: 'squet', name: 'اسکوات', duration: 180, calories: 15 },
        { id: 'side-iunges', name: 'لانچ اسکوات', duration: 120, calories: 18 },
        { id: 'burpees', name: 'شنا', duration: 68, calories: 8 },
    ]

    private exercisesFinish: Exercise[] = []
    private runningExercise: Exercise | null = null;

    constructor() {
        this.loadExercisesFromLocalStorage();
    }

    private loadExercisesFromLocalStorage() {
        // بارگیری ورزش‌های تمام شده از localStorage
        const savedExercises = localStorage.getItem('completedExercises');
        if (savedExercises) {
            this.exercisesFinish = JSON.parse(savedExercises);
        }
        
        // بارگیری ورزش در حال اجرا از localStorage (در صورت وجود)
        const savedRunningExercise = localStorage.getItem('runningExercise');
        if (savedRunningExercise) {
            this.runningExercise = JSON.parse(savedRunningExercise);
            this.exerciseChanged.next({ ...this.runningExercise });
        }
    }

    private saveExercisesToLocalStorage() {
        // ذخیره‌سازی ورزش‌های تمام شده در localStorage
        localStorage.setItem('completedExercises', JSON.stringify(this.exercisesFinish));

        // ذخیره‌سازی ورزش در حال اجرا در localStorage
        if (this.runningExercise) {
            localStorage.setItem('runningExercise', JSON.stringify(this.runningExercise));
        } else {
            localStorage.removeItem('runningExercise');
        }
    }

    getAvailableExercises() {
        return this.availableExercises.slice()
    }

    startExercise(selectedId: string) {
        this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId)!;
        this.exerciseChanged.next({ ...this.runningExercise });
        this.saveExercisesToLocalStorage();
    }

    getRunningExercise() {
        return { ...this.runningExercise };
    }

    completeExercise() {
        this.exercisesFinish.push({ ...this.runningExercise!, date: new Date(), state: 'complated' });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
        this.saveExercisesToLocalStorage(); // ذخیره‌سازی بعد از اتمام ورزش
    }

    cancelExercise(progress: number) {
        this.exercisesFinish.push({
            ...this.runningExercise!,
            date: new Date(),
            state: 'canceled',
            duration: this.runningExercise?.duration! * progress / 100,
            calories: this.runningExercise?.calories! * progress / 100
        });
        this.runningExercise = null;
        this.exerciseChanged.next(null);
        this.saveExercisesToLocalStorage(); // ذخیره‌سازی بعد از لغو ورزش
    }

    getCompleteOrCancelExercises() {
        return [...this.exercisesFinish];
    }
}
