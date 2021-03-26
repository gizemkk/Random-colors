export default function randomColor(){
    let color= '';
    color=`RGB(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    return color 
}

