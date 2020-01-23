// if (typeof jQuery == 'undefined') {
//     console.log('oops! I still have to link my jQuery properly!');
// } else { console.log('I did it! I linked jQuery and this js file!') };

//Year 1

$(() => {
    $('#container') // Query for your div with the id of container
    const $container = $('#container'); // set it to a variable named $container
    console.log($container); // console.log $container
    const $h1 = $("<h1>").attr("id", "header"); // Create an <h1> element and set it to a variable called $h1
    console.log($h1)
    $h1.text("Hogwarts"); // Add some text inside the h1 element. Example text: 'Hogwarts' (you have to .append the h1 to be visible on the page)
    $("#container").append($h1); // Append your $h1 to your $container


    //year2 
    // Following what you did in Year 1, add the following:

    // h2 element with your name
    const $name = $("<h2>").text("Andrei Huiban")
    $($container).append($name)

    // h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin)

    const $house = $("<h3>").text("Gryffindor");
    $($container).append($house);

    //h4 element with your pet's name. this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
    const $pet = $("<h4>").text("Camden").addClass("cat");
    $($container).append($pet);

    //h4 element with your wand (You can make it whatever you want).

    const $wand = $("<h4>").text("Hawthorn Wand with Dragon Heartstring Core").addClass("wand");
    $($container).append($wand);


    //     Year 3
    // Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):

    // list items of
    // butter beer
    // invisibility cloak (add a class of secret)
    // magic map (add a class of secret)
    // time turner (add a class of secret)
    // leash (for your pet, be sure to give this list element the same class as you gave your pet)
    // Bertie Bott's Every Flavor [Jelly] Beans.
    // append the unordered list to your container div

    const $ul = $("<ul>")

    $ul.attr("ul", "storage").val("trunk")
    const $li = $("<li>").text("butter beer")


    $li.addClass("secret").text("invisibility cloak")

    $("<ul>").appendTo("<li>")

    $("#container").append($ul, $li)




    //Year 4
    // You want to show off how many classes you are taking

    // Make a table
    // Hint: Look under More Examples, <p>Simple table with header</p> at MDN to see the correct HTML element layout

    // Right above your table add an h5 that says 'Spring 2017'
    // Inside the table add a thead element
    // Inside the thead element add two th elements
    // in the first th add the text Day
    // in the second th add the text Classes
    // Create a tr element and add two td elements inside.
    // in the first td add the day Monday
    // in the second td add the classes you are taking (Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.)
    // Create more tr elements with tds inside so that you have Monday - Friday and classes each of those days
    // In your main.css file, add a gray 1px solid border around your table, th elements and td elements
    // In your main.css file, add a rule that will center your table on the page



});




