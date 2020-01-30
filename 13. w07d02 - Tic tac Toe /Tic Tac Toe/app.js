console.log("Working")



const squareArray = new Array();

for (let x = 0; x <= 8; x++) {
    prompt["square" + x] = "";
};

$(function () {
    const character = prompt("Do you prefer X or 0?");
    $(".square").bind("click", function () {
        const squareID = $(this).attr("id");
    });
})

