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

// Auto filling Tasks on start up
axios.get('/api/schedule')
.then(({data}) => {
  data.forEach(entry => {
    console.log(entry.isFinished)
    if (entry.isFinished === false){
      let eventElem = document.createElement('li')
      eventElem.dataset.id = entry.id
      eventElem.innerHTML = `
      <p id="scheduleData" class="entryStyle" ><span id="entryData">${entry.entry}</span><span id="dateData">${entry.dateFor}</span></p>
      <button class="alert-success check">✓</button>
      `
      document.getElementById('ulToDo').append(eventElem)
    } else {
      let eventElem = document.createElement('li')
      eventElem.dataset.id = entry.id
      eventElem.innerHTML = `
      <p class="entryStyle><span id="entryData">${entry.entry}</span><span id="dateData">${entry.dateFor}</span></p>
      <button class="alert-danger remove">❌</button>
      `
<<<<<<< HEAD
    document.getElementById('ulFinished').append(eventElem)
    event.target.parentNode.remove()
  } else if (event.target.classList.contains('remove')) {
    axios.delete(`/api/schedule/${event.target.parentNode.dataset.id}`)
      .then(event.target.parentNode.remove())
      .catch(err => console.log(err))
  }
<<<<<<< HEAD
<<<<<<< HEAD:public/app.js
})




=======
})
>>>>>>> 39961b8d8e4087fc35e571c3306df0dfcc8c65e1:public/assets/js/app.js
=======
})
>>>>>>> 6bdb0a492e1d4cc57c6e1ae46e12b77dbeebe78c
=======
      document.getElementById('ulFinished').append(eventElem)
    }
  })
})
.catch(err => console.log(err))
>>>>>>> 17c213139ccaecc333886de596328eb9e20586aa
