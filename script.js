let ques = document.querySelector(".heading")
let options = document.querySelectorAll(".option")
let quizscore = document.querySelector(".score")
let btn = document.getElementById("restart")
let questions=[
    {
   'que':'which one is a markup language?',
   'a':'HTML',
   'b':'Css',
   'c':'Javascript',
   'd':'php',
   'correct':'a'
    },
    {
   'que':'Which one is mostly used for game dev?',
   'a':'HTML',
   'b':'java',
   'c':'c++',
   'd':'Nodejs',
   'correct':'b'
    },
    {
   'que':'Which language is convenient for competative progamming?',
   'a':'c++',
   'c':'Javascript',
   'b':'C#',
   'd':'React',
   'correct':'a'
    }
]
let total = questions.length
let right = 0
let wrong = 0
let index = 0

const getQues=(()=>{
    reset()
    if(index == total){
       endQuiz()
    }
    let data = questions[index]
    ques.innerText = `${index+1}. ${data.que}`
    options[0].nextElementSibling.innerText = `${data.a}`
    options[1].nextElementSibling.innerText = `${data.b}`
    options[2].nextElementSibling.innerText = `${data.c}`
    options[3].nextElementSibling.innerText = `${data.d}`
})

const submitQuiz=(()=>{
    let data = questions[index]
    let correctans = ans()
    if(data.correct == correctans){
        right++
    }
    else{
        wrong++
    }
    index++
    getQues()
    score()
    return
})

const reset = (()=>{
    options.forEach((e)=>{
        e.checked = false
    })
})

const ans=(()=>{
    let selected
    options.forEach((e)=>{
        if(e.checked){
            selected = e.value
        }
    })
    return selected
})

const score=(()=>{
    quizscore.innerText = `${right}/${total} correct`
})

const restart = () => {
    index = 0;
    right = 0;
    wrong = 0;
    quizscore.innerText = "0/3 correct"; 
    getQues();
};
const endQuiz = (()=>{
    document.querySelector(".container").innerHTML = ` <h1>Quiz is over</h1> 
    <h2> ${right}/${total} are correct <h2/>`
})
btn.addEventListener("click", restart )
getQues()
