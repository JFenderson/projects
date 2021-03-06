
    (function () {
        const myQuestions = [
            {
                question: "Whats the hardest Language?",
                answers: {
                    a: "HTML",
                    b: "JavaScript",
                    c: "CSS",
                    d: "Portugese"
                },
                correctAnswer: "c"
            },
            {
                question: "Where is Lydia orginally from?",
                answers: {
                    a: "Birmingham",
                    b: "Weptumka",
                    c: "Hazel Green",
                    d: "Mobile"
                },
                correctAnswer: "c"
            },
            {
                question: "Whats the hardest Language?",
                answers: {
                    a: "HTML",
                    b: "JavaScript",
                    c: "CSS",
                    d: "Portugese"
                },
                correctAnswer: "c"
            },
            {
                question: "How tall is Tyler(teacher)?",
                answers: {
                    a: "5'2",
                    b: "6'0",
                    c: "4'8",
                    d: "5'5"
                },
                correctAnswer: "a"
            },
            {
                question: "What high-school did Matthew go to?",
                answers: {
                    a: "Parker HS",
                    b: "Ensley HS",
                    c: "Hoover HS",
                    d: "none of the above"
                },
                correctAnswer: "d"
            },
            {
                question: "how old is oscar?",
                answers: {
                    a: "26",
                    b: "32",
                    c: "24",
                    d: "19"
                },
                correctAnswer: "c"
            },
            {
                question: "When does class end?",
                answers: {
                    a: "April 22 ",
                    b: "April 8",
                    c: "March 30",
                    d: "Today"
                },
                correctAnswer: "b"
            },
            {
                question: "How tall is tyler(student)?",
                answers: {
                    a: "6'1",
                    b: "5'10",
                    c: "6'4",
                    d: "Hell if I know"
                },
                correctAnswer: "d"
            },
            {
                question: "who's always unplugging the computers?",
                answers: {
                    a: "Matthew",
                    b: "Ana",
                    c: "Lydia",
                    d: "Andrew"
                },
                correctAnswer: "d"
            },
            {
                question: "who is the troll-god on slack?",
                answers: {
                    a: "Chase",
                    b: "Matthew",
                    c: "Andrew",
                    d: "Tyler(teacher)"
                },
                correctAnswer: "c"
            },
            {
                question: "How many students were there on the first day on class?",
                answers: {
                    a: "9",
                    b: "14",
                    c: "12",
                    d: "16"
                },
                correctAnswer: "b"
            }
        ];

      var results = myQuestions.reduce((map, obj) => {
          map[obj.key] = obj.val;
          return map;
      })

      for(i = 0; i < results.length;i++){
          console.log(results[i]);
      }
      


    // myQuestions.map((o) => {
    //     return Object.keys(o)
    // }).reduce((prev, curr) =>{
    //     return prev.concat(curr)
    // }).filter((col, i , array) => {
    //     return array.indexOf(col) === i
    //     console.log(o)
    // });

    




        function buildQuiz() {
            const output = [];

           
            myQuestions.forEach((currentQuestion, questionNumber) => {
                
                const answers = [];
                
        
                
                for (letter in currentQuestion.answers) {
                    
                    answers.push(
                        
                    `<ul class="radioBtn">
                        <li>
                            <input class="selector" type="radio" :checked id="option" name="question${questionNumber}" value="${letter}">
                            <label for="option">
                            ${letter} : ${currentQuestion.answers[letter]}
                            </label>
                            <div class="check"><div class="inside"></div></div>
                        </li>
                    </ul>`
                    );
                }

                output.push(
                    `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                    </div>`
                );
            });
            // console.log();
            quizContainer.innerHTML = output.join("");

            console.log(quizContainer)
        }

        function showResults() {
            const answerContainers = quizContainer.querySelectorAll(".answers");

            let numCorrect = 0;

            myQuestions.forEach((currentQuestion, questionNumber) => {

                const answerContainer = answerContainers[questionNumber];
                const selector = `input[name=question${questionNumber}]:checked`;
                const userAnswer = (answerContainer.querySelector(selector) || {}).value;

                if (userAnswer === currentQuestion.correctAnswer) {

                    numCorrect++;

                    answerContainers[questionNumber].style.color = "lightgreen";
                } else {

                    answerContainers[questionNumber].style.color = "red";
                }
            });

      
            resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
        }


        function showSlide(n) {
            slides[currentSlide].classList.remove('active-slide');
            slides[n].classList.add('active-slide');
            currentSlide = n;
            if(currentSlide === 0){
                previousButton.style.display = 'none';
            }else{
                previousButton.style.display = 'inline-block';
            }
            if(currentSlide === slides.length-1){
                nextButton.style.display = 'none';
                submitButton.style.display = 'inline-block';
            }else{
                nextButton.style.display = 'inline-block';
                submitButton.style.display = 'none';
            }
        }

        

        function showNextSlide() {
            showSlide(currentSlide + 1)
        }

        function showPreviousSlide(){
            showSlide(currentSlide - 1)
        }


        const quizContainer = document.getElementById("quiz");
        const resultsContainer = document.getElementById("results");
        const submitButton = document.getElementById("submit");

        buildQuiz();

        const previousButton = document.getElementById('previous');
        const nextButton = document.getElementById('next');
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        showSlide(0);

        submitButton.addEventListener("click", showResults);
        previousButton.addEventListener('click', showPreviousSlide);
        nextButton.addEventListener('click', showNextSlide);
        
    })();