import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let errorMessage = "Sorry, there are no images matching<br> your search query. Please try again!";
export let iziErrorMessage = {
    title: 'Error',
    message: errorMessage,
    messageSize: '16px',
    position: 'topRight',
    theme: 'dark',
    backgroundColor: "#EF4040",
    color: "#ffffff",
}