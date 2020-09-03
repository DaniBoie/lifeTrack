let workouts = []

document.getElementById('workout').addEventListener('click', (event) => {

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
      workoutElem.innerHTML = `
      <p data-id="${data.id}">${workout.name} | Sets: ${workout.sets} | Reps: ${workout.reps}</p>
      `
      document.getElementById('workouts').append(workoutElem)
    })
    .catch(function (error) {
      console.log(error);
    });
  clearEntries()
})

function clearEntries() {
  document.getElementById('workoutName').value = ''
  document.getElementById('workoutSets').value = ''
  document.getElementById('workoutReps').value = ''
  document.getElementById('workoutLbs').value = ''
}