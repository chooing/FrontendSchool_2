const path = require('path'); // 운영체제별로 상이한 경로문법을 동일하게 하기위해 작성

module.exports = {
    mode : 'development',
    entry : {
        main : path.resolve('./src/app.js')
    },
    output : {
        filename : '[name].js', // enntry에 키 값
        path : path.resolve('./dist') 
    }
}
