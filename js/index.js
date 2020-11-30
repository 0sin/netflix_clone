


// function accOpen(clickNumber) {
//   document.getElementsByClassName('faq_list')[clickNumber].style = "max-height: 600px;"
// }



var faqList = document.getElementsByClassName('faq_list'); // faqList로 축약

var openStateIcon = document.getElementsByClassName('openstate_icon');

var openState = [0, 0, 0, 0, 0, 0]; // List 오픈 상태 저장 배열 변수

//clickNumber=인수

function accOpen(clickNumber) {

  if (openState[clickNumber] == 0) {
    for (i=0; i<faqList.length; i++) {
      faqList[i].style = "max-height: 60px;"
      openStateIcon[i].style = "transform: rotate(0deg);" // 1) 여기까지만 쓰면 두번 클릭해야 하는 경우가 생김
      openState[i] = 0; // 2)이것만 쓰면 자기 자신이 안닫힘      
    }

    faqList[clickNumber].style = "max-height: 600px;"
    openStateIcon[clickNumber].style = "transform: rotate(45deg);"
    openState[clickNumber] = 1; // Click된 List의 오픈 상태를 열려 있는 것으로 저장(업데이트)
  } 

  else {faqList[clickNumber].style = "max-height: 60px;"
  openStateIcon[clickNumber].style = "transform: rotate(0deg);"
  openState[clickNumber] = 0;
  };

} // 3) if로 openState[clickNumber]=1 이면 for문 실행하지 않도록 함 > 자기 자신 닫힘





// for (i=0; i<2000; i++) {
//   document.getElementById('faq_icon').style="left:"+i+"px";
// }

// var i = 0;

// function aniIcon() {
//   if (i>800) {return;} //return: 함수 중단
//   document.getElementById('faq_icon').style="left:"+i+"px";
//   i = i + 10;
//   setTimeout(aniIcon, 10);
// }

// aniIcon();





// RANDOM SNOW

// var randomNumber = Math.floor( Math.random() * 10 ); //0과 1 사이의 소수 랜덤 생성=난수 발생

// console.log(randomNumber);

// if (randomNumber < 9) {
//   document.getElementById('hero').style = "background-image: url(../img/random" + randomNumber + ".jpg); background-size: cover;";
//   }



//   function snow() {
//     var randomSize = Math.floor( Math.random() * 10 );
//     var randomX = Math.floor( Math.random() * window.innerWidth );
//     var randomY = Math.floor( Math.random() * window.innerHeight );

//       for (i=0; i<10; i++) {
//       randomSize = Math.floor( Math.random() * 10 );
//       randomX = Math.floor( Math.random() * window.innerWidth - 20 );
//       randomY = Math.floor( Math.random() * window.innerHeight );
//       document.getElementsByClassName('snowball')[i].style= "width:"+ randomSize + "px;" + "height:" + randomSize + "px;" + "top:" + randomY + "px;" + "left:" + randomX + "px;" + "display: block; position: fixed;";
//       }
//   }

//   setInterval(snow, 800);



// RANDOM BACKGROUND
var randomBgNumber = Math.floor ( Math.random() * 10 )
document.getElementById('hero').style.backgroundImage = "url(../img/bg_" + randomBgNumber + ".jpg)";
//.style 이후에 스타일 요소 오면 ;(세미콜론) 넣으면 안됨


// SCROLL EVENT

// console.log(window.outerWidth);
// console.log(window.innerWidth);
// console.log(window.outerHeight);
// console.log(window.innerHeight);



function scrollAnimation() {
  
  //console.log(window.pageYOffset);
  //console.log(window.scrollY);
  
  //화면에 scrollY 값 출력
  // document.getElementById('scroll_position').innerHTML = window.scrollY;
  // document.getElementById('scroll_position2').innerHTML = window.innerHeight;


  // fade-in 스크롤 계산 변수 선언
  var scrollPoint = window.scrollY + window.innerHeight; //스크롤 아래쪽을 0으로 set 한 것과 같은 효과

  var tvText = document.getElementById('tv_title');
  var offlineText = document.getElementById('offline');
  var deviceText = document.getElementById('device');


  // fade-in 스크롤 계산 첨엔 > 0 했다가 조절할 것
  console.log(scrollPoint);
  console.log(tvText.offsetTop); //박스의 스크롤 top 위치값
  console.log(offlineText.offsetTop);
  console.log(deviceText.offsetTop);

  
  
  // text fade in 텍스트 효과
  if ( (scrollPoint - tvText.offsetTop) > 200) {
    tvText.style.animation = "fade_in_opacity 1s ease-in forwards"
  }

  if (scrollPoint - offlineText.offsetTop > 200) {
    offlineText.style.animation = "fade_in_opacity 1s ease-in forwards"
  }

  if (scrollPoint - deviceText.offsetTop > 200) {
    deviceText.style.animation = "fade_in_opacity 1s ease-in forwards"
  }
  
}




// 스크롤 계산하는 법










