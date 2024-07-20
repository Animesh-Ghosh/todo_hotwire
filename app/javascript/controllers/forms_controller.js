import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="forms"
export default class extends Controller {
  static targets = ["textField"]

  resetFields(event) {
    if (!event.detail.success) return
    this.#resetTextFields()
    // reset other types of fields...
  }

  #resetTextFields() {
    this.textFieldTargets.forEach((textField) => {
      textField.value = ""
    })
  }
}
