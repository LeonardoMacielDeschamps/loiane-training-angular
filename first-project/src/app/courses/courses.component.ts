import { Component } from '@angular/core'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent {
  portalName: string = 'Cursos do Leo'
  courses: string[] = ['JavaScript', 'Node.js', 'ReactJS']
}
