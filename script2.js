function colour() {
     
    setInterval(function() {
 
        if (document.getElementById('got').style.color == 'black')
            var col1 = 'green';
        else
            col1 = 'black';
 
        // setting value of color 1 through var

        document.getElementById('got').style.color = col1;
        console.log("Changed Bro!")
        // changing color of h1 in html
    }, 10);
 
}

colour();