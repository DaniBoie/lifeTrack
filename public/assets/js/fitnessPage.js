

// TIMER functionality start
let counter = 0
document.getElementById('timeDisplay').innerText = `${moment.utc(counter * 1000).format('HH:mm:ss')}`

let block = 0
let timerBlock = 0
let time

//Click listener for starting timer
var myTimer;
document.getElementById('timerStart').addEventListener('click', () => {
  if (timerBlock === 0) {
    myTimer = setInterval(() => {
      ++counter
      const formatted = moment.utc(counter * 1000).format('HH:mm:ss');
      document.getElementById("timeDisplay").innerHTML = formatted;
      timerBlock = 1
      time = formatted
    }, 1000);
    if (block === 0) {
      moveItems()
      block++
    }
  }

})

//Click listener for ending timer
document.getElementById('timerStop').addEventListener('click', () => {
  clearInterval(myTimer);
  timerBlock = 0
})
// TIMER functionality end

var workoutIndex = 0
var workoutList = []

axios.get('/api/workout/date')
  .then(({ data }) => {
    var currentDay = moment().format("L");

    let indexVal = data.findIndex(data => moment(data.createdAt.substr(0, 10)).format("L") === currentDay);

    console.log(indexVal);

    data[indexVal].workouts.forEach(workout => {
      console.log(workout)
      let workoutElem = document.createElement('li')
      workoutElem.value = workout.id
      if (workout.lbs === null) {
        workoutElem.innerHTML = `
      <div class = "fitnessCardStyle">
    <p class="fitness-style">${workout.name}</p>
    <p class="fitness-style">${workout.sets} Sets</p>
    <p class="fitness-style">${workout.reps} Reps</p>
      </div>
    `
      } else {
        workoutElem.innerHTML = `
      <div class = "fitnessCardStyle">
    <p class="fitness-style">${workout.name}</p>
    <p class="fitness-style">${workout.sets} Sets</p>
    <p class="fitness-style">${workout.reps} Reps</p>
    <p class="fitness-style">${workout.lbs} Pounds</p>
    </div>
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

  if ((doingDiv.childNodes.length === 0) && (toDoDiv.childNodes.length > 0)) {

    doingDiv.appendChild(toDoDiv.childNodes[0]);

  } else if ((doingDiv.childNodes.length === 1) && (toDoDiv.childNodes.length > 0)) {

    doneDiv.appendChild(doingDiv.childNodes[0])
    doingDiv.appendChild(toDoDiv.childNodes[0])

  } else if ((toDoDiv.childNodes.length === 0) && (doingDiv.childNodes.length === 1)) {

    doneDiv.appendChild(doingDiv.childNodes[0])
    clearInterval(myTimer);
    let finishElem = document.createElement('li')
    finishElem.innerText = `Workout Completed in ${time}`
    doneDiv.append(finishElem)
    startConfetti();
  } else {
    console.log('all done!')
  }
}


