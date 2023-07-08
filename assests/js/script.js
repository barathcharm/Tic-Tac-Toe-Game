let xo_boxes = document.querySelector(".xo_boxes");
let xo_box = document.querySelectorAll(".xo_box");

let count = 2;
let x_img = document.querySelectorAll(".x_img");
let o_img = document.querySelectorAll(".o_img");
let xo_array = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
xo_box.forEach((e, index) => {
    e.addEventListener("click", el => {
        let st_ind;
        let lt_ind;
        
        if (index < 3) {
            st_ind = 0;
            lt_ind = index;
        }
        else if (index < 6) {
            st_ind = 1;
            lt_ind = index - 3;
        }
        else {
            st_ind = 2;
            lt_ind = index - 6;
        }
        if(xo_array[st_ind][lt_ind]!=0){
            return;
        }
        console.log("ii");
        if (count % 2 == 0) {
            x_img[index].classList.add("view");
            xo_array[st_ind][lt_ind] = 1;
        }
        else {
            o_img[index].classList.add("view");
            xo_array[st_ind][lt_ind] = 2;
        }

        count += 1;
        function allFill(){
            if(count>10){
            window.alert("Game ends");
            location.reload();
        }
        }
console.table(xo_array);
        setTimeout(checkGameStatus, 300);

        setTimeout(allFill, 300);

        

    })
})

// If X or O wins endGame() is invoked 

function endGame(value) {
    console.log("done");
    xo_boxes.classList.add(".not_view");
    if(value==2){
        window.alert("O wins");
        location.reload();
    }
    else{
        window.alert("X wins");
        location.reload();
    }


}

function checkGameStatus() {

    let t = xo_array;
    let x_value = 1;


    // Checking if the diagonal matches

    if (t[0][0] == x_value && t[1][1] == x_value && t[2][2] == x_value) {
        endGame(x_value);
    }
    else if (t[0][2] == x_value && t[1][1] == x_value && t[2][0] == x_value) {
        endGame(x_value);
    }

    // Checking if the row matches

    else if (t[0][0] == x_value && t[0][1] == x_value && t[0][2] == x_value) {
        endGame(x_value);
    }
    else if (t[1][0] == x_value && t[1][1] == x_value && t[1][2] == 1) {
        endGame(x_value);
    }
    else if (t[2][0] == x_value && t[2][1] == x_value && t[2][2] == x_value) {
        endGame(x_value);
    }

    // Checking if the column matches

    else if (t[0][0] == x_value && t[1][0] == x_value && t[2][0] == x_value) {
        endGame(x_value);
    }
    else if (t[0][1] == x_value && t[1][1] == x_value && t[2][1] == x_value) {
        endGame(x_value);
    }
    else if (t[0][2] == x_value && t[1][2] == x_value && t[2][2] == x_value) {
        endGame(x_value);
    }





    let o_value = 2;

    // Checking if the diagonal matches

    if (t[0][0] == o_value && t[1][1] == o_value && t[2][2] == o_value) {
        endGame(o_value);
    }
    else if (t[0][2] == o_value && t[1][1] == o_value && t[2][0] == o_value) {
        endGame(o_value);
    }

    // Checking if the row matches

    else if (t[0][0] == o_value && t[0][1] == o_value && t[0][2] == o_value) {
        endGame(o_value);
        console.log("17");
    }
    else if (t[1][0] == o_value && t[1][1] == o_value && t[1][2] == o_value) {
        endGame(o_value);
        console.log("16");
    }
    else if (t[2][0] == o_value && t[2][1] == o_value && t[2][2] == o_value) {
        endGame(o_value);
        console.log("15");
    }

    // Checking if the column matches

    else if (t[0][0] == o_value && t[1][0] == o_value && t[2][0] == o_value) {
        endGame(o_value);
        console.log("14");
    }
    else if (t[0][1] == o_value && t[1][1] == o_value && t[2][1] == o_value) {
        endGame(o_value);
        console.log("13");
    }
    else if (t[0][2] == o_value && t[1][2] == o_value && t[2][2] == o_value) {
        endGame(o_value);
        console.log("12");
    }



}

