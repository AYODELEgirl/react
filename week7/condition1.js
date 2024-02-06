// create a function that adds five marks to the marks of people that scored 38,48,58,68
// first method
function addFive (score){
  let finalScore = 0
  if(score >= 38 && score <= 69 && score % 5 >= 3){
    finalScore = score + 5
  }
  else{
    finalScore = score
  }
  return finalScore
}

// second method
function method2 (score){
  let scoreStr = String(score)
  let finalScore = 0
  if((scoreStr[1] == '8' || scoreStr[1] == '9') && score < 70 && score > 37){
    finalScore = score + 5
  }
  else{
    finalScore = score
  }
    return finalScore
}

// write function that takes two parmeters and gives a return statement of passed or failed based on what the user get
function result (english, maths){
 let avg = (english + maths)/2
 let status
 if (avg >= 50){
  status = `congratulations your score is ${avg.toFixed(1)}, you passed`
 }
 else{
  status = `sorry your score is ${avg.toFixed(1)}, you failed`
 }
  return status
}
result()

// if-else else-if statement
function grade(score){
  let gradeVal = ''
  if(score <= 100 && score !== String(score)){
      if(score >= 70){
      gradeVal = 'A'
      }
      else if (score >= 60){
        gradeVal = 'B'
      }
      else if (score >= 50){
        gradeVal = 'C'
      }
      else if (score >= 40){
      gradeVal = 'P'
      }
      else{
      gradeVal = 'FF'
     }
  }
else{
  gradeVal = 'Invalid score'
}
  return gradeVal
}

  