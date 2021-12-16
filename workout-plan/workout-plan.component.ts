import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workout-plan',
  templateUrl: './workout-plan.component.html',
  styleUrls: ['./workout-plan.component.scss']
})
export class WorkoutPlanComponent {
  private workoutCount: number;
  private workoutNumber: number;
  private intecity: number;

  public nextWorkout() {}
  public deleteWorkout(workoutPlan: Workoutplan) {}
  public addWorkout(workoutPlan: Workoutplan) {}
}
