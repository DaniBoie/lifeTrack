// var moment = require('moment'); // require
// moment().format(); 

axios.get('./api/diary')
  .then(({data}) => {
    var currentDay = moment("2020-11-02").format("L");
    
    let indexVal = data.findIndex(data => moment(data.createdAt.substr(0, 10)).format("L") === currentDay);

    console.log(indexVal);
    var entryDate = moment(data[indexVal].createdAt.substr(0, 10)).format("L");

    document.getElementById('diaryDate').innerText = entryDate;
    document.getElementById('diaryRender').innerText = data[indexVal].entry;
  })
  .catch(err => console.log(err))