
 b.addEventListener('click',function(){
    let t= document.getElementById("t")
    let b= document.getElementById("b")
    let r = t.value;
    url = 'http://www.omdbapi.com/?i=tt3896198&apikey=bab63207';
    
    
    let url1 = url.concat(r)
    console.log(url1)

    fetch(url1)
    // fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(json =>
    {
        for(const key in json)
        {
        const {Title,Year,Rated,Released,Runtime} = json[key]
        
        const div1 = document.createElement("div")
       div1.className="card"
       const div2 = document.createElement("div")
       div2.className="card-body"
    //    const img = document.createElement("img")
    //    img.src="img"
       
    //    img.classList.add( "card-img-top", "card-img")
    const p1 = document.createElement('p')
    p1.className="card-text"
    p1.textContent="Title :" +Title

    const p2 = document.createElement('p')
    p2.className="card-text"
    p2.textContent="Year : " +Year

    const p3 = document.createElement('p')
    p3.className="card-text"
    p3.textContent="Rated : " +Rated

    const p4 = document.createElement('p')
    p4.className="card-text"
    p4.textContent="Realesed : " +Released

    const p5 = document.createElement('p')
    p5.className="card-text"
    p5.textContent="Runtime : " +Runtime
     
div2.appendChild(p1)
div2.appendChild(p2)
div2.appendChild(p3)
div2.appendChild(p4)
div2.appendChild(p5)


div1.appendChild(img)
div1.appendChild(div2)
document.body.appendChild(div1)
console.log(Title,Year,Rated,Released,Runtime)


        }
    })
})
