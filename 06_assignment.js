// Create normal function with name --> monthYear() with one arg --> month. Inside this write a switch case & pass month in switch
var monthYear = 6;
switch (monthYear){
    case 1 :
        console.log(`January`);
        break;
    case 28 :
        console.log(`February`);
        break;
    case 3 :
        console.log(`March`);
        break;
    case 4 :
        console.log(`April`);
        break;
    case 5 :
        console.log(`May`);
        break;
    case 6 :
        console.log(`June`);
        break;
    case 7 :
        console.log(`July`);
        break;
    case 8:
        console.log(`August`);
        break;
    case 9 :
        console.log(`September`);
        break;
    case 10 :
        console.log(`October`);
        break;
    case 11 :
        console.log(`November`);
        break;
    case 12 :
        console.log(`December`);
        break;
    default:
        console.log(`Invalid value ${monthYear}`);
        break;
}
