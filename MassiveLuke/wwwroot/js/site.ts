/// <reference path="../../node_modules/@types/semantic-ui-modal/index.d.ts" />
import 'jquery';
import 'semantic-ui-sass';

document.addEventListener("DOMContentLoaded", () => {
    let message: string = "Hello World";
    console.log(message);
});

document.getElementById('auger-example1').addEventListener("click", () => {
    console.log("aaaa");
    $('.ui.basic.test.modal')
        .modal({
            closable: false,
            onDeny: function () {
                window.alert('Wait not yet!');
                return false;
            },
            onApprove: function () {
                window.alert('Approved!');
            }
        })
        .modal('show');
});
