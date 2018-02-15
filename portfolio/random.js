
    (function () {
        const myQuestions = [
            {
                question: "How tall is Tyler?",
                answers: {
                    a: "5'2",
                    b: "6'0",
                    c: "4'8",
                    d: "5'5"
                },
                correctAnswer: "a"
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
                    a: "April ",
                    b: "JavaScript",
                    c: "CSS",
                    d: "Portugese"
                },
                correctAnswer: "c"
            }
        ];

        function buildQuiz() {
            const output = [];

           
            myQuestions.forEach((currentQuestion, questionNumber) => {
                
                const answers = [];

                
                for (letter in currentQuestion.answers) {
                    
                    answers.push(
                        `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
                    );
                }

                output.push(
                    `<div class="slide">
                    <div class="question"> ${currentQuestion.question} </div>
                    <div class="answers"> ${answers.join("")} </div>
                    </div>`
                );
            });

            quizContainer.innerHTML = output.join("");
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