// 플랫폼에 익숙해져야 합니다. 프로그래머스, 구름EDU
//  - 사용 가능 라이브러리는 미리 확인!
// 언어 선택 (속도 : c++, 풀이 : python)
// 코드 스네펫(트리, 검색, 순열, 조합, 최단경로(예를 들어 다익스트라)), Cheat sheet와 A4용지는 미리 준비
// 유용한 라이브러리는 미리 정리
// 예외처리 기억해두세요!

// 5 ~ 6시간
// 6 ~ 7문제

// 30분씩 4문제
// 2시간씩 2문제

// 자료구조와 알고리즘
// 자료구조 : 데이터를 담는 구조
// 알고리즘 : 문제를 해결하는 방법(절차)
// 빅오(O) : O(1), O(n), O(N**2), O(N**3) 
//           시간복잡도(시간), 공간복잡도(메모리)

// while (1 < a) {
//     s += a
//     a++
// }

// while (1 < a) {
//     s += a
//     a++
//     while (1 < b) {
//         s += b
//         b++
//     }
// }


// 몸풀기 2문제

// https://codingdojang.com/scode/393?langby=javascript#answer-filter-area
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 빈 배열을 만드는 방법

Array(10);
let x = Array(10)
x[2] = null
x[3] = undefined
x
// [비어 있음 × 2, undefined, null, 비어 있음 × 6]
x.length = 20;
x
// [비어 있음 × 2, undefined, null, 비어 있음 × 16]
Array(10).fill(0);
Array(10).fill(10);
// Array(100).fill().map((_, i) => i + 1)
// [...Array(100)].map((_, i) => i + 1)
Array(100).fill(1).map((value, index)=>value+index);
'.'.repeat(10);
'.'.repeat(10).split('.');
'.'.repeat(9).split('.');
Array.from('abc');
Array.from('a'.repeat(10));
Array.from('ab'.repeat(10));

// 몸풀기 2문제 - 1번 정답
// 정답
Array(100).fill(1).map((value, index)=>value+index);
Array(100).fill(1).map((value, index)=>value+index)+'';
(Array(100).fill(1).map((value, index)=>value+index)+'').split('8');
'128148123881'.split('8')
(Array(100).fill(1).map((value, index)=>value+index)+'').split('8').length - 1;
(Array(10000).fill(1).map((value, index)=>value+index)+'').split('8').length - 1; // 4000개, 답
'128148123881'.split(/8/g)


///////////////////////////////////
// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

// 2번 정답
let s = [1, 3, 4, 8, 13, 17, 20]
for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
}

for (let i = 0; i < s.length; i++) {
    console.log(s[i+1] - s[i]);
}

//다른 언어, but js에서는 -1안해줘도 error가 안남
for (let i = 0; i < s.length - 1; i++) {
    console.log(s[i+1] - s[i]);
}

// 1번부터 시작해서 마지막까지
for (let i = 1; i < s.length; i++) {
    console.log(s[i] - s[i-1]);
}

let s = [1, 3, 4, 8, 13, 17, 20]
let arr = []
for (let i = 1; i < s.length; i++) {
    arr.push(s[i] - s[i-1]);
}
arr

let index = arr.indexOf(Math.min(...arr))
console.log(s[index], s[index+1])

// const zip = a => a.map((v, i) => [v, i]);

const zip = (a, b) => a.map((value, index)=>[value, b[index]]);
const zip = (a, b) => a.map((v, i)=>[v, b[i]]);


zip([100, 200, 300], [10, 20, 30])
zip([100, 200, 300], [10, 20, 30, 40, 50, 60])
zip([100, 200, 300, 400, 500, 600], [10, 20, 30])

zip([100, 200, 300, 400, 500, 600], 'hello')


[1, 3, 4, 8, 13, 17, 20]
[1, 3, 4, 8, 13, 17] // s.slice(0, s.length-1)
[3, 4, 8, 13, 17, 20] // s.slice(1)
let pairs = zip(s.slice(0, s.length-1), s.slice(1))

function 비교(a, b) {
    if (a[1] - a[0] < b[1] - b[0]) {
        return -1
    }
    if (a[1] - a[0] > b[1] - b[0]) {
        return 1
    }
    return 0;
}

pairs.sort(비교)
pairs.sort(비교)[0]

//////// 쉬운 풀이 /////////

let s  = [1, 3, 4, 8, 13, 17, 20];

const zip = (a, b) => a.map((v, i)=>[v, b[i]]);
let pairs = zip(s.slice(0, s.length - 1), s.slice(1))

// 초기값, for문 안에서는 최솟값을 비교하는 용도로 사용
// MAX_SAFE_INTEGER를 주로 사용합니다! 넘버에서 계산할 수 있는 가장 큰수, 가장 안전하게(정확하게) 정수를 표현하고, 계산할 수 있는 수
// let init = Number.MAX_SAFE_INTEGER;
// let init = Number.MIN_SAFE_INTEGER;
let init = pairs[0][1] - pairs[0][0];
// result는 최종 결과값
let result = [];

for (let i of pairs) {
    // console.log(i);
    if (init > i[1] - i[0]) {
        init = i[1] - i[0]
        result = i;
    }
}

console.log(result)

//////////////// 몸 풀기 끝 ////////////////

// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 3.1 선택정렬
// 3.2 삽입정렬
// 3.3 병합정렬
// 3.4 퀵정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

//////////////// 1. 스택과 큐 ////////////////

// 메서드를 추가하고 효율적 관리를 위해 class로 사용
class Stack {
    constructor(){
        this.arr = []
        this.length = 0
    }


    push(data) {
        this.arr.push(data)
        this.length += 1
    }

    pop(index) {
        if (index > this.arr.length - 1){
            this.length -= 1
            return this.arr.pop()
        }
        let result = this.arr.splice(index, 1)
        this.length -= 1
        return result
    }
    top (){
        return this.arr[this.arr.length-1]
    }

    bottom(){
        return this.arr[0]
    }

    display(){
        return this.arr
    }
}

let s = new Stack()
s.push(10)
s.push(20)
s.push(30)
s.push(40)
s.push(50)
s.push(60)
s.push(70)
s.pop(2)
console.log(s)
console.log(s.length)
// console.log(s);


//////////////// 2. 연결리스트(linked list) ////////////////

// 2.1 첫번째 시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js에서는 그다지 메모리 효율이 좋지 못함
// 개념 : https://en.wikipedia.org/wiki/Linked_list
// 알고리즘 시각화 : https://visualgo.net/ko

//공간복잡도를 확인하기 위해서 사용
// 단방향 연결리스트 == 한쪽 방향으로만 노드가 연결된 리스트
// 양방향 연결리스트 == 앞뒤가 노드가 서로 연결된 리스트


// 연결리스트의 기본 형태
const list = {
    head: {
        value : 12, 
        next : {
            value : 99,
            next : {
                value : 37,
                next : null
            }
        }
    }
}

const list = {
    head: null
}

let list1 = {value:12, next:null}
let list2 = {value:99, next:null}
let list3 = {value:37, next:null}
let list4 = {value:2, next:null}
list1.next = list2
list2.next = list3
list3.next = list4
list.head = list1

// 문제)
// head -> [90, next] -> [2, next] -> [77, next] -> [35, next] -> [21, next] -> null
// 35를 출력해주세요.

const list = {
    head: {
        value: 90,
        next: {
            value: 2,
            next: {
                value: 77,
                next: {
                    value: 35,
                    next: {
                        value: 21,
                        next: null
                    }
                }
            }
        }
    }
}
list.head.next.next.next.value


// step 1 노드 생성
class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

노드1 = new Node(10)
노드2 = new Node(20)
노드3 = new Node(30)

노드1.data
노드1.next = 노드2
노드2.next = 노드3
노드1.next.next.data
//30


// step 2 자동으로 다음 노드가 연결되는 linked list 구현

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

// head -> ['init', next]
//               ↑ 
//              tail

// head -> ['init', next] -> [90, next]
//                               ↑ 
//                              tail
class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        // 마지막 값(null)은 새로운 노드가 됨
        this.tail.next = 새로운노드
        // 마지막 노드는 새로운 노드가 됨
        this.tail = 새로운노드
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)

// l.head
// l.head.next.data
// l.head.next.next.data
// l.head.next.next.next.data

/*
// 1번 단계
head -> [init, null]
            ↑ 
            tail


// 2번 단계
head -> [init, next] -> [1, null]
                            ↑ 
                            tail
*/



// step 3 length 구현

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init

        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드

        this.데이터수 += 1
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()



// step 4 toString 구현

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init

        this.데이터수 = 0
        this.데이터들 = ''
    }

    length(){
        return this.데이터수
    }

    toString(){
        // return 'hello world'
        // return '[1, 2, 3, 10, 20, 30]'
        
        // 아래와 같이 구현했을 때 삭제가 문제가 됩니다.
        return '[' + this.데이터들.slice(0, -2) + ']'

    }
    
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드

        this.데이터수 += 1
        this.데이터들 += `${data}, `
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()



// step 4 toString을 arr로 구현

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init

        this.데이터수 = 0
        this.데이터들 = []
    }

    length(){
        return this.데이터수
    }

    toString(){
        // return 'hello world'
        // return '[1, 2, 3, 10, 20, 30]'
        
        // 아래와 같이 구현했을 때 삭제가 문제가 됩니다.
        return '[' + this.데이터들.toString() + ']'

    }
    
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드

        this.데이터수 += 1
        this.데이터들.push(data)
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()




// step 5 (중요) toString을 순회하면서 추가!!

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init

        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }

    toString(){
        let 순회용현재노드 = this.head
        순회용현재노드 = 순회용현재노드.next

        let 데이터들 = ''
        for (let i = 0; i < this.데이터수; i++) {
            데이터들 += `${순회용현재노드.data}, `
            순회용현재노드 = 순회용현재노드.next
        }

        return '[' + 데이터들.slice(0, -2) + ']'
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드

        this.데이터수 += 1
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()




// step 6 data를 arr로 만들기

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init

        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }

    toString(){
        let 순회용현재노드 = this.head
        순회용현재노드 = 순회용현재노드.next

        let 데이터들 = ''
        for (let i = 0; i < this.데이터수; i++) {
            데이터들 += `${순회용현재노드.data}, `
            순회용현재노드 = 순회용현재노드.next
        }

        return '[' + 데이터들.slice(0, -2) + ']'
    }

    // data를 얻기 위한 메서드, data를 넣기 위한 메서드는 getter와 setter를 사용을 권고합니다.
    fullData(){
        return JSON.parse(this.toString())
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드

        this.데이터수 += 1
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()
l.fullData()



// step 7 node 삽입하기

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(){
        let init = new Node('init')
        this.head = init
        this.tail = init

        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }

    toString(){
        let 순회용현재노드 = this.head
        순회용현재노드 = 순회용현재노드.next

        let 데이터들 = ''
        for (let i = 0; i < this.데이터수; i++) {
            데이터들 += `${순회용현재노드.data}, `
            순회용현재노드 = 순회용현재노드.next
        }

        return '[' + 데이터들.slice(0, -2) + ']'
    }

    // data를 얻기 위한 메서드, data를 넣기 위한 메서드는 getter와 setter를 사용을 권고합니다.
    fullData(){
        return JSON.parse(this.toString())
    }
    
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        this.tail = 새로운노드

        this.데이터수 += 1
    }

    insert(index, data){
        let 순회용현재노드 = this.head
        순회용현재노드 = 순회용현재노드.next

        for (let i = 0; i < index - 1; i++) {
            순회용현재노드 = 순회용현재노드.next
        }

        let 새로운노드 = new Node(data)
        새로운노드.next = 순회용현재노드.next
        순회용현재노드.next = 새로운노드

        this.데이터수 += 1
    }
}

l = new LinkedList()
l.append(1)
l.append(2)
l.append(3)
l.append(10)
l.append(20)
l.append(30)
l.length()
l.toString()
console.log(l.fullData())
l.insert(3, 1000)
console.log(l.fullData())


// 더블 링크드 리스트의 기본 형태
const list = {
    head: null
}

let list1 = {value:12, next:null, pre:null}
let list2 = {value:99, next:null, pre:null}
let list3 = {value:37, next:null, pre:null}
let list4 = {value:2, next:null, pre:null}
list1.next = list2
list2.next = list3
list3.next = list4
list1.pre = list.head
list2.pre = list1
list3.pre = list2
list4.pre = list3
list.head = list1

// list4.pre.pre.value

class Node {
    constructor(data){
        this.data = data
        this.pre = null
        this.next = null
    }
}

class DoubleLinkedList {
    // ... 중략 ...
    append(data){
        let 새로운노드 = new Node(data)
        this.tail.next = 새로운노드
        새로운노드.pre = this.tail
        this.tail = 새로운노드
    }
    // ... 중략 ...
}

l = new DoubleLinkedList()
l.append(1)


// class Arr extends Array {
//     attack(){
//         console.log('공격!')
//     }
// }



//////////////// 3. 정렬 ////////////////

// 3.1 선택정렬
// step 1
let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 후 = []

// step 2
let 전 = [199, 22, 33, 32, 64, 72, 222, 233];
let 후 = [12]

// step 3
let 전 = [199, 33, 32, 64, 72, 222, 233];
let 후 = [12, 22]

// step 4
let 전 = [199, 33, 64, 72, 222, 233];
let 후 = [12, 22, 32]


let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
let 정렬된배열 = []
let 길이 = 입력값.length

// 주의해야 할 사항 : pop을 하면 length가 줄어듭니다!
// for (let i = 0; i < 입력값.length; i++) {
//     console.log(입력값.pop())
//     console.log(i)   
// }

for (let i = 0; i < 길이; i++) {
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값)
    입력값.splice(입력값.indexOf(최솟값), 1)
}


/////////


let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
let 정렬된배열 = []
// let 길이 = 입력값.length -> 생략해도 됨

while (!!입력값.toString()) {
    let 최솟값 = Math.min(...입력값);
    정렬된배열.push(최솟값)
    입력값.splice(입력값.indexOf(최솟값), 1)
}

// 3.1 선택정렬(메서드 최소화) - 다른 풀이
// 제대로 하려면(자리 바꾸는 것까지)

let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233]
let 정렬된배열 = []

function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let min_index = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_index] > arr[j]) {
                min_index = j
            }
        }

        let temp = arr[min_index]
        arr[min_index] = arr[i]
        arr[i] = temp
    }
    return arr
}



// 3.2 삽입정렬(자기가 들어갈 위치를 찾아감!, O(n**2))
let 전 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [];

let 전 = [22, 33, 12, 32, 64, 72, 222, 233];
let 후 = [199];

let 전 = [33, 12, 32, 64, 72, 222, 233];
let 후 = [22, 199];

let 전 = [12, 32, 64, 72, 222, 233];
let 후 = [22, 33, 199];

let 전 = [32, 64, 72, 222, 233];
let 후 = [12, 22, 33, 199];

let 전 = [64, 72, 222, 233];
let 후 = [12, 22, 32, 33, 199];

let 전 = [72, 222, 233];
let 후 = [12, 22, 32, 33, 64, 199];


let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function 삽입값이_들어갈_인덱스(정렬된배열, 삽입값){
    for (const i in 정렬된배열) {
        if (삽입값 < 정렬된배열[i]){
            return i
        }
    }
    return 정렬된배열.length
}

for (let i = 0; i < 배열의길이; i++) {
    let 삽입값 = 입력값.shift()
    let 인덱스 = 삽입값이_들어갈_인덱스(정렬된배열, 삽입값)
    정렬된배열.splice(인덱스, 0, 삽입값)
}

console.log(정렬된배열)


// 설명만 하고 가도록 하겠습니다.
function insertIndex(sorted_arr, value) {
    //삽입될 위치를 찾는 함수
    for(let i in sorted_arr){
        if(value < sorted_arr[i]){
            return i;
        }
    }
    return sorted_arr.length;
}

function insertSort(arr) {
    let sorted_arr = [];

    while (arr.length != 0){
        let value = arr.shift();
        //삽입될 위치를 반환함
        let index = insertIndex(sorted_arr, value);
        //삽입될 위치에 값을 반환
        sorted_arr.splice(index, 0, value);
    }
    return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));




let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];
let 배열의길이 = 입력값.length;

function insertIndex(sorted_arr, value) {
    //삽입될 위치를 찾는 함수
    for(let i in sorted_arr){
        if(value < sorted_arr[i]){
            return i;
        }
    }
    return sorted_arr.length;
}

function insertSort(arr) {
    let sorted_arr = [];

    while (arr.length != 0){
        let [value, ...arr2] = arr;
        arr = arr2
        //삽입될 위치를 반환함
        let index = insertIndex(sorted_arr, value);
        //삽입될 위치에 값을 반환
        sorted_arr.splice(index, 0, value);
    }
    return sorted_arr;
}
const arr = [199, 22, 33, 12, 32, 64, 72, 222, 233];
console.log(insertSort(arr));




// 3.3 병합정렬(Worst와 Best 모두 O(nlogn), 어떤 정렬보다 빠름, 동일 할 수 있음)
// let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
// let 정렬된배열 = [];
// 분할 정복(Divide and Conquer)

let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];
let 정렬된배열 = [];

// 분할(이해를 돕기 위해 8개로 조정)
[5, 10, 66, 77, 54, 32, 11, 15]
[5, 10, 66, 77], [54, 32, 11, 15]
[5, 10], [66, 77], [54, 32], [11, 15]
[5], [10], [66], [77], [54], [32], [11], [15]

// 정복(0번째끼리 비교!)
[5, 10], [66, 77], [32, 54], [11, 15]
[5, 10], [66, 77], [32, 54], [11, 15]
[5, 10, 66, 77], [11, 15, 32, 54]
[5, 10, 11, 15, 32, 54, 66, 77]


// step 1
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열){
    let 입력배열의길이 = 입력배열.length
    if (입력배열의길이 <= 1) {
        return 입력배열
    }
    let 중간값 = parseInt(입력배열의길이 / 2) //소수점 버리기위해 parseInt
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값))
    let 그룹둘 = 병합정렬(입력배열.slice(중간값))
    
    return `그룹하나 : ${그룹하나}\n그룹둘 : ${그룹둘}\n\n`
}

console.log(병합정렬(입력값))

// step 2
let 입력값 = [5, 10, 66, 77, 54, 32, 11, 15];

function 병합정렬(입력배열){
    let 입력배열의길이 = 입력배열.length
    let 결과값 = []

    if (입력배열의길이 <= 1) {
        return 입력배열
    }

    let 중간값 = parseInt(입력배열의길이 / 2)
    let 그룹하나 = 병합정렬(입력배열.slice(0, 중간값))
    let 그룹둘 = 병합정렬(입력배열.slice(중간값))
    
    while (그룹하나.length != 0 && 그룹둘.length != 0){
        if (그룹하나[0] < 그룹둘[0]){
            결과값.push(그룹하나.shift())
        } else {
            결과값.push(그룹둘.shift())
        }
    }

    while (그룹하나.length != 0){
        결과값.push(그룹하나.shift())
    }

    while (그룹둘.length != 0){
        결과값.push(그룹둘.shift())
    }

    return 결과값

}

console.log(병합정렬(입력값));




// 3.4 퀵정렬(best - O(nlog2n), worst - O(n**2))
// 피봇값(pivot)을 기준으로 정렬(피봇값은 처음값, 중간값, 마지막 값)
// 실무에서는 worst일 경우를 피하기 위해 피봇을 랜덤하게 주는 경우나, 피봇을 2개 사용하는 경우도 있음.

let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

// step 1
// 피봇값: 66

[ 54, 32, 10, 5, 11, 15] +[66]+[77]


let 입력값 = [66, 77, 54, 32, 10, 5, 11, 15];

function 퀵정렬(입력배열){
    let 입력배열의길이 = 입력배열.length

    if (입력배열의길이 <= 1) {
        return 입력배열
    }    

    const 피봇값 = [입력배열.shift()]
    const 그룹하나=[]
    const 그룹둘=[]

    for (let i in 입력배열) {
        if(입력배열[i] < 피봇값){
            그룹하나.push(입력배열[i])
        }else{
            그룹둘.push(입력배열[i])
        }
    }
    console.log(`그룹하나 : ${그룹하나}\n그룹둘 : ${그룹둘}\n\n 피봇값 : ${피봇값}\n`);

    return 퀵정렬(그룹하나).concat(피봇값, 퀵정렬(그룹둘));
}

console.log(퀵정렬(입력값));




///////////////////4. 페이지교체알고리즘


// 순서: 0, 4, 6, 5, 4, 7, 8

// FIFO 오래된 값이 가장 빨리 나간다
/*
[0]
*/
// LRU 오랫동안 사용되지 않는 값이 삭제
/*

*/



//////////////// 5.

const tree = {
    root : {
        value : 5,
        left : {
            value: 3,
            left: {
                value: 1,
                left: null,
                right: null
            },
            right: {
                value: 4,
                left: null,
                right: null
            },
        },
        right : {
            value: 8,
            left: {
                value: 6,
                left: null,
                right: null
            },
            right: {
                value: 9,
                left: null,
                right: null
            },
        },
    }
}

const tree ={
    root:{
        value:55,
        left:{
            value:30,
            left:{
                value:25,
                left:{
                    value:21,
                    left:null,
                    right:null,
                },
                right:null,
            },
            right:{
                value:37,
                left:null,
                right:null,
            },
        },
        right:{
            value:70,
            left:null,
            right:{
                value:77,
                left:{
                    value:75,
                    left:null,
                    right:null,
                },
                right:{
                    value:80,
                    left:null,
                    right:null,
                },
            },
        },
    },
}

// 55━70━77━80
// │         └━ 75
// │
// └━30━37
//       │
//       25
//       │
//       21

tree.root.value //55
tree.root.right.value //70
tree.root.right.right.value //77

// object나 array(기존자료형)으로 tree나 linkedList를 구현할 수 있는데 왜 class?

// 1. 더 light한 모델을 만들기 위해
// 2. 확장성
// 3. OOP (Object-Oriented Programming)에 철학에 맞기 때문에
// 불필요한 메소드나 프로퍼티가 없어서 글쿤요


const root = {
    value: 55,
    left: null,
    right: null
}

let node1 = {value:99, left:null, right:null}
let node2 = {value:53, left:null, right:null}
let node3 = {value:37, left:null, right:null}
let node4 = {value:54,  left:null, right:null}
root.right = node1
root.left = node2
node2.left = node3
node2.right = node4

root.root
// 55
root.right.value
// 99
root.left.value
// 53
root.left.left.value
// 37

// step1 노드생성
class Node{
    constructor(data){
        this.data=data
        // this.child = [] 이진트리가 아닌 트리가 된다.
        this.left=null
        this.right=null
    }
}

노드1=new Node(55);
노드2=new Node(99);
노드3=new Node(53);
노드4=new Node(37);
노드5=new Node(54);

노드1.right = 노드2
노드1.left = 노드3
노드3.right =노드4
노드3.left =노드5

노드1.root
노드1.right.data
노드1.left.data
노드1.left.left.data



// step2
class Node {
    constructor(data){
        this.data = data
        // this.child = [] // 2진트리가 아닌 트리가 됩니다. 저는 child를 많이 사용합니다.
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(data){
        let init = new Node(data)
        this.root = init
        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }
    
    insert(data){
        let 새로운노드 = new Node(data)
        let 순회용현재노드 = this.root

        while(순회용현재노드) {
            if (data === 순회용현재노드.data){
                // 값이 같으면 추가시켜주지 않습니다.
                return
            }
            if (data < 순회용현재노드.data){
                // 들어온 데이터가 작은 경우 왼쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if(!순회용현재노드.left){
                    순회용현재노드.left = 새로운노드
                    this.데이터수 += 1
                    return
                }
                순회용현재노드 = 순회용현재노드.left
            }
            if (data > 순회용현재노드.data){
                // 들어온 데이터가 큰 경우 오른쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if(!순회용현재노드.right){
                    순회용현재노드.right = 새로운노드
                    this.데이터수 += 1
                    return
                }
                순회용현재노드 = 순회용현재노드.right
            }
        }
    }
}

let t = new Tree(5)
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);

t.root.data
// 5
t.root.left.data
// 3
t.root.right.right.data
// 9
t.root.right.left.data
// 6



// step 3 트리의 순회
class Node {
    constructor(data){
        this.data = data
        // this.child = [] // 2진트리가 아닌 트리가 됩니다. 저는 child를 많이 사용합니다.
        this.left = null
        this.right = null
    }
}

class Tree {
    constructor(data){
        let init = new Node(data)
        this.root = init
        this.데이터수 = 0
    }

    length(){
        return this.데이터수
    }
    
    insert(data){
        let 새로운노드 = new Node(data)
        let 순회용현재노드 = this.root

        while(순회용현재노드) {
            if (data === 순회용현재노드.data){
                // 값이 같으면 추가시켜주지 않습니다.
                return
            }
            if (data < 순회용현재노드.data){
                // 들어온 데이터가 작은 경우 왼쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if(!순회용현재노드.left){
                    순회용현재노드.left = 새로운노드
                    this.데이터수 += 1
                    return
                }
                순회용현재노드 = 순회용현재노드.left
            }
            if (data > 순회용현재노드.data){
                // 들어온 데이터가 큰 경우 오른쪽에 붙여야 합니다!
                // 해당 데이터 부분이 비어있으면 데이터를 넣고, 비어있지 않으면 계속 타고 내려가야 합니다.
                if(!순회용현재노드.right){
                    순회용현재노드.right = 새로운노드
                    this.데이터수 += 1
                    return
                }
                순회용현재노드 = 순회용현재노드.right
            }
        }
    }

    //깊스너큐, 파선아실
    DFS() {
        // 깊이우선탐색, DFS(Depth First Search)
        // Stack 이용!
        let 결과값 = []
        let 스택 = [this.root]

        while (스택.length !== 0){
            let current = 스택.pop()
            if (current.right){
                스택.push(current.right)
            }
            if (current.left){
                스택.push(current.left)
            }
            결과값.push(current.data)
        }
        return 결과값
    }

    BFS() {
        // 너비우선탐색, BFS(Breadth First Search)
        // Queue 이용!
        let 결과값 = []
        let 스택 = [this.root]

        while (스택.length !== 0){
            let current = 스택.shift()
            if (current.right){
                스택.push(current.right)
            }
            if (current.left){
                스택.push(current.left)
            }
            결과값.push(current.data)
        }
        return 결과값
    }
}

let t = new Tree(5)
t.insert(3);
t.insert(8);
t.insert(1);
t.insert(4);
t.insert(6);
t.insert(9);

t.DFS()





// 문제: https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/#3-%EC%BA%90%EC%8B%9C%EB%82%9C%EC%9D%B4%EB%8F%84-%ED%95%98








let x=9
x.toString(2)
x.toString(2).replace(/1/g, '#');
x.toString(2).replace(/1/g, '#').replace(/0/g, ' ');

(9 | 30).toString(2).replace(/1/g, '#').replace(/0/g, ' ');
(20 | 1).toString(2).replace(/1/g, '#').replace(/0/g, ' ');


// 유틸리티 코드 //

const zip = (a, b) => a.map((value, index) => [value, b[index]])

const fillSpace = (n, s) => {
    return ' '.repeat(n - s.length) + s
}

n = 5
arr1 = [5, 20, 28, 18, 11]
arr2 = [3, 1, 21, 17, 28]

function solution(n, arr1, arr2) {
    result = []
    for (let i = 0; i < n; i++) {
        result.push(fillSpace(n,(arr1[i] | arr2[i]))
            .toString(2)
            .replace(/1/g, '#')
            .replace(/0/g, ' '))    
    }
    return result
}

console.log(solution(n, arr1, arr2))



// step 3

n = 5
arr1 = [5, 20, 28, 18, 11]
arr2 = [3, 1, 21, 17, 28]

function solution(n, arr1, arr2) {
    const fillSpace = (n, s) => {
        return ' '.repeat(n - s.length) + s
    }

    result = []
    for (let i = 0; i < n; i++) {
        result.push(fillSpace(n, (arr1[i] | arr2[i])
            .toString(2)
            .replace(/1/g, '#')
            .replace(/0/g, ' ')))    
    }
    return result
}

console.log(solution(n, arr1, arr2))


// step 4 zip 사용
n = 5
arr1 = [9, 20, 28, 18, 11]
arr2 = [30, 1, 21, 17, 28]

function solution(n, arr1, arr2) {
    const fillSpace = (n, s) => {
        return ' '.repeat(n - s.length) + s
    }
    const zip = (a, b) => a.map((value, index) => [value, b[index]])

    result = []
    for (const [i, j] of zip(arr1, arr2)) {
        result.push(fillSpace(n, (i | j)
            .toString(2)
            .replace(/1/g, '#')
            .replace(/0/g, ' ')))
    }
    return result
}

console.log(solution(n, arr1, arr2))



//다트게임

testcase = [
    '1S2D*3T', // 37
    '1D2S#10S', // 9
    '1D2S0T' // 3
]

for (const i of testcase) {
    //console.log(i)
    console.log(solution(i))
}

function solution(dartResult){
    let answer = []
    let result = 0
    let temp = 0

    for (let i = 0; i < dartResult.length; i++) {
        if (dartResult[i] >= 0 && dartResult[i] <= 9){
            temp = parseInt(dartResult[i])
        } else if(dartResult[i] == 'S'){
            answer.push(temp)
        } else if(dartResult[i] == 'D'){
            answer.push(temp**2)
        } else if(dartResult[i] == 'T'){
            answer.push(temp**3)
        }
    }

    return answer
}





// https://programmers.co.kr/learn/courses/30/lessons/17680


testcase = [
    [3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]],
    [3, ["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"]],
    [2, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"]]
];

for (const [cacheSize, cities] of testcase) {
    console.log(solution(cacheSize, cities))
}

function solution(cacheSize, cities){
    let time = 0
    let cache = []
    for (let i = 0; i < cities.length; i++) {
        let city = cities[i].toLowerCase()
        let index = cache.indexOf(city)
        if(index !== -1){
            //hit
            cache.splice(index, 1)
            cache.push(city)
            time += 1
        } else {
            //miss
            cache.push(city)
            time += 5
            if(cacheSize < cache.length){
                cache.shift()
            }
        }
    }
    return time
}










// https://programmers.co.kr/learn/courses/30/lessons/42888

let test = [
    'A 10 !',
    'B 20 !',
    'A 22 @',
    'B 20 @',
    'A 21 @'
]

test.forEach(s=>console.log(s.split(' ')))

test.forEach(s=>{
    let [하나, 둘, 셋]=s.split(' ')
    console.log(하나, 둘, 셋);
})

let record = [
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function solution(record){
    let answer =[]
    let 유저정보 ={}
    let result = []

    for (const i of record) {
        const [상태, 아이디, 닉네임]= i.split(' ');
        if( 상태 === 'Enter'){
            유저정보[아이디] = 닉네임
            result.push([아이디, '님이 들어왔습니다.'])
            
        }else if(상태 === 'Leave'){
            result.push([아이디, '님이 나갔습니다.'])
            
        }else if(상태 === 'Change'){
            유저정보[아이디] = 닉네임

        }
    }

    for(const [아이디, 메시지] of result){
        answer.push(유저정보[아이디] + 메시지)
    }

    return answer

}

solution(record)



// 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889

// step 1
function solution(스테이지수, stages){
    let 실패율 = []

    for (let i = 1; i < 스테이지수; i++) {
        let 도달한사람수 = stages.filter((user)=>user===i);
        실패율.push(도달한사람수)
    }

    return 실패율
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);






// 추가 유틸리티 코드
// 무한 이터러블을 생성하는 제너레이터 함수
// const zip = (a, b) => a.map((v, i)=>[v, b[i]]);
const infi = (function* () {
    let x = 0

    while (true) {
        x += 1
        yield x;
    }
}());

const zip = (a, b) => a.map((v, i)=>[v, b.next().value]);

// zip([10, 20, 30], [100, 200, 300])
zip([10, 20, 30], infi)

// for (const i of infi) {
//     if (i > 10){
//         break;
//     }
//     console.log(i);
// }