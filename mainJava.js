//initiating global variables for counts to score quiz and update questions
var aCount = 0;
var bCount = 0;
var cCount = 0;
var dCount = 0;

let i = 0;

//arrays established with text that will be updated for each question
const questionNumber = [
    "Question One",
    "Question Two",
    "Question Three",
    "Question Four",
    "Question Five",
    "Question Six",
    "Question Seven",
    "Question Eight",
    "Question Nine",
    "Quesiton Ten"
]

const questions = [
    "What kind of person are <b>YOU</b> at a party?",
    "What is your favourite animal?",
    "Where would you rather sleep for the night?",
    "What is your favourite subject in school?",
    "Where would you like to live out of these countries?",
    "If you had to eat something for the rest of your life, what would it be?",
    "The best weather is...",
    "... and now what is the best season?",
    "Favourite Kardashian?",
    "Favourite candle scent?"
];

const aAnswer = [
    "Singing along to music! <br><br> <img src=\"Images/questionOneA.jpg\" alt=\"Two friends singing karaoke with microphones\">",
    "Dog <br> <br> <img src=\"Images/questionTwoA.jpg\" alt=\"A dog running through grass.\">",
    "<img src=\"Images/questionThreeA.jpg\" alt=\"Bedroom with view of sunset\">",
    "English <br> <br> <img src=\"Images/questionFourA.jpg\" alt=\"English Logo\">",
    "USA <br> <br> <img src=\"Images/questionFiveA.jpg\" alt=\"USA Flag Hnaging Off Building\">",
    "Pasta <br> <br> <img src=\"Images/questionSixA.jpg\" alt=\"Cooked Pasta.\">",
    "Sun! <br> <br> <img src=\"Images/questionSevenA.jpg\" alt=\"Sun Shining.\">",
    "Summer <br> <br> <img src=\"Images/questionEightA.jpg\" alt=\"Sunny Beach.\">",
    "Kim <br> <br> <img src=\"Images/questionNineA.jpg\" alt=\"Kim Kardashian.\">",
    "Vanilla <br> <br> <img src=\"Images/questionTenA.jpg\" alt=\"Raw Vanilla.\">"
];

const bAnswer = [
    "Party? I'm sitting in my room <br> <br> <img src=\"Images/questionOneB.jpg\" alt=\"Boy sitting in room alone.\">",
    "I'm not really an animal person <br> <br> <img src=\"Images/questionTwoB.jpg\" alt=\"No animals allowed sign.\">",
    "<img src=\"Images/questionThreeB.jpg\" alt=\"Bedroom with rainy outlook and fairy lights\">",
    "Maths <br> <br> <img src=\"Images/questionFourB.jpg\" alt=\"Maths Logo\">",
    "United Kingdom <br> <br> <img src=\"Images/questionFiveB.jpg\" alt=\"Picture of Big Ben, London.\">",
    "Bread <br> <br> <img src=\"Images/questionSixB.jpg\" alt=\"Loaf of Bread.\">",
    "The rain <br> <br> <img src=\"Images/questionSevenB.jpg\" alt=\"Rain Hitting Umbrella.\">",
    "Autumn <br> <br> <img src=\"Images/questionEightB.jpg\" alt=\"An Autumn Day at the Park.\">",
    "None of them <br> <br> <img src=\"Images/questionNineB.jpg\" alt=\"A Red Cross.\">",
    "Cotton <br> <br> <img src=\"Images/questionTenB.jpg\" alt=\"Cotton from a Cotton Plant.\">"
];

const cAnswer = [
    "Being the life of the party, DUH <br> <br> <img src=\"Images/questionOneC.jpg\" alt=\"Woman centre of attention in party\">",
    "Dolphin <br> <br> <img src=\"Images/questionTwoC.jpg\" alt=\"A dolphin in water.\">",
    "<img src=\"Images/questionThreeC.jpg\" alt=\"Bedroom with view of outer space\">",
    "Art <br> <br> <img src=\"Images/questionFourC.jpg\" alt=\"Art Logo.\">",
    "Italy <br> <br> <img src=\"Images/questionFiveC.jpg\" alt=\"Italian Town on Cliffside.\">",
    "Sweets! <br> <br> <img src=\"Images/questionSixC.jpg\" alt=\"Mixture of Sweets.\">",
    "I love all weather! <br> <br> <img src=\"Images/questionSevenC.jpg\" alt=\"Mixture of Weather.\">",
    "Spring <br> <br> <img src=\"Images/questionEightC.jpg\" alt=\"Cherry Blossom in Bloom.\">",
    "Khloe <br> <br> <img src=\"Images/questionNineC.jpg\" alt=\"Khloe Kardashian.\">",
    "Birthday cake <br> <br> <img src=\"Images/questionTenC.jpg\" alt=\"Birthday Cake with Sprinkles.\">"
];

const dAnswer = [
    "Chatting to people I know <br> <br> <img src=\"Images/questionOneD.jpg\" alt=\"Two friends chatting at party.\">",
    "Cat <br> <br> <img src=\"Images/questionTwoD.jpg\" alt=\"A kitten looking playful.\">",
    "<img src=\"Images/questionThreeD.jpg\" alt=\"Bedroom with all glass surroundings looking out to greenery and nature\">",
    "Languages <br> <br> <img src=\"Images/questionFourD.jpg\" alt=\"Pile of language Books.\">",
    "France <br> <br> <img src=\"Images/questionFiveD.jpg\" alt=\"Cityscape of Paris featuring Eiffel Tower.\">",
    "Chocolate <br> <br> <img src=\"Images/questionSixD.jpg\" alt=\"Mixture of Chocolate.\">",
    "Snow <br> <br> <img src=\"Images/questionSevenD.jpg\" alt=\"Snowy Scene.\">",
    "Winter <br> <br> <img src=\"Images/questionEightD.jpg\" alt=\"Cold Wintery Scene.\">",
    "Kourtney <br> <br> <img src=\"Images/questionNineD.jpg\" alt=\"Kourtney Kardashian.\">",
    "Lavender <br> <br> <img src=\"Images/questionTenD.jpg\" alt=\"Lavender in Field.\">"
];

//function for calculating the users result
function finalResult() 
{

    //to be able to check if it functioned as planned in console log
    console.log ("This is aCount: " + aCount);
    console.log ("This is bCount: " + bCount);
    console.log ("This is cCount: " + cCount);
    console.log ("This is dCount: " + dCount);

    //establishing local variables to change different style elements
    const mainQuiz = document.getElementById("mainQuiz");
    mainQuiz.style.display = 'none';

    const mainResults = document.getElementById("mainResults");
    mainResults.style.display = 'block';

    const button1 = document.getElementById("finalResult");
    button1.style.display = "none";

    //second nested if/else if statements to calculate which total has the highest count
    if (aCount > bCount) 
    {
        if (aCount > cCount)
        {
            if (aCount > dCount)
            {
                document.getElementById("finalId").innerHTML = "You are an Iced Latte with 5 Pumps of Vanilla!";
                document.getElementById("finalPicture").innerHTML = "<img src=\"Images/icedVanillaLatte.jpg\" alt=\"Iced Vanilla Latte\">";
                document.getElementById("finalText").innerHTML = "You are as basic as they come, you follow the trends and stick to what you know! Keep with it!";
            }
        }
    } 
    else if (bCount > aCount) 
    {
        if (bCount > cCount) 
        {
            if (bCount > dCount) 
            {
                document.getElementById("finalId").innerHTML = "You are a Black Coffee!";
                document.getElementById("finalPicture").innerHTML = "<img src=\"Images/blackCoffee.jpg\" alt=\"Black Coffee\">";
                document.getElementById("finalText").innerHTML = "You are straight to the point and are a minimal person. You are transparent and honest with anyone you meet";
            }
        }
    }
    else if (cCount > aCount) 
    {
        if (cCount > bCount) 
        {
            if (cCount > dCount) 
            {
                document.getElementById("finalId").innerHTML = "You are a Unicorn Frappuccino!";
                document.getElementById("finalPicture").innerHTML = "<img src=\"Images/unicornFrap.jpg\" alt=\"Bright Purple Frappuccino\">";
                document.getElementById("finalText").innerHTML = "You are unique! Like this drink you are sweet and you are full of personality. You are definitely the life of any party you go to!";
            }
        }
    }
    else if (dCount > aCount) 
    {
        if (dCount > bCount) 
        {
            if (dCount > cCount) 
            {
                document.getElementById("finalId").innerHTML = "You are a Mocha!";
                document.getElementById("finalPicture").innerHTML = "<img src=\"Images/mocha.jpg\" alt=\"Mocha Coffee\">";
                document.getElementById("finalText").innerHTML = "You are on the adventurous side of life but still like to keep quiet and reserved! Travelling the world is your goal, go for it!";
            }
        }
    }
    else if (aCount == bCount || aCount == cCount || aCount == dCount || bCount == cCount || bCount == dCount || cCount == dCount)
    {
        document.getElementById("finalId").innerHTML = "You are a Flat White!";
        document.getElementById("finalPicture").innerHTML = "<img src=\"Images/flatWhite.jpg\" alt=\"Flat White Coffee\">";
        document.getElementById("finalText").innerHTML = "You are a mixed bag! Forever changing your mind and personality!"; 
    }
}

//function for when user clicks submit answer button
function submitAnswer()
{
    //if statements to check which radio button was checked and to add to the relevant count
    if(document.getElementById("answerOne").checked)
    {
        aCount++;
    }

    if(document.getElementById("answerTwo").checked)
    {
        bCount++;
    }

    if(document.getElementById("answerThree").checked)
    {
        cCount++;
    }

    if(document.getElementById("answerFour").checked)
    {
        dCount++;
    }

    //statement to disable button once it has been clicked so user can't manipulate count
    const button1 = document.getElementById("submitAnswer");
    button1.style.display = "none";

    const button2 = document.getElementById("nextQuestion");
    button2.style.display = "inline-block";

    //if statement to show final result button when questions are done and to hide other buttons
    if (i == 9)
    {
        const button3 = document.getElementById("finalResult");
        button3.style.display = "inline-block";

        const button2 = document.getElementById("nextQuestion");
        button2.style.display = "none";
    }
   
}

//function for when reset button is clicked
function resetQuiz()
{
    //a message to confirm this will reset the users progress, in case it was hit by accident
    if (confirm("This will reset the quiz and your progress! Click OK below to continue.") == true) {

        //reseting global variables to 0 to restart count
        i = 0;
        aCount = 0;
        bCount = 0;
        cCount = 0;
        dCount = 0;

        const mainQuiz = document.getElementById("mainQuiz");
        mainQuiz.style.display = "inline-block";

        //statements to reset questions to the first one
        document.getElementById("questionNumber").innerHTML = questionNumber[i];
        document.getElementById("mainQuestion").innerHTML = questions[i];
        document.querySelector("#answerOne ~ label").innerHTML = aAnswer[i];
        document.querySelector("#answerTwo ~ label").innerHTML = bAnswer[i];
        document.querySelector("#answerThree ~ label").innerHTML = cAnswer[i];
        document.querySelector("#answerFour ~ label").innerHTML = dAnswer[i];

        document.getElementById("finalId").innerHTML = "";
        document.getElementById("finalPicture").innerHTML = "";
        document.getElementById("finalText").innerHTML = "";

        //reseting the style of all the buttons
        const button1 = document.getElementById("submitAnswer");
        button1.style.display = "inline-block";
   
        button1.disabled = false;
   
        const button2 = document.getElementById("nextQuestion");
        button2.display = "inline-block";

        const button3 = document.getElementById("finalResult");
        button3.style.display = "none";

        const mainResults = document.getElementById("mainResults");
        mainResults.style.display = "none";
    }
}

//function for when start quiz button is clicked
function startButton()
{
    const mainQuiz = document.getElementById("mainQuiz");
    mainQuiz.style.display = "inline-block";
    
    //statements for showing initial questions using the global arrays
    document.getElementById("questionNumber").innerHTML = questionNumber[i];
    document.getElementById("mainQuestion").innerHTML = questions[i];
    document.querySelector("#answerOne ~ label").innerHTML = aAnswer[i];
    document.querySelector("#answerTwo ~ label").innerHTML = bAnswer[i];
    document.querySelector("#answerThree ~ label").innerHTML = cAnswer[i];
    document.querySelector("#answerFour ~ label").innerHTML = dAnswer[i];

    const button1 = document.getElementById("submitAnswer");
    button1.style.display = "inline-block";

    const button2 = document.getElementById("nextQuestion");
    button2.display = "inline-block";

    const button3 = document.getElementById("startButton");
    button3.style.display = "none";

    const quizButtons = document.getElementById("quizButtons");
    quizButtons.style.display = "block";

    const intro = document.getElementById("introduction");
    intro.style.display = "none";
}

//function for when next question button is clicked
function nextQuestion()
{
    //variable is incremented to update the questions
    i++;
    

    const button1 = document.getElementById("submitAnswer");

    const button2 = document.getElementById("nextQuestion");
    button2.style.display = "none";


    //if else statement to reset submit answer button for the next question and remove at end of quiz
    if (i < 10) {
        button1.style.display = "inline-block";
    }
    else {
        button1.style.display = "none";
    }
    
    const radioButton1 = document.getElementById("answerOne");
    radioButton1.checked = false;

    const radioButton2 = document.getElementById("answerTwo");
    radioButton2.checked = false;

    const radioButton3 = document.getElementById("answerThree");
    radioButton3.checked = false;

    const radioButton4 = document.getElementById("answerFour");
    radioButton4.checked = false;


    //statement to update the questions each time the button is clicked - using arrays
    document.getElementById("questionNumber").innerHTML = questionNumber[i];
    document.getElementById("mainQuestion").innerHTML = questions[i];
    document.querySelector("#answerOne ~ label").innerHTML = aAnswer[i];
    document.querySelector("#answerTwo ~ label").innerHTML = bAnswer[i];
    document.querySelector("#answerThree ~ label").innerHTML = cAnswer[i];
    document.querySelector("#answerFour ~ label").innerHTML = dAnswer[i];

}
