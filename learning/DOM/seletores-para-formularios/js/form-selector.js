function showinfo(){
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    let likeProgramming = document.querySelector("input[name='like-programming']:checked")
    
    
    let developerOptions = document.querySelectorAll("input[mame='developer-options']:checked")
    let optionsValue = []

    developerOptions.forEach(element => {optionsValue.push(element.value)})
    let optionsChecked = optionsValue.join(", ")


    console.log("Nome: "+ name + "\nCor Primária: " + favoriteColor + "\nGosta de programar? " + likeProgramming + "\nConhecimento dem programação web: " + optionsChecked)
}