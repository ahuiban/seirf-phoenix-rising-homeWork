const squareArray = new Array();
const characterUser;
setUserCharacter();
const characterAuto = (characterUser == "x") ? "0" : "X";

for (let x = 0; x <= 8; x++) {
    squareArray["square" + x] = "";
};

$(function () {
    $(".scuare").blind("click", function () {
        const squareID = $(this).attr("id");

        if (!squareArray[squareID]) {
            squareArray[squareID] = characterUser;
            $(this).html(characterUser);
            addComputerchar();
        }
    });
});

function setUsercharacter() {
    characterUser = prompt("What do you choose? X or 0?");
    if (characterUser != "x" && characterUser != "0") {
        setUserCharacter();
    }
}

function addComputerchar() {
    randNr = Math.floor((Math.random() * 8) + 1);

    if (squareArray["square" + randNr] == "") {
        squareArray["square" + randNr] = characterAuto;
        $("#square" + randNr).html(characterAuto);
    } else {
        addComputerchar();
    }
}





