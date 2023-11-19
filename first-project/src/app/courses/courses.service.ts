import { Injectable } from '@angular/core'

@Injectable()
export class CoursesService {
  getCourses() {
    return ['JavaScript', 'Node.js', 'ReactJS']
  }
}
