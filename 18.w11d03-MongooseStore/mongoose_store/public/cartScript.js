$(() => {


    let cartLength = $('.cart').length
    let cartArray = []
    let finalCart = []
    let searchIndex = -2;


    for (i = 0; i < cartLength; i++) {
        cartArray.push($('.cart')[i].innerHTML)
    }




    for (j = 0; j < cartArray.length; j++) {



        searchIndex = finalCart.findIndex(({ name }) => name == cartArray[j])


        if (searchIndex == -1) {
            finalCart.push(
                {
                    name: cartArray[j],
                    qty: 1
                }
            )

        } else {
            finalCart[searchIndex].qty += 1;
        }
    }


    $('.container').empty();
    console.log(cartArray)
    console.log(finalCart)


    for (let element of finalCart) {
        console.log(typeof element)
        if (element.name.length > 0) {
            $product = $('<div>').text(element.name).addClass("cart")
            $qty = $('<div>').text(element.qty).addClass("qty")
            $('.container')
                .append($product)
                .append($qty)
        }
    }



})