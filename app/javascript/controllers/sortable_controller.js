import { Controller } from "@hotwired/stimulus"
import Sortable from "sortablejs"
import { patch } from "@rails/request.js";

// Connects to data-controller="sortable"
export default class extends Controller {
  static values = { url: String };
  static classes = ['handle']

  connect() {
    this.sortable = Sortable.create(this.element, {
      handle: this.handleClass,
      onEnd: this.onEnd.bind(this)
    });
  }

  disconnect() {
    this.sortable.destroy();
  }

  onEnd(event) {
    const { newIndex, item } = event;
    const url = item.dataset["sortableUrl"]
    patch(url, {
      body: JSON.stringify({ position: newIndex }),
      responseKind: "turbo-stream"
    });
  }
}
