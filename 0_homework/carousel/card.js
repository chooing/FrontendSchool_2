    const cardList = document.querySelector('.card-wrap .card-list');
    
    let rootTheme = document.querySelector(':root'); 
    let styles = getComputedStyle(rootTheme); 
    let cardNum = 8;

    const quotesArr=[
        {
            author : '윌리엄 포크너',
            quote : '남들보다 더 잘하려고 고민하지 마라. 지금의 나보다 잘하려고 애쓰는 게 더 중요하다.',
        },
        {
            author : '머더 테레사',
            quote :'화려한 일을 추구하지 말라. 중요한 것은 스스로의 재능이며, 자신의 행동에 쏟아 붓는 사랑의 정도이다.',
        },
        {
            author : 'L. 론 허버드',
            quote : '절대 어제를 후회하지 마라. 인생은 오늘의 나 안에 있고 내일은 스스로 만드는 것이다.',
        },
        {
            author : '조 지라드',
            quote : '도중에 포기하지 말라. 망설이지 말라. 최후의 성공을 거둘 때까지 밀고 나가자.',
        },
        {
            author : '메이벨 뉴컴버',
            quote : '문제는 목적지에 얼마나 빨리 가느냐가 아니라 그 목적지가 어디냐는 것이다.',
        },
        {
            author : '이호준',
            quote : "'허들은 경쟁력이다.' 난코스일수록 여러분의 경쟁력이 될 것입니다. 지나갑니다. 시간은 흐르고요. 이해 못 했던 개념들이 다시 다가올 시간이 올 겁니다. 그 시간을 넘어서까지 응원합니다.",
        },
        {
            author : '스티브 잡스',
            quote : '우리가 이룬 것만큼 이루지 못한 것도 자랑스럽습니다.',
        },
        {
            author : '헬렌 켈러',
            quote : '세상은 고통으로 가득하지만, 그것을 극복하는 사람들로도 가득하다.',
        },
        {
            author : '존 포드',
            quote : '휴식은 게으름도, 멈춤도 아니다. 휴식을 모르는 사람은 브레이크가 없는 자동차 같아서 위험하기 짝이 없다.',
        },
        {
            author : '레오나르도 다 빈치',
            quote : '때때로 손에서 일을 놓고 휴식을 취해야 한다. 잠시 일에서 벗어나 거리를 두고 보면 자기 삶의 조화로운 균형이 어떻게 깨져 있는지 분명히 보인다.',
        },
        {
            author : '랄프 왈도 에머슨',
            quote : '우리가 끈기를 가지고 하는 일이 쉬워지는 것은, 그 일 자체가 쉬워져서가 아니라, 그 일을 수행하는 우리의 능력이 향상됐기 때문이다.',
        },
        {
            author : '크리스티 매튜슨',
            quote : '승리하면 조금 배울 수 있고, 패배하면 모든 것을 배울 수 있다.',
        },
        {
            author : '김영웅',
            quote : '성공은 단번에 찾아오지 않고 오히려 무수한 실패의 연속에 성공이 있더라구요.',
        },
        
    ];
    
    //  shuffle random quotesArr
    quotesArr.sort((a,b) => 0.5 - Math.random());

    // card put in cardList
    for (let i = 0; i < cardNum; i++) {
        let liEl = document.createElement('li');
        let divEl = document.createElement('div')
        let pEl = document.createElement('p');
        let spanEl = document.createElement('span');
        
        if(i===0){
            liEl.classList.add('card','on');
        }else{
            liEl.classList.add('card');
        }
        
        liEl.style.setProperty('--i', i);

        divEl.classList.add('card-back');
        pEl.classList.add('quote');
        spanEl.classList.add('author');

        pEl.textContent = quotesArr[i]['quote'];
        spanEl.textContent = quotesArr[i]['author'];

        divEl.appendChild(pEl);
        divEl.appendChild(spanEl);
        liEl.appendChild(divEl);

        cardList.appendChild(liEl);
    }

////////////////////////////////

const btnWrap = document.querySelector('.btn-wrap');
const cards = document.getElementsByClassName('card');
let count = 0;
let cardView = 0;

btnWrap.addEventListener('click', (e)=>{
    let windowWidth =window.innerWidth / 2;

    // rotate cards
    if(e.clientX >= windowWidth){
        rootTheme.style.setProperty('--count', --count);
    }else{
        rootTheme.style.setProperty('--count', ++count);
    }
    
    // view card num choice
    if(count === 0 || count % 8 === 0){
        cardView = 0;
    }else if(count < 0){
        cardView = (count % 8) * -1;
    }else{
        cardView = cardNum - (count % 8);
    }


    //cssClass 'on' REMOVE & ADD 
    for (const card of cards) {
        card.classList.remove('on');
    }

    cards[cardView].classList.add('on')
    console.log(cards);

});
