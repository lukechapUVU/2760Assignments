document.querySelector('header > h1').innerText = "Grant's Tomb";
document.querySelector('header > h2').innerText = 'Literal Objects';

const question = {
    stem: `Who is in Grant's Tomb?`,
    option1: 'John',
    option2: 'Paul',
    option3: 'Grant',
    option4: 'George',
    correct: 3,
    display: (userChoice) => {
        document.querySelector('#stem').textContent = question.stem;
        document.querySelector('#ans1').textContent = question.option1;
        document.querySelector('#ans2').textContent = question.option2;
        document.querySelector('#ans3').textContent = question.option3;
        document.querySelector('#ans4').textContent = question.option4;
    },
    check: (userChoice) => {
        alert('test');
        if(userChoice == question.correct) {
            document.querySelector('#feedback').textContent = `You're correct!`
        }
        else {
            document.querySelector('#feedback').textContent = `That's incorrect, try again!`;
        }
    }
}

document.querySelector('#ans1').addEventListener('click', () => question.check(1));
document.querySelector('#ans2').addEventListener('click', () => question.check(2));
document.querySelector('#ans3').addEventListener('click', () => question.check(3));
document.querySelector('#ans4').addEventListener('click', () => question.check(4));

question.display();