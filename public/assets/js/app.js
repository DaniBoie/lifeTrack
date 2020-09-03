document.getElementById('diary').addEventListener('click', () => {
  event.preventDefault()

  axios.post('/api/diary', {
    entry: document.getElementById('diaryInput').value
  })
    .then(function (response) {
      document.getElementById('diaryInput').value = ''
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
})

document.getElementById('taskSubmit').addEventListener('click', () => {
  event.preventDefault()

  axios.post('/api/schedule', {
    entry: document.getElementById('event').value,
    dateFor: document.getElementById('date').value,
    urgency: 0
  })
    .then(function ({ data }) {
      console.log(data)
      document.getElementById('event').value = ''
      document.getElementById('date').value = ''
      let eventElem = document.createElement('li')
      eventElem.dataset.id = data.id
      eventElem.innerHTML = `
      <p id="scheduleData" class="entryStyle" ><span id="entryData">${data.entry}</span><span id="dateData">${data.dateFor}</span></p>
      <button class="alert-success check">✓</button>
      `
      document.getElementById('ulToDo').append(eventElem)
    })
    .catch(function (error) {
      console.log(error);
    });
})

document.addEventListener('click', () => {
  if (event.target.classList.contains('check')) {
    let eventElem = document.createElement('li')
    eventElem.dataset.id = event.target.parentNode.dataset.id
    eventElem.innerHTML = `
      <p class="entryStyle><span id="entryData">${document.getElementById('entryData').innerText}</span><span id="dateData">${document.getElementById('dateData').innerText}</span></p>
      <button class="alert-danger remove">❌</button>
      `
    document.getElementById('ulFinished').append(eventElem)
    event.target.parentNode.remove()
  } else if (event.target.classList.contains('remove')) {
    axios.delete(`/api/schedule/${event.target.parentNode.dataset.id}`)
      .then(event.target.parentNode.remove())
      .catch(err => console.log(err))
  }
})
