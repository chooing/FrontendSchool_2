class Me {
    // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
    constructor(name, address, phoneNum) {
        this.name = name;
        this.address = address;
        this.phoneNum = phoneNum;
    }

    canWalk = function () {
        console.log('재현이가 걷는다.');
    }

    teaching = function (student) {
        student.levelUp();
    }
}

class Student {
    constructor(level) {
        this.level = level;
    }
    levelUp = function () {
        this.level++;
    }
}