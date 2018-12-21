var names= ["sophia","olivia","emma","ava","isabella","jackson","liam","noah","aiden","caden"];
var colors= ["red","orange","yellow","green","blue","purple","indigo","violet","grey","black","white","pink"];
var languages= ["english","french","spanish","swahili","latin","mandarin","arabic","russian","bengali","hindustani","malay","portuguese"];
var usCapitals= ["mongomery","juneau","phoenix","sacramento","denver","hartford","dover","tallahassee",
    "atlanta","honolulu","springfield","indianapolis","topeka","frankfort","agusta","annapolis","boston","lansing","jackson","helena",
    "lincoln","concord", "trenton","albany","raleigh","bismark","columbus","salem","harrisburg","providnece", "columbia","pierre","nashville",
    "austin","montpeilier","richmond","olympia","charleston", "madison","cheyenne"];
var worldCapitals= ["kabul","tirana","algiers","luanda","paris","caracas","bogota","lima",
    "seoul","armenia","nirobi","tokyo","bangkok","vienna","brussels","prague","berlin","athens","reykjavik","budapest","dublin","rome",
    "alletta","sofia","attowa","santiago","cairo","jakarta","baghdad","olso","doha","moscow","singapore","madrid","london","hanoi",];
var animals= ["bison","dolphin","eagle","pony","ape","lobster","monkey","cow","deer","duck","rabbit","spider","wolf",
    "turkey","lion","pig","snake","shark","bird","bear","fish","chicken","horse","cat","dog"];
var instruments= ["piano","guitar","violin","drums","saxophone","flute","cello","clarinet","trumpet","harp","keyboard","recorder",
    "violin","trumpet","bagpipes"];
var sports= ["soccer","football","basketball","cricket","tennis","track","rugby","boxing","volleyball","baseball", "hockey","badminton",
    "cycling","swimming","snooker","gymnastics","handball","wrestling", "skiing","rowing","polo","snowboarding","softball","biking","rugby"];
var Fruit= ["apple","strawberry","blackberry","kiwi","lychee","papaya","acai","apricot","avocado","cherry","coconut",
    "cranberry","dragonfruit","guava","mango","melon","peach","plum","pomegranate"];
var Disney= ["moana","incredibles","coco","frozen","zootopia","maleficent","tangled","aladdin","cars","brave","mulan","dumbo",
    "hercules","tarzan","pocahontas","cinderella","pinocchio","bambi","else","goofy","ariel","tiana","pluto","ursula",
    "olaf","scar","belle","simba","jafar","rapunzel","kristoff","merida","aurora","jasmine","mickey","mini"];

var image=["image/6.png","image/5.png","image/4.png","image/3.png","image/2.png","image/1.png","image/0.png"];
var letters= "abcdefghijklmnopqrstuvwxyz";
var catagories=["","Most Popular Names","Colors","Languages","US Capitals","World Capitals","Animals","Instruments","Sports","Fruit","Disney"]

var chosen;
var theWord="";
var answer="";
var ft="";
var guessesLeft=6;
var guess;
var guessedLetters="";
var wrongGuesses="";


function play(){
    select();
    lines(theWord);
    document.getElementById("left").innerHTML="Guesses Left: "+guessesLeft;
    document.getElementById("answer").innerHTML=answer;
    create();
    document.getElementById("images").src=image[guessesLeft];
    document.getElementById("subject").innerHTML="Category: "+catagories[chosen];
}

function select(){
    var chosen1=document.getElementById("category").value;
    chosen=parseInt(chosen1);
    var value="";
    if (chosen==1){
        value=names;
    }else if (chosen==2){
        value=colors;
    }else if (chosen==3){
        value=languages;
    }else if (chosen==4){
        value=usCapitals;
    }else if (chosen==5){
        value=worldCapitals;
    }else if (chosen==6){
        value=animals;
    }else if (chosen==7){
        value=instruments;
    }else if (chosen==8){
        value=sports;
    }else if (chosen==9){
        value=Fruit;
    }else if (chosen==10){
        value=Disney;
    }
    theWord=value[Math.floor(Math.random()*value.length)];
}

function run() {
    answer = "";
    guess=document.getElementById("inputguess").value;
    guess=guess.toLowerCase();
    check(guess, letters);
    if (ft == true) {
        guessedLetters = guessedLetters+guess;
        for(var i = 0; i < theWord.length; i++) {
            if(guessedLetters.indexOf(theWord[i]) == -1) {
                answer = answer + " _";

            } else {
                answer=answer+" "+theWord[i];
            }
        }
        number(theWord, guess);
        document.getElementById("error").innerHTML="";
    }
    document.getElementById("left").innerHTML = "Guesses Left: " + guessesLeft;
    document.getElementById("answer").innerHTML = answer;
    document.getElementById("images").src=image[guessesLeft];

    if (ft == false) {
        document.getElementById("error").innerHTML="Please enter a letter of the Alphabet that you have not guessed";
    }else if (answer.indexOf(" _") == -1) {
        document.getElementById("verdict").innerHTML="You Won:)";
        finish();
    }else if(guessesLeft == 0){
        document.getElementById("verdict").innerHTML="You Lost:(";
        finish();
    }
}

function check(guess,alphabet){
    for(var i=0; i<alphabet.length; i++){
        if(alphabet.indexOf(guess)==-1){
            ft=false;
            break;
        }if(guessedLetters.indexOf(guess)==-1){
            ft=true;
            break;
        }else{
            ft=false;
            break;
        }
    }

}

function lines(theWord){
    length=theWord.length;
    print="";
    for(var i=0; i<length; i++){
        print=print+" _ ";
    }
    answer=answer+print;
}

function clearField(field) {
    field.value = "";
}

function create() {
    var btn;
    var diva=document.getElementById("btn");
    btn=document.createElement("button");
    btn.setAttribute("onclick", "run()");
    btn.innerHTML = "Guess!";
    diva.appendChild(btn);
    var box;
    var divb=document.getElementById("box");
    box=document.createElement("input");
    box.setAttribute("type", "text");
    box.setAttribute("size", 2);
    box.setAttribute("maxlength", 1);
    box.setAttribute("id","inputguess")
    box.setAttribute("onclick","clearField(this)");
    divb.appendChild(box);
    document.getElementById("btn").style.display="block";
    document.getElementById("box").style.display="block";
}

function number(word,letter) {
    if(word.indexOf(letter)==-1){
        guessesLeft=guessesLeft-1;
        wrongGuesses=wrongGuesses+guess;
        document.getElementById("wrong").innerHTML=wrongGuesses;
    }

}

function finish() {
    btn.style.display="none";
    box.style.display="none";

    var restartbtn;
    var div=document.getElementById("restart");
    restartbtn=document.createElement("button");
    restartbtn.setAttribute("onclick", "restart()");
    restartbtn.innerHTML = "Restart";
    div.appendChild(restartbtn);
}

function restart() {
    theWord="";
    answer="";
    ft="";
    guessesLeft=6;
    guess;
    guessedLetters="";
    wrongGuesses="";
    $("#div1").show();

    document.getElementById("wrong").innerHTML="";
    document.getElementById("verdict").innerHTML="";
    document.getElementById("left").innerHTML = "";
    document.getElementById("answer").innerHTML = answer;
    document.getElementById("images").src="";
    document.getElementById("subject").innerHTML="";
    document.getElementById("btn").innerHTML="";
    document.getElementById("box").innerHTML="";
    document.getElementById("restart").innerHTML="";
    document.getElementById("category").value=0;
}

