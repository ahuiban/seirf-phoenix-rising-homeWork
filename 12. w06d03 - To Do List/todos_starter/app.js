
$(() => {
    $('#to-do-list').append(toDoTasks)
    $('#submit').on('click', formSubmit)


})


const toDoTasks = []

const Update = () => {


    //change background color
    $(event.currentTarget).parent().css("background", "#ED6495")


    //.append to completed
    $('#completed').append($(event.currentTarget).parent())

}

const formSubmit = () => {
    console.log($('#input-box').val())

    //input value and adds appropriate class
    $newToDo = $('<div>').text($('#input-box').val()).addClass("to-do-item")
    toDoTasks.push($newToDo);



    //completed button > to do
    $completedButton = $('<button>').addClass("completed-Button").text("done").css("background", "#c7f2c7").css("color", "#003300")
    $newToDo.append($completedButton)

    // listener >> completed
    $completedButton.on('click', Update)

    //appends >> to-do-list
    $('#to-do-list').append(toDoTasks)
    event.preventDefault();
}



