window.addEventListener('load',()=>{
    let Vowels = ['a', 'e', 'i', 'o', 'u']
    const inp = document.querySelector(".input")
    const frm = document.querySelector(".main-form")
    let task = inp.value
    let counter = 0
   
    frm.addEventListener('submit',(e)=>{
        e.preventDefault()
        let task = inp.value
        
        for (let i = 0; i < task.length; i++){
    task[i] = task[i].toLowerCase();
    if (Vowels.includes(task[i]))
    {

        counter+=1
    }
}
alert(`Number of vowels are ${counter}`)
    })
    

   

})