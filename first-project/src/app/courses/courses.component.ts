import { Component } from '@angular/core'
import { CoursesService } from './courses.service'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  portalName: string = 'Cursos do Leo'
  courses: string[]

  constructor(private readonly coursesService: CoursesService) {
    this.courses = this.coursesService.getCourses()
  }
}
