const ep='https://jsonplaceholder.typicode.com/todos'
let apiData = []
const ID = document.getElementById('d1')

const renderTitle = () => {
    let counter=0;
    for ( let i of apiData)
    {
        const heading=document.createElement('h6')
        heading.innerHTML= counter ++ + ').' + i.title;
        ID.appendChild(heading);
    }
}

const fetchData = async() => {
    const res = await fetch(ep)
    apiData=await res.json();
    console.log(apiData)
    renderTitle()
}

fetchData();





//2nd task code
// let timer = 0;
// let timerId;
// let laps = [];

// const parentId = document.getElementById('parentID');
// const lapsList = document.getElementById('laps');

// const start = () => {
//     timerId = setInterval(() => {
//         parentId.textContent = ++timer;
//     }, 1000)
// }

// const stop = () => {
//     clearInterval(timerId);
// } 

// let previousTime = null;

// const lap = () => {
//     const currentLapTime = timer;
//     if (previousTime !== null) {
//         laps.push({start: previousTime, end: currentLapTime});
//         let li = document.createElement('li');
//         li.textContent = 'Lap ' + laps.length + ': ' + previousTime + ' - ' + currentLapTime + ' seconds';
//         lapsList.appendChild(li);
//     }
//     previousTime = currentLapTime;
// }


//1st task code

// let firstTime = true;

// function showTime() {
//     const Parent = document.getElementById('parentID');
//     const P = document.createElement('p');
    
//     const date = new Date();
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();

//     const wholedate = day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds;

//     P.innerHTML = wholedate;
    
//     if (firstTime) {
//         Parent.appendChild(P);
//         firstTime = false;
//     } else {
//         Parent.replaceChild(P, Parent.lastChild);
//     }
// }

// setInterval(function () { 
//     showTime();
// },
// 1000);