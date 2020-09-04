document.getElementById('taskSubmit').addEventListener('click', () => {
  event.preventDefault()

  axios.post('/api/schedule', {
    entry: document.getElementById('event').value,
    dateFor: document.getElementById('date').value,
    isFinished: false
  })
    .then(function ({ data }) {
      console.log(data)
      document.getElementById('event').value = ''
      document.getElementById('date').value = ''
      let eventElem = document.createElement('li')
      eventElem.dataset.id = data.id
      eventElem.dataset.text = data.entry
      eventElem.dataset.date = data.dateFor
      eventElem.innerHTML = `
      <div id="scheduleData" class="entryStyle">
      <p id="entryData">${data.entry}</p>
      <p id="dateData">${data.dateFor}</p>
      </div>
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
    let eventText = event.target.parentNode.dataset.text
    let eventDate = event.target.parentNode.dataset.date
    axios.put(`/api/schedule/${event.target.parentNode.dataset.id}`, { isFinished: true })
      .then(res => console.log(res))
      .catch(err => console.log(err))

    let eventElem = document.createElement('li')
    eventElem.dataset.id = event.target.parentNode.dataset.id
    eventElem.innerHTML = `
      <div class="entryStyle">
      <p id="entryData">${eventText}</p>
      <p id="dateData">${eventDate}</p>
      </div>
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
