export const contactFunctions = (last) => {
  // Variables
  var questions = last.state.questions;
  var submitButton = document.getElementById('submitButton');
  var contact = document.getElementById('contact');
  var inputContainers = document.getElementsByClassName('inputContainer');
  var inputFields = document.getElementsByClassName('inputField');
  var inputLabels = document.getElementsByClassName('inputLabel');
  //
  var tTime = 100  // transition transform time from #register in ms
  var wTime = 200  // transition width time from #register in ms

  // init
  var i = 0

  putQuestion()

  submitButton.addEventListener('click', validate)
  // inputField.addEventListener('keyup', function(e){
  //   transform(0, 0) // ie hack to redraw
  //   if(e.keyCode === 13) validate()
  // })

  // functions
  // --------------

  // load the next question
  function putQuestion() {
    for (i = 0; i < inputLabels.length; i++) {
        inputLabels[i].innerHTML = questions[i].question;
    }
  }
  
  // when all the questions have been answered
  function done() {    
    // remove the box if there is no next question
    contact.className = 'close'
    last.setState({questions, gotData: true});
    // window.location.href = '/events';
    
  }

  // when submitting the current question
  function validate() {
    var flag = true;
    for (i = 0; i < inputFields.length; i++) {
      if (questions[i].type === 'emaill'){
        questions[i].value = inputFields[i].value.toLowerCase();
      }
      else
        questions[i].value = inputFields[i].value
      // check if the pattern matches
      if (!inputFields[i].value.match(questions[i].pattern || /.+/)) {
        flag = false;
        wrong(inputContainers[i]);
      }
    }
    if (flag){
      ok(function() {
        hideCurrent(done)              
      })
    }
  }

  // helper
  // --------------

  function hideCurrent(callback) {
    for (i = 0; i < inputContainers.length; i++) {
      inputContainers[i].style.opacity = 0;
    }
    setTimeout(callback, wTime)
  }
  function transform(x, y, container) {
    container.style.transform = 'translate(' + x + 'px ,  ' + y + 'px)'
  }

  function ok(callback) {
    contact.className = ''
    setTimeout(callback,  tTime * 2)
  }

  function wrong(container) {
    container.classList.add('wrong');
    for(var i = 0; i < 6; i++) // shaking motion
      setTimeout(transform, tTime * i, (i%2*2-1)*20, 0, container)
    setTimeout(transform, tTime * 6, 0, 0, container)
  }
}