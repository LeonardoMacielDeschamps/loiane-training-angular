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
  inputValue: string = ''
  savedInputValue: string = ''
  isMouseOver: boolean = false

  getValue() {
    return 1
  }

  getLikedCourse() {
    return true
  }

  getImageUrl() {
    return `${this.imageUrl}/?${++this.imageCounter}`
  }

  onClickButton() {
    alert('ola')
  }

  setInputValue(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement
    this.inputValue = inputElement.value
  }

  saveInputValue(inputValue: string) {
    this.savedInputValue = inputValue
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }
}
