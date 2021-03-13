function getParagraph1() {

    var inputs = [];

    for (var i = 1; i <= 6; i++) {

        inputs.push(document.getElementById("para1_input_box_" + i).value);
        
    }

    inputs.join(". ")

    document.getElementById("para1").innerHTML = inputs.join(". ");

}

// ------------------------------------------------- PARAGRAPH 2 ---------------------------------------------------------------------------------

function getParagraph2() {

    var inputs = [];

    for (var i = 1; i <= 6; i++) {

        inputs.push(document.getElementById("para2_input_box_" + i).value);
        
    }

    inputs.join(". ")

    document.getElementById("para2").innerHTML = inputs.join(". ");

}
