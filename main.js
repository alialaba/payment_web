let currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    let formOne = document.getElementsByClassName('page');
    formOne[n].style.display = "block";
    // fixStepIndicator()
}


function nextPrev(n) {
    // This function will figure out which tab to display
    var formOne = document.getElementsByClassName("page");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    formOne[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= formOne.length) {
        //...the form gets submitted:
        // document.getElementById("regForm").submit();
        setTimeout(function() {
                alert('Form Completed Successfully, press OK');
                location.reload();
            }, 500)
            // return false;
    } else {
        // Otherwise, display the correct tab:
        showTab(currentTab);
    }

}

function validateForm() {
    // This function deals with validation of the form fields
    var formOne, y, i, valid = true;
    formOne = document.getElementsByClassName("page");
    y = formOne[currentTab].getElementsByTagName("input")
        // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

/*function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}*/