var car = null;

function init() {
    car = document.getElementById("carimg");
    /*car.style.position = "relative";*/
    car.style.left = "0px";
    car.style.top = "0px";
}

    function chooseEvent(e) {
        if (e.keyCode == 37) {
            var element = document.getElementById("carimg");
            element.style.left = parseInt(element.style.left) - 10 + 'px';
            console.log("Left");
        }
        if (e.keyCode == 39) {
            var element = document.getElementById("carimg");
            element.style.left = parseInt(element.style.left) + 10 + 'px';
            console.log("Right");
        }    
                
    }


    window.onload = init;

