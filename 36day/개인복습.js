const 전기밥솥 =  new Promise((res,rej)=>{
    setTimeout(()=>{
        res('취사가 완료되었습니다.');  // then의 console.log가 실행
        // rej(new Error('에러발생, 다시 확인해주세요.')); //catch의 console.log가 실행
    },2000);
});

전기밥솥

.then((msg)=>{
    console.log(msg);
    return '맛있는 식사 시간 되세요.'
})

.then((msg)=>{
    console.log(msg);
    return '코드를 뽑아주세요.'
})

.catch((errorMsg)=>{
    console.log(errorMsg);
    return '에러에러'
})
.finally(()=>{
    console.log('finally');
})

