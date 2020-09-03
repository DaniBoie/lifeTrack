// var moment = require('moment'); // require
// moment().format(); 

axios.get('./api/diary')
    .then(({ data }) => {
        var currentDay = moment().format("L");

        let indexVal = data.findIndex(data => moment(data.createdAt.substr(0, 10)).format("L") === currentDay);

        console.log(indexVal);
        var entryDate = moment(data[indexVal].createdAt.substr(0, 10)).format("L");

        document.getElementById('diaryDate').innerText = `Today's Entry: ${entryDate}`;
        document.getElementById('diaryRender').innerText = data[indexVal].entry;
    })
    .catch(err => {
        console.log(err)
        document.getElementById('diaryDate').innerText = `Today's Entry: ${moment().format("L")}`;
        document.getElementById('diaryRender').innerText = 'No Entry Added Today!';
    })

document.getElementById('dateSubmit').addEventListener('click', (event) => {
    event.preventDefault()

    axios.get('./api/diary')
        .then(({ data }) => {
            var findDay = moment(document.getElementById('date').value).format("L");

            let indexVal = data.findIndex(data => moment(data.createdAt.substr(0, 10)).format("L") === findDay);

            console.log(indexVal);
            var entryDate = moment(data[indexVal].createdAt.substr(0, 10)).format("L");

            document.getElementById('diaryDate').innerText = findDay;
            document.getElementById('diaryRender').innerText = data[indexVal].entry;
        })
        .catch(err => {
            console.log(err)
            document.getElementById('diaryRender').innerText = "No entry found for this date!"
            document.getElementById('diaryDate').innerText = moment(document.getElementById('date').value).format("L");
        })
})