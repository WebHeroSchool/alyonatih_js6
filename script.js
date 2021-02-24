const quizArray = [
                      {question: 'question1', correctAnswer: 'a'},
                      {question: 'question2', correctAnswer: 'b'},
                    	{question: 'question3', correctAnswer: 'c'},
                    ]

let result = 0; //сколько правильных ответов


  quizArray.forEach(function(item, quizArray) {
  	let userAnswer = prompt(item.question);
     if(userAnswer.toLowerCase() == item.correctAnswer) {
     	result = result + 1;
     }
     return result;
  });

document.getElementById('quiz').innerHTML = 'Поздравляем у вас ' + result + ' правильных ответов!';