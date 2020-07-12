var board = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
            26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
            51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 
            76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
var arrboard = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18, p19, p20, p21, p22, p23, p24, p25, 
                p26, p27, p28, p29, p30, p31, p32, p33, p34, p35, p36, p37, p38, p39, p40, p41, p42, p43, p44, p45, p46, p47, p48, p49, p50, 
                p51, p52, p53, p54, p55, p56, p57, p58, p59, p60, p61, p62, p63, p64, p65, p66, p67, p68, p69, p70, p71, p72, p73, p74, p75, 
                p76, p77, p78, p79, p80, p81, p82, p83, p84, p85, p86, p87, p88, p89, p90, p91, p92, p93, p94, p95, p96, p97, p98, p99, p100];


let player1 =["P1", 0, 0];
let player2 =["P2", 0, 0];

const player1_button = document.getElementById('dice1');
const player2_button = document.getElementById('dice2');
function disableBtn1() {
    document.getElementById("dice1").disabled = true;
}

function enableBtn1() {
    document.getElementById("dice1").disabled = false;
}

function disableBtn2() {
    document.getElementById("dice2").disabled = true;
}

function enableBtn2() {
    document.getElementById("dice2").disabled = false;
}

player1_button.addEventListener('click',buttonAudio1);
player2_button.addEventListener('click',buttonAudio2);


// const player1_button = document.getElementById('dice1');
// const player2_button = document.getElementById('dice2');

// player1_button.addEventListener('click',buttonAudio1);
// player2_button.addEventListener('click',buttonAudio2);

let pos1;
let position1=player1[1];
let score1=player1[2];
let c1=0;
let p1_w = 0;
let pos2;
let position2=player2[1];
let score2=player2[2];
let c2=0;
let p2_w = 0;
let msg_out;
let msg_default = "";
let msg_out1="GAME OVER!"

// function wicketAudio(){
//     var wicket_audio = document.getElementById("wicket_audio");
//     wicket_audio.play();
// }

// function fourAudio(){
//     var four_audio = document.getElementById("four_audio");
//     four_audio.play();
// }

// function sixAudio(){
//     var six_audio = document.getElementById("six_audio");
//     six_audio.play();
// }

// function extrarunAudio(){
//     var extrarun_audio = document.getElementById("extrarun_audio");
//     extrarun_audio.play();
// }

// ---------------------------------------Player1 Game Code ---------------------------------------------------------------------------

function buttonAudio1(){
    disableBtn1();
    var button_audio1 = document.getElementById("button_audio1");
    button_audio1.play();
    setTimeout(rollDice1, 1000);
}

function rollDice1() {
    // pos1=5;
    pos1 = Math.floor(Math.random() * 6) + 1;
    console.log("P1 rolled:"+pos1);
    msg_out="Player-1 rolled "+pos1;
    document.querySelector('#msg').innerHTML = msg_out;
    setTimeout(function () { document.querySelector('#msg').innerHTML = msg_default; }, 1500);
    setTimeout(updatePosition1, 1000);
}

function updatePosition1() {
    position1 = position1 + pos1;
    if(position1>board[99]){
        position1 -= pos1; 
    }
    else if(position1==board[4] || position1==board[29] ||
        position1==board[24] || position1==board[54] ||
        position1==board[66] || position1==board[90] ||
        position1==board[96]){
        // wicketAudio();
        msg_out="Player-1 lost a wicket!";
        document.querySelector('#msg').innerHTML = msg_out;
        setTimeout(function () { document.querySelector('#msg').innerHTML = msg_default; }, 1500);

        p1_w++;
        
        if(p1_w>2){
            document.querySelector('#p1w').innerHTML = p1_w;
            position1=board[0];
            var element = document.getElementById("img1");
            element.remove();
            let template = '<img src="../images/icon3.png" id="img1">';
            arrboard[position1-1].innerHTML += template;
            msg_out="Player-2 won the game!";
            document.querySelector('#msg').innerHTML = msg_out;
            setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
            updateScore1();
            setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 2000);
            return;
        }
        document.querySelector('#p1w').innerHTML = p1_w;
        position1=board[0];
    }
    // else if(position1==board[4] || position1==board[29] ||
    //     position1==board[24] || position1==board[54] ||
    //     position1==board[66] || position1==board[90] ||
    //     position1==board[96]){
    //     // wicketAudio();
    //     msg_out="Player-1 lost a wicket!";
    //     document.querySelector('#msg').innerHTML = msg_out;
    //     setTimeout(function () { document.querySelector('#msg').innerHTML = msg_default; }, 2000);

    //     p1_w++;
    //     document.querySelector('#p1w').innerHTML = p1_w;
    //     // if(p1_w>=3){
    //     //     msg_out="Player-2 won the game!";
    //     //     document.querySelector('#msg').innerHTML = msg_out;
    //     //     setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
    //     //     setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
    //     //     setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
    //     //     return;
    //     // }
    //     position1=board[0];
    // }
    else if(position1==board[16] || position1==board[76] ||
        position1==board[81]){
            // fourAudio();
            msg_out="Player-1 hits a Four!";
            document.querySelector('#msg').innerHTML = msg_out;
            setTimeout(function () { document.querySelector('#msg').innerHTML = msg_default; }, 1500);
        position1 += 4;
    }
    else if(position1==board[37] || position1==board[59] ||
        position1==board[72]){
            // sixAudio();
            msg_out="Player-1 hits a Six!";
            document.querySelector('#msg').innerHTML = msg_out;
            setTimeout(function () { document.querySelector('#msg').innerHTML = msg_default; }, 1500);
        position1 += 6;
    }
    else if(position1==board[6] || position1==board[46]){
        // extrarunAudio();
        msg_out="Player-1 gets an extra run!";
        document.querySelector('#msg').innerHTML = msg_out;
        setTimeout(function () { document.querySelector('#msg').innerHTML = msg_default; }, 1500);
        position1 += 1;
    }
    c1++;
    if(c1>1)
    {
         var element = document.getElementById("img1");
         element.remove();
    }
    let template = '<img src="../images/icon3.png" id="img1">';
    arrboard[position1-1].innerHTML += template;
    setTimeout(updateScore1, 1000);
}

function updateScore1() {
    score1=position1;
    if(score1==board[99]){
        document.querySelector('#p1s').innerHTML = score1;
        msg_out="Player-1 won the game!";
        document.querySelector('#msg').innerHTML = msg_out;
        setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
        setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
        setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
        return;
    }
    // console.log("P1 score: "+score1);
    document.querySelector('#p1s').innerHTML = score1;
    enableBtn2();
}

//---------------------------------------------- Player 2 Game Code--------------------------------------------------------------

function buttonAudio2(){
    disableBtn2();
    var button_audio2 = document.getElementById("button_audio2");
    button_audio2.play();
    setTimeout(rollDice2, 1000);
}

function rollDice2() {
    // pos2=5;
    pos2 = Math.floor(Math.random() * 6) + 1;
    console.log("P2 rolled:"+pos2);
    msg_out="Player-2 rolled "+pos2;
    document.querySelector('#msg').innerHTML = msg_out;
    setTimeout(function () { document.querySelector('#msg').innerHTML = msg_default; }, 1500);
    setTimeout(updatePosition2, 1000);
}

function updatePosition2() {
    position2 = position2 + pos2;
    if(position2>board[99]){
        position2 -= pos2; 
    }
    else if(position2==board[4] || position2==board[29] ||
        position2==board[24] || position2==board[54] ||
        position2==board[66] || position2==board[90] ||
        position2==board[96]){
        // wicketAudio();
        msg_out="Player-2 lost a wicket!";
        document.querySelector('#msg').innerHTML = msg_out;
        setTimeout(function () { document.querySelector('#msg').innerHTML = msg_default; }, 1500);

        p2_w++;
        
        if(p2_w>2){
            document.querySelector('#p2w').innerHTML = p2_w;
            position2=board[0];
            var element = document.getElementById("img2");
            element.remove();
            let template = '<img src="../images/icon4.png" id="img2">';
            arrboard[position2-1].innerHTML += template;
            msg_out="Player-1 won the game!";
            document.querySelector('#msg').innerHTML = msg_out;
            setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
            updateScore2();
            setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 2000);
            return;
        }
        document.querySelector('#p2w').innerHTML = p2_w;
        position2=board[0];
    }
    // else if(position2==board[4] || position2==board[29] ||
    //     position2==board[24] || position2==board[54] ||
    //     position2==board[66] || position2==board[90] ||
    //     position2==board[96]){
    //     // wicketAudio();
    //     msg_out="Player-2 lost a wicket!";
    //     document.querySelector('#msg').innerHTML = msg_out;
    //     setTimeout(function () { document.querySelector('#msg').innerHTML = msg_default; }, 1500);

    //     p2_w++;
    //     document.querySelector('#p2w').innerHTML = p2_w;
    //     if(p2_w>=3){
    //         document.querySelector('#p2w').innerHTML = p2_w;
    //         msg_out="Player-1 won the game!";
    //         document.querySelector('#msg').innerHTML = msg_out;
    //         setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
    //         setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
    //         setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
    //         return;
    //     }
    //     position2=board[0];
    // }
    else if(position2==board[16] || position2==board[76] ||
        position2==board[81]){
            // fourAudio();
            msg_out="Player-2 hits a Four!";
            document.querySelector('#msg').innerHTML = msg_out;
            setTimeout(function () { document.querySelector('#msg').innerHTML = msg_default; }, 1500);
        position2 += 4;
    }
    else if(position2==board[37] || position2==board[59] ||
        position2==board[72]){
            // sixAudio();
            msg_out="Player-2 hits a six!";
            document.querySelector('#msg').innerHTML = msg_out;
            setTimeout(function () { document.querySelector('#msg').innerHTML = msg_default; }, 1500);
        position2 += 6;
    }
    else if(position2==board[6] || position2==board[46]){
        // extrarunAudio();
        msg_out="Player-2 gets an extra run!";
        document.querySelector('#msg').innerHTML = msg_out;
        setTimeout(function () { document.querySelector('#msg').innerHTML = msg_default; }, 1500);
        position2 += 1;
    }
    c2++;
    if(c2>1)
    {
         var element = document.getElementById("img2");
         element.remove();
    }
    let template = '<img src="../images/icon4.png" id="img2">';
    arrboard[position2-1].innerHTML += template;
    setTimeout(updateScore2, 1000);
}

function updateScore2() {
    score2=position2;
    if(score2==board[99]){
        document.querySelector('#p2s').innerHTML = score2;
        msg_out="Player-2 won the game!";
        document.querySelector('#msg').innerHTML = msg_out;
        setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
        setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
        setTimeout(function () { document.querySelector('#msg').innerHTML = msg_out; }, 1000);
        return;
    }
    console.log("P2 score: "+score2);
    document.querySelector('#p2s').innerHTML = score2;
    enableBtn1();
}

