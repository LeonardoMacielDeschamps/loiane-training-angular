import { Component } from '@angular/core'

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss',
})
export class DataBindingComponent {
  url: string = 'http://localhost:4200'
  angularCourse: boolean = true
  imageUrl: string = 'http://lorempixel.com.br/400/200'
  imageCounter: number = 0

  getValue() {
    return 1
  }

  getLikedCourse() {
    return true
  }

  getImageUrl() {
    return `${this.imageUrl}/?${++this.imageCounter}`
  }
}
