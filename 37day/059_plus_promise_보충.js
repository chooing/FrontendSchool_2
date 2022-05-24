// 프라미스 체이닝이 아닌 경우
let p = new p(function(resolve, reject) {
    setTimeout(() => resolve(10), 1000);
});

p.then(result => {
    console.log(result);
    return result ** 2;
});

p.then(result => {
    console.log(result);
    return result ** 2;
});

p.then(result => {
    console.log(result);
    return result ** 2;
});

fetch('https://jsonplaceholder.typicode.com/users/3')
// Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: Response

fetch('https://jsonplaceholder.typicode.com/users/3')
    .then(res=>res.json())
    .then(json=> console.log(json))
// address: {street: 'Douglas Extension', suite: 'Suite 847', city: 'McKenziehaven', zipcode: '59590-4157', geo: {…}}
// company: {name: 'Romaguera-Jacobson', catchPhrase: 'Face to face bifurcated interface', bs: 'e-enable strategic applications'}
// email: "Nathan@yesenia.net"
// id: 3
// name: "Clementine Bauch"
// phone: "1-463-123-4447"
// username: "Samantha"
// website: "ramiro.info"
// [[Prototype]]: Object

async function getUserEmail(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await(response.json());
    const email = user.email;
    console.log(email)
}
getUserEmail(3)

// 풀이
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
.then(function(response) {
    console.log(1);
    return response.json();
})
.then(json=>{
    let persent = 0;
    json.map(city => {
        persent += city['2차 접종 퍼센트'];
    });
    return persent
})
.then(persent=>console.log(persent))


//  강사님꺼 
fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json=>console.log(
        json.find(city=>city['시·도별(1)']=='전국')['2차 접종 퍼센트']
    ))

fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => {
        let 지역 = json.find(s => s['시·도별(1)'] == '전국')
        console.log(지역)
        console.log(지역['1차 접종 누계'])
        console.log(지역['2차 접종 퍼센트'])
    })

async function 접종퍼센트(지역){
    const response = await fetch(`https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json`);
    const data = await(response.json());
    const 접종퍼센트 = data.find(s => s['시·도별(1)'] == 지역)['2차 접종 퍼센트'];
    console.log(접종퍼센트)
    }
    접종퍼센트('전국')


fetch('https://raw.githubusercontent.com/paullabkorea/coronaVaccinationStatus/main/data/data.json')
    .then(function(response) {
        console.log(1);
        return response.json();
    })
    .then(json => console.log(json))


    // 
const txt = fetch('https://reqres.in/api/products/3')
    .then(response => response.text())
    .then(text => console.log(text))


// 이미지
async function getImg(){
    const response = await fetch(`https://picsum.photos/200`);
    const blobImg = await(response.blob());
    console.log(blobImg);
}
getImg()