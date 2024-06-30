import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="tasks"
export default class extends Controller {
  static targets = ["textField"]

  clearTextFields(event) {
    if (!event.detail.success) return
    this.#clearTextFields()
  }

  #clearTextFields() {
    this.textFieldTargets.forEach((textField) => {
      textField.value = ""
    })
  }
}
