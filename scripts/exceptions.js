//Системные исключения

//let abc = '!!!';
try {
    console.log('Начало блока try');
    console.log(abc);
    console.log('Конец блока try');
}

catch (err) {
    console.log('Возникла ошибка');
    //свойства ошибки ( Error)
    console.log(err.name); //тип исключения
    console.log(err.message); //описание ошибки 
    console.log(err.stack); // подсвечивает строчку кода с исключением - используется на этапе отладки ( на проде нет), так как ссылается на строчку с ошибкой
}

try {
testDivision();
}
catch { //здесь блок без параметров, он сигнализирует, что ошибка есть в принципе
   console.log('Ошибка в функции testDivision') 
}





function testDivision() {
    try {
    console.log(division(4,2));
    console.log(division(4,0));
    }
    catch(err){
        //в случае, если мы неправильно прописали код в блоке catch, то здест срабатывает исключение
        if(err.name !='SyntaxError') {
            throw new Error('Exception not handled');
        }
        console.log(err.name);
        console.log(err.message);
    }
    finally {
        console.log('Тест завершен'); //этот блок срабатывает в любом случае, его часто используют в функциях
    }
}


function division(dividend, divider) {
    if(divider == 0) 
    //правильное написание
    throw new Error('division by zero detected');
       // throw -1;
    // throw { пример, как бросается исключение
        //name:'MyError';
        //message: 'обнаружено деление на 0';
        //code:-1;
    //}
    return dividend/divider;
}


