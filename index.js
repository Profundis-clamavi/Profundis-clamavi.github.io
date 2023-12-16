let maxwellPoll = 7;
let monaPoll = 6;
let tenleyPoll = 4;

function submitForm() {
    if ($("input[id='maxwell']:checked").val())
        maxwellPoll += parseInt($("input[id='maxwell']:checked").val());
    if ($("input[id='mona']:checked").val()) {
        monaPoll += parseInt($("input[id='mona']:checked").val());
    }
    if ($("input[id='tenley']:checked").val()) {
        tenleyPoll += parseInt($("input[id='tenley']:checked").val());
    }


    // Display the results
    $("#maxwellResult").text("Maxwell: " + maxwellPoll);
    $("#monaResult").text("Mona: " + monaPoll);
    $("#tenleyResult").text("Tenley: " + tenleyPoll);

    // Hide form and show results
    $("#poll").hide();
    if (window.innerWidth < 992) {
        $("#results").addClass("mx-2").show();
    }
    else {
        $("#results").addClass("mx-4").show();
    }

    $('#submitBtn').prop('disabled', true);
}
// ensures that there is input in both
function validateForm() {
    const nameInput = $("#name").val();
    const favCatInput = $("input[name='favCat']:checked").val();

    if (nameInput && favCatInput) {
        // Both fields are filled, enable the submit button
        $('#submitBtn').prop('disabled', false);
    } else {
        // Either name or favCat is not selected, keep the submit button disabled
        $('#submitBtn').prop('disabled', true);
    }
}
function updateClassBasedOnScreenSize() {

    if (window.innerWidth < 992) {
        $("#results").removeClass("mx-4");
        $("#results").addClass("mx-2");
    } else {
        $("#results").removeClass("mx-2");
        $("#results").addClass("mx-4");
    }
}

updateClassBasedOnScreenSize();
window.addEventListener("resize", updateClassBasedOnScreenSize);
