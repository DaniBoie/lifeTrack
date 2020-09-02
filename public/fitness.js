document.getElementById('workout').addEventListener('click', (event) => {
  console.log(document.getElementById('workoutName').value)
  console.log(document.getElementById('workoutSets').value)
  console.log(document.getElementById('workoutReps').value)
  console.log(document.getElementById('workoutLbs').value)

  let pounds = ''
  if (document.getElementById('workoutLbs').value === ''){
    pounds = null
  } else {
    pounds = document.getElementById('workoutLbs').value
  }

  axios.post('/api/workout', {
    name: document.getElementById('workoutName').value,
    sets: document.getElementById('workoutSets').value,
    reps: document.getElementById('workoutReps').value,
    lbs: pounds
  })
    .then(function (response) {
      let workoutElem = document.createElement('li')
      workoutElem.innerHTML = `
      <p>${document.getElementById('workoutName').value} | Sets: ${document.getElementById('workoutSets').value} | Reps: ${document.getElementById('workoutReps').value}</p>
      
      `
      document.getElementById('workouts').append(workoutElem)
      console.log(response)
    })
    .catch(function (error) {
      console.log(error);
    });
})