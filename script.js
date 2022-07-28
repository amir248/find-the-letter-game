document.querySelector('body > main > button').addEventListener('click',()=>{
  throwAwayDibs();
});

function throwAwayDibs(){
  if(typeof(ransomLetter)=="undefined"){
    let randomLetter=Math.floor(Math.random()*10/3);
    console.log(randomLetter);
    switch(randomLetter){
      case 0 : letter='A';
      break;
      case 1 : letter='B';
      break;
      case 2 : letter='C';
      break;
      case 3 : letter='D';
      break;
      case 4 : letter='E';
    }
  }else{
    console.log(typeof(randomLetter));
  }

  document.querySelector('body > main > h1').style.display=`none`;
  document.querySelector('body > main > p').style.display=`none`;
  document.querySelector('body > main > button').style.display=`none`;
    // table top
    let score=document.createElement('div');
    document.querySelector('main').prepend(score);
    score.classList.add('score');
    let numberistick=document.createElement('p');
    document.querySelector('main > div').prepend(numberistick);

    //mis
    let mis=document.createElement('p');
    document.querySelector('main > div').prepend(mis);

    //onClick
    let onClick=document.createElement('p');
    document.querySelector('main > div').prepend(onClick);

    let timer=document.createElement('span');
    document.querySelector('main > div').append(timer);
    timer.id="Timer";
    Timer.innerHTML="number";
    let tim=+0;
      let stGame=setInterval(function startTim(){
        document.querySelector('main > div span').innerHTML=tim++;
      },100);//function TIME
      document.querySelector('main > div > span').style.cssText=`color:coral;font-size:30px;text-shadow:1px 1px black;`
      // button stop
      let stop=document.createElement('button');
      document.querySelector('main').append(stop);
      stop.id="stop";
      let butStop=+0;
      document.querySelector('#stop').addEventListener('click',()=>{
        clearInterval(stGame);
        document.querySelector('#stop').style.display="none";
        document.querySelector('body > main > div > p').innerHTML=`Игра закончилась!`;
      });


      //
      // function stopGame(){
      //   stop.click=()=>{
      //     clearInterval(startTim);
      //     console.log("click");
      //   }
      // }
      stop.innerHTML="STOP";
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!111
  let num=0;
  let NC=10;
  let NB=100;
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11111
  while(num<`${NB}`){
    let dibs=document.createElement('span');
    document.querySelector('main').append(dibs);
    let colorFishki=Math.floor(Math.random()*250);
    let colorFishkiTwo=Math.floor(Math.random()*250);
    let colorFishkiThree=Math.floor(Math.random()*250);
    let border=Math.floor(Math.random()*250);
    let borderColor='rgba('+`${border}`+','+`${colorFishkiTwo}`+","+`${colorFishkiThree}`+',0.9)';
    let randomColor='rgba('+`${colorFishki}`+','+`${colorFishkiTwo}`+","+`${colorFishkiThree}`+',0.9)';
    // console.log(randomColor)
    // console.log(colorFishki);
      const coordinates={
        x : Math.floor(Math.random()*70)+"%",
        y : Math.floor(Math.random()*90)+"%"
      }
      console.log(coordinates.x);
        dibs.style.cssText=`
          display:grid;
          justify-content:center;
          align-items:center;
          position:absolute;
          width:70px;
          height:70px;
          background:${randomColor};
          border-radius:50%;
          border:30px solid ${borderColor};
          font-size:45px;
          text-shadow:1px 1px white;
          margin-top:150px;
          top:calc(${coordinates.x} - 10px);
          left:calc(${coordinates.y} - 7px);
          `

    dibs.innerHTML=`${nameGibs[num]}`;
    dibs.addEventListener('click',gDibs);
    console.log(`${coordinates.y}`);
    console.log(this.dibs);
//-------------------------------------------------------------
//------------------------DIBS---------------------------------
//-------------------------------------------------------------
document.querySelector('body > main > div > p:nth-child(3)').innerHTML='Буква:_'+letter;

    function gDibs(){
        document.querySelector('body > main > div.score > p:nth-child(2)').style.cssText="font-size:40px;color:red;"
      document.querySelector('body > main > div > p').style.cssText=`font-size:50px;`

      //ON_CLICK
      document.querySelector('body > main > div > p:nth-child(3)').innerHTML='search:_'+letter;

      // for(let ro=0;ro<oneRound.length;ro++){

      //GAME STATISTICS
      if(gameStatistics.check==`${NC}`){
        // dibs.remove();
        clearInterval(stGame);

        let winner=document.createElement('div');
        document.querySelector('main').append(winner);
        winner.style.cssText=`
          display:grid;
          justify-content:center;
          align-items:center;
          position:fixed;
          width:100%;
          min-height:100vh;
          font-size:70px;
          color:violet;
          text-shadow: 1px 1px green;
          z-index:999;
          background:rgba(255,255,255,0.3);
        `;
        winner.innerHTML=`WINNER`;

        let newGame=document.createElement('button');
        document.querySelector('main').append(newGame);
        newGame.innerHTML="go Reboot"; // &&reboot
        newGame.style.cssText=`
          display:grid;
          position:fixed;
          top:80%;
          justify-content:center;
          align-items:center;
          position:fixed;
          width:100%;
          min-height:30px;
          font-size:70px;
          color:coral;
          text-shadow: 1px 1px green;
          z-index:999;
        `;
        newGame.id="newGame";
        document.querySelector('#newGame').addEventListener('click',()=>{
            console.log('click');
            location.reload();
          });
      }else{
        if(dibs.value=this.innerHTML==`${letter}`){
          console.log("Yra!!!!!");
            gameStatistics.check++;
            document.querySelector('body > main > div > p').innerHTML='check: '+`${gameStatistics.check}`;
            dibs.remove();
            if(gameStatistics.check==10){
              return gDibs();
            }
        }else{
          gameStatistics.mis++;
          document.querySelector('body > main > div.score > p:nth-child(2)').innerHTML='miss: '+`${gameStatistics.mis}`;
          dibs.remove();
        }
      }
      // dibs.remove();
            console.log(gameStatistics.check);
    }//gDibs

      // final fantasy
    // console.log("fishki "+(num+1));
    num++;
  }//while
}//throwAwayDibs

// statistics !!!
const gameStatistics={
    check : 0,
    mis : 0,
    round : 0
}

const nameGibsS=['A','B','C','D','E','C','C','C','C','C','C','C','C','C','C','C','C','D','E','F','G','H','I','J','K','L','M',"N","O",'P','Q','R','S','C','C','C','C','C','C','C','C','C','C','C','C','C','C','C','K','L','M',"N","O",'P','A','B','A','B','A','B','A','B','A','B','A','B','A','B','C','C','C','C','C','C','C','B','C','D','E','F','G','A','B','A','B','A','B','Q','R','S','B','C','D','E','F','G','H','I','J','K','L','M',"N","O",'P','Q','R','S'];
const nameGibs=['A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E','A','B','C','D','E'];
