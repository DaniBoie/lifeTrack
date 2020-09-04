let workouts = []

let workoutBlock = 0

function clearEntries() {
  document.getElementById('workoutName').value = ''
  document.getElementById('workoutSets').value = ''
  document.getElementById('workoutReps').value = ''
  document.getElementById('workoutLbs').value = ''
}

document.getElementById('workout').addEventListener('click', (event) => {
 if (workoutBlock === 0){
  let pounds
  if (document.getElementById('workoutLbs').value === '') {
    pounds = null
  } else {
    pounds = document.getElementById('workoutLbs').value
  }

  let workout = {
    name: document.getElementById('workoutName').value,
    sets: document.getElementById('workoutSets').value,
    reps: document.getElementById('workoutReps').value,
    lbs: pounds
  }

  axios.post('/api/workout', workout)
    .then(function ({ data }) {
      console.log(data)
      workouts.push(data.id)
      console.log(workouts)
      let workoutElem = document.createElement('li')
      if (workout.lbs === null){
      workoutElem.innerHTML = `
      <div class="entryStyle">
      <p class="workoutStyle" data-id="${data.id}">${workout.name} | Sets: ${workout.sets} | Reps: ${workout.reps}</p>
      </div>
      `
      } else {
        workoutElem.innerHTML = `
      <div class="entryStyle">
      <p class="workoutStyle" data-id="${data.id}">${workout.name} | Sets: ${workout.sets} | Reps: ${workout.reps} | Lbs: ${workout.lbs}</p>
      </div>
      `
      }
      document.getElementById('workouts').append(workoutElem)
    })
    .catch(function (error) {
      console.log(error);
    });
  clearEntries()
 }
})

document.getElementById('workoutComplete').addEventListener('click', (event) => {
  event.preventDefault()

  if (workoutBlock === 0){
  axios.post('/api/workout/date', { date: moment().format("L")})

    .then(function ({data}) {
      workouts.forEach((id) => {
        axios.put(`/api/workout/${id}`, {workoutDateId: data.id})
        .then(res => console.log(res))
        .catch(err => console.log(err))
      })
    })
    .catch(err => console.log(err))

    deleteItems()
  }
} )

function deleteItems(){
  let ulDiv = document.getElementById('workouts')

  if (ulDiv.childNodes.length === 0){
    return
  } else {
    workoutBlock++
  }

    while (ulDiv.childNodes.length > 0) {
      ulDiv.removeChild(ulDiv.childNodes[0])
    }
  

    let finishElem = document.createElement('li')
    finishElem.innerHTML = `
    Today's Workout Logged!
    `
    ulDiv.appendChild(finishElem)
    
  
}
