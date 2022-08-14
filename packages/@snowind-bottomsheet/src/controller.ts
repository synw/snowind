import { ref } from "vue";

export default class BottomSheetController {
  isOpened = ref(false);

  open() {
    //console.log("Open sheet")
    this.isOpened.value = true
  }

  close() {
    //console.log("Close sheet")
    this.isOpened.value = false
  }
}