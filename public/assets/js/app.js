let diaryBlock = 0
document.getElementById('diary').addEventListener('click', () => {
  event.preventDefault()
  if(diaryBlock === 0) {
  axios.post('/api/diary', {
    entry: document.getElementById('diaryInput').value
  })
    .then(function (response) {
      document.getElementById("diaryInput").readOnly = true;
      // document.getElementById('diaryInput').value = ''
      document.getElementById('diaryInput').style.color = "gray";
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    diaryBlock++
  }
})

// Auto filling Tasks on start up
axios.get('/api/schedule')
.then(({data}) => {
  data.forEach(entry => {
    console.log(entry.isFinished)
    if (entry.isFinished === false){
      let eventElem = document.createElement('li')
      eventElem.dataset.id = entry.id
      eventElem.innerHTML = `
      <div id="scheduleData" class="entryStyle">
      <p id="entryData">${entry.entry}</p>
      <p id="dateData">${entry.dateFor}</p>
      </div>
      <button class="alert-success check">✓</button>
      `
      document.getElementById('ulToDo').append(eventElem)
    } else {
      let eventElem = document.createElement('li')
      eventElem.dataset.id = entry.id
      eventElem.innerHTML = `
      <div class="entryStyle">
      <p id="entryData">${entry.entry}</p>
      <p id="dateData">${entry.dateFor}</p>
      </div>
      <button class="alert-danger remove">❌</button>
      `
      document.getElementById('ulFinished').append(eventElem)
    }
  })
})
.catch(err => console.log(err))