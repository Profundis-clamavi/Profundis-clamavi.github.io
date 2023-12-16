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

    // Hide the form and show the results
    $("#poll").hide();
    $("#results").addClass("mx-5").show();
    $('#submitBtn').prop('disabled', true);
}

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