const arr = []
const s = () => {
    const signUp = prompt("Would you like to sign up? (yes/no)")
    if (signUp.toLowerCase() === "yes") {
        const naam = prompt("Please enter your name:")
        arr.push(naam)
        console.log("User added successfully!")
    } 
    else {
        console.log("Okay, maybe next time!")
    }
    console.log("Existing users:",arr)
}
s()
