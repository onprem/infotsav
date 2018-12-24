
export const registerFunctions = (last) => {
  // Variables
  var questions = last.state.questions;
  var progressButton = document.getElementById('progressButton');
  var register = document.getElementById('register');
  var inputContainer = document.getElementById('inputContainer');
  var inputField = document.getElementById('inputField');
  var inputLabel = document.getElementById('inputLabel');
  var selectBox = document.getElementById('selectBox');
  var inputProgress = document.getElementById('inputProgress');
  var progress = document.getElementById('progress');
  //
  var tTime = 100  // transition transform time from #register in ms
  var wTime = 200  // transition width time from #register in ms

  // init
  // --------------
  var position = 0

  putQuestion()

  progressButton.addEventListener('click', validate)
  inputField.addEventListener('keyup', function(e){
    transform(0, 0) // ie hack to redraw
    if(e.keyCode === 13) validate()
  })
  selectBox.addEventListener('keyup', function(e){
    transform(0, 0) // ie hack to redraw
    if(e.keyCode === 13) validate()
  })

  // functions
  // --------------

  // load the next question
  function putQuestion() {
    inputLabel.innerHTML = questions[position].question

    if(questions[position].type === 'sellect'){
      inputField.classList.add('doNotDisplay');
      selectBox.classList.remove('doNotDisplay');
      selectBox.focus();
    }
    else {
      inputField.classList.remove('doNotDisplay');
      selectBox.classList.add('doNotDisplay');
      inputField.value = ''
      inputField.type = questions[position].type || 'text' 
      // if(inputField.type === 'number'){
      //   inputField.setAttribute('min',10);
      //   inputField.setAttribute('max',10);
      // }

      inputField.focus()
    }

    showCurrent()
  }
  
  // when all the questions have been answered
  function done() {
    
    // remove the box if there is no next question
    register.className = 'close'
    
    // add the h1 at the end with the welcome text

    // var h1 = document.createElement('h1')
    // h1.appendChild(document.createTextNode('Welcome ' + questions[0].value + '!'))
    // h1.classList.add('registerDoneDone');
    // setTimeout(function() {
    //   register.parentElement.appendChild(h1)     
    //   setTimeout(function() {h1.style.opacity = 1}, 50)
    // }, eTime)

    last.setState({username: questions[0].value, password: questions[1].value });
    // window.location.href = '/events';
    
  }

  // when submitting the current question
  function validate() {
    if (questions[position].type === 'emaill'){
        questions[position].value = inputField.value.toLowerCase();
    }
    else
        questions[position].value = inputField.value
    // check if the pattern matches
    if (!inputField.value.match(questions[position].pattern || /.+/)) wrong()
    else ok(function() {
      
      // set the progress of the background
      progress.style.width = ++position * 100 / questions.length + 'vw'

      // if there is a new question, hide current and load next
      if (questions[position]) hideCurrent(putQuestion)
      else hideCurrent(done)
             
    })

  }

  // helper
  // --------------

  function hideCurrent(callback) {
    inputContainer.style.opacity = 0
    inputProgress.style.transition = 'none'
    inputProgress.style.width = 0
    setTimeout(callback, wTime)
  }

  function showCurrent(callback) {
    inputContainer.style.opacity = 1
    inputProgress.style.transition = ''
    inputProgress.style.width = '100%'
    setTimeout(callback, wTime)
  }

  function transform(x, y) {
    register.style.transform = 'translate(' + x + 'px ,  ' + y + 'px)'
  }

  function ok(callback) {
    register.className = ''
    setTimeout(transform, tTime * 0, 0, 10)
    setTimeout(transform, tTime * 1, 0, 0)
    setTimeout(callback,  tTime * 2)
  }

  function wrong(callback) {
    register.className = 'wrong'
    for(var i = 0; i < 6; i++) // shaking motion
      setTimeout(transform, tTime * i, (i%2*2-1)*20, 0)
    setTimeout(transform, tTime * 6, 0, 0)
    setTimeout(callback,  tTime * 7)
  }

}