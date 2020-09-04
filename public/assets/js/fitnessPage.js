// TIMER functionality start
let counter = 0
document.getElementById('timeDisplay').innerText = `${moment.utc(counter * 1000).format('HH:mm:ss')}`

let block = 0

//Click listener for starting timer
var myTimer;
document.getElementById('timerStart').addEventListener('click', () => {
  
  myTimer = setInterval(() => {
    ++counter
    const formatted = moment.utc(counter * 1000).format('HH:mm:ss');
    document.getElementById("timeDisplay").innerHTML = formatted;
  }, 1000);
  if (block === 0) {
    moveItems()
    block++
  }

})

//Click listener for ending timer
document.getElementById('timerStop').addEventListener('click', () => {
  clearInterval(myTimer);
})
// TIMER functionality end

var workoutIndex = 0
var workoutList =[]

axios.get('/api/workout/date')
.then(({data}) => {
  var currentDay = moment("2020/09/04").format("L");

  let indexVal = data.findIndex(data => moment(data.createdAt.substr(0, 10)).format("L") === currentDay);

  console.log(indexVal);

  data[indexVal].workouts.forEach(workout => {
    console.log(workout)
    let workoutElem = document.createElement('li')
    workoutElem.value = workout.id
    if (workout.lbs === null) {
      workoutElem.innerHTML = `
    <p>${workout.name}</p>
    <p>${workout.sets} Sets</p>
    <p>${workout.reps} Reps</p>
    `
    } else {
      workoutElem.innerHTML = `
    <p>${workout.name}</p>
    <p>${workout.sets} Sets</p>
    <p>${workout.reps} Reps</p>
    <p>${workout.lbs} Pounds</p>
    `
    }
    document.getElementById('workoutToDo').append(workoutElem)
    workoutList.push(workout)
  })
  console.log(data)
})
.catch(err => console.log(err))

document.getElementById('nextSet').addEventListener('click', () => {
  moveItems()
})

function moveItems() {
  let doingDiv = document.getElementById('doingWorkout')
  let doneDiv = document.getElementById('doneWorkout')
  let toDoDiv = document.getElementById('workoutToDo')

  if ((doingDiv.childNodes.length === 0) && (toDoDiv.childNodes.length > 0)){

    doingDiv.appendChild(toDoDiv.childNodes[0]);

  } else if ((doingDiv.childNodes.length === 1) && (toDoDiv.childNodes.length > 0)){

    doneDiv.appendChild(doingDiv.childNodes[0])
    doingDiv.appendChild(toDoDiv.childNodes[0])

  } else if ((toDoDiv.childNodes.length === 0) && (doingDiv.childNodes.length === 1)){ 

    doneDiv.appendChild(doingDiv.childNodes[0])
    clearInterval(myTimer);

  } else {
    console.log('all done!')
  }
}

  
