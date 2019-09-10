(function() {
    var calcQuestionID =  Math.floor (Math.random() * 19);    
    var pickQuestionID = calcQuestionID;


// console.log(pickQuestionID);
var Question = function (questionID, content, correctAnswer, answer0, answer1, answer2, answer3) {
    this.content = content; 
    this.questionID = questionID;
    this.correctAnswer = correctAnswer;
    this.answer0 = answer0;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    
}
    
Question.prototype.newQuestion = function() {       
        console.log(this.content);
        console.log('1. '+this.answer0);
        console.log('2. '+this.answer1);
        console.log('3. '+this.answer2);
        console.log('4. '+this.answer3);
}

Question.prototype.checkAnswer = function(ans) {        
        if (ans === this.correctAnswer) {
            console.log('Correct answer!');
        } else  {
            console.log('Wrong answer!' + ' The correct answer is: ' + this.correctAnswer);   
        }
}

var question = [];
 question[0] = new Question (1, 'Magyars are the people of which country?', 3, 'Slovakia', 'Romania', 'Hungary', 'Moldova');
 question[1] = new Question (2, 'Pilbara is a region in which Australian state?', 1, 'Western Australia', 'Queensland', 'New South Wales', 'Tasmania');
 question[2] = new Question (3, 'What is the capital of Armenia?', 3, 'Bataysk', 'Baku', 'Yerevan', 'Tbilisi');
 question[3] = new Question (4, 'The Chukchi Sea is north of which sea?', 2, 'White Sea', 'Bering Sea', 'Norwegian Sea', 'Beaufort Sea');
 question[4] = new Question (5, 'Where is the Levantine Basin found?', 3, 'North Pacific Ocean', 'Arctic Ocean', 'Mediterranean Sea', 'South Atlantic Ocean');
 question[5] = new Question (6, 'The Chalbi Desert and Cherangany Hills are found in which country?', 3, 'Tanzania', 'Democratic Republic of the Congo', 'Kenya', 'South Sudan');
 question[6] = new Question (7, 'Which country occupies most of Cisjordan?', 1, 'Israel', 'Jordan', 'Egypt', 'Turkey');
 question[7] = new Question (8, 'The Baikonur Cosmodrome, Russia\'s main space launch facility, is located in which country?', 1, 'Kazakhstan', 'Uzbekistan', 'Kyrgyzstan', 'Turkmenistan');
 question[8] = new Question (9, 'Lebanon gained independence from which country in 1943?', 3, 'Spain', 'United Kingdom', 'France', 'Germany');
 question[9] = new Question (10, 'The TauTona Gold Mine is the world\'s deepest mine; in which country can it be found?', 1, 'South Africa', 'Uganda', 'Brazil', 'Bolivia');
 question[10] = new Question (11, 'Rarotonga is an island of which country?', 4, 'Tonga', 'United States', 'Fiji', 'New Zealand');
 question[11] = new Question (12, 'The border between Wales and England lies near which line on longitude?', 2, 'One degree west', 'Three degrees west', 'Five degrees west', 'Seven degrees west');
 question[12] = new Question (13, 'The Isles of Scilly are an archipelago off the tip of which cape?', 1, 'Cape Cornwall', 'Cape Coral', 'Cape Horn', 'Cape Canaveral');
 question[13] = new Question (14, 'Within which country can two other independent countries be found?', 1, 'Italy', 'South Africa', 'Canada', 'Russia');
 question[14] = new Question (15, 'The Electoral Palatinate was a historic region along which river?', 4, 'Dneiper', 'Ural', 'Danube', 'Rhine');
 question[15] = new Question (16, 'Bujumbura is the capital of which country?', 2, 'Malawi', 'Burundi', 'Djibouti', 'Swaziland');
 question[16] = new Question (17, 'Which international river flows through Russia and China?', 4, 'Lena', 'Ob', 'Volga', 'Amur');
 question[17] = new Question (18, 'Which of these countries is the largest (by size)?', 1, 'France', 'Spain', 'Germany', 'United Kingdom');
 question[18] = new Question (19, 'Which country has a land border with Belarus, Estonia, Lithuania and Russia?', 2, 'Poland', 'Latvia', 'Georgia', 'Finland');

//question4.newQuestion();
question[pickQuestionID].newQuestion();
 var promptBox = parseInt(prompt('Please enter the correct answer:'));
question[pickQuestionID].checkAnswer(promptBox);
})();