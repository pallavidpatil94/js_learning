// fuction which pass as a argument into another fuction
let jennyHomework = function(callback){
    console.log(`Jenny started homework`);
    console.log(`Jenny took an hour`);
    console.log(`Finally she has completed her homework`);
    callback();
}
let elonCopyHomework = function(){
    console.log(`Elon is playing`);
    console.log(`Jenny called back Elon`);
    console.log(`Elon came and copied his homework`);
}

jennyHomework(elonCopyHomework);