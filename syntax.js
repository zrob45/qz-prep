// 1) - Syntax Correction

// The following pieces of code contain a number of errors, correct these errors so that the code runs properly
// While you may have syntax help with VSCode, it can be misleading so be careful.
    // a) - Arrays
    var q1Array = [0,1 2,3,4,5];
    var element03 = q1Array.(3);

//---- Solutions ----- ////
    var q1Array = [0,1,2,3,4,5];
    var element03 = q1Array[3];
//-----------------------//
// b) - Objects
    var q1Object = {
        'class':'1.00'
        'quiz', 1;
        'topics', ['node','google maps','callbacks','promises' ,
    };
//---- Solutions ----- ////

    var q1Object = {
        'class':'1.00',
        'quiz': 1,
        'topics':['node','google maps','callbacks','promises']
    };
//-----------------------//
// c) - Functions
    va q1func = function{
        return answer;
        var answer = 10;
    }
    var ans = q1func[];

//---- Solutions ----- ////
var q1func = function(){
    
    var answer = 10;
    return answer;
}
var ans = q1func();
//-----------------------//