export default function printMe() {
    console.log("I get called from print.js!");

    $(document).ready(function () {
        console.log("i just jQuery'd this: ", $(".hello")[0]);
    });
}
