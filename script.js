jsTask();

function jsTask() {
    let name = "stanley";
    let myCourses = ["html", "css", "javascript"];
    let storeNum = [];
    console.log("my name is " + name);
    for (let i = 0; i < myCourses.length; i++) {
        console.log("list of my courses is " + myCourses[i]);
    }
    if(myCourses.length%2===0){
        for (let i = 2; i <= 200; i+=2) {
            storeNum.push(i);
        } 
    }
    else{
        for (let i = 1; i <= 200; i+=2) {
            storeNum.push(i);
        }
    }
    
    console.log(storeNum);
}
