// if (typeof jQuery == 'undefined') {
//     console.log('oops! I still have to link my jQuery properly!');
// } else { console.log('I did it! I linked jQuery and this js file!') };

//Year 1

$(() => {
    $('#container') // Query for your div with the id of container
    const $container = $('#container') // set it to a variable named $container
    console.log($container) // console.log $container
    const $h1 = $("<h1>") // Create an <h1> element and set it to a variable called $h1
    console.log($h1)
    $h1.text("Hogwarts") // Add some text inside the h1 element. Example text: 'Hogwarts' (you have to .append the h1 to be visible on the page)
    $("#container").append($h1) // Append your $h1 to your $container


    //year2 
    // Following what you did in Year 1, add the following:

    // h2 element with your name
    const $h2 = $("<h2>")
    $h2.text("Andrei")
    $("#container").append($h2)

    // h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin)

    const $h3 = $("<h3>")
    $h3.text("Gryffindor")
    $("#container").append($h3)

    //h4 element with your pet's name
    //this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
    //h4 element with your wand (You can make it whatever you want.
    //Need help coming up with one? Here is one of many websites to help you find your wand playbuzz.com )

    const $h4 = $("<h4>")
    $h4.addClass("dog").text("Griff")
    $h4.text("Hawthorn Wand with Dragon Heartstring Core")
    $("#container").append($h4)

});




