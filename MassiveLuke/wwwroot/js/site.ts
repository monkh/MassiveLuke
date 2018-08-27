/// <reference path="../../node_modules/sweetalert2/sweetalert2.d.ts" />

import "../../node_modules/sweetalert2/sweetalert2";
import swal from "sweetalert2";

document.addEventListener("DOMContentLoaded", () => {
    let message: string = "Hello World";
    console.log(message);
});

document.getElementById('auger-example1').addEventListener("click", () => {
    swal({
        title: 'Error!',
        text: 'Do you want to continue',
        type: 'error',
        confirmButtonText: 'Cool'
    })
});
