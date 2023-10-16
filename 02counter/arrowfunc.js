const func1  = () => {
    let username = "shiam";
    console.log(this)
}
func1();


// const user = {
//     name:"shiba",
//     rolno:"292",
//     welcome: function(){
//         console.log(`my ${this.name}`)
//         console.log(this);
//     }
// }
// console.log(this)


// function jarvis(){
//     console.log(this);
// }
// jarvis()