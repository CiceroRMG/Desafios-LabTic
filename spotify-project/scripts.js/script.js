const lista = document.querySelector('.recent-searches-list')

async function carregarJSON() {
  try {
    const response = await fetch('teste.json');
    const data = await response.json();
    const artistas = data.artists

    artistas.forEach(elemento => {
      return criadiv(elemento)
    });
    
    function criadiv(elemento){
      const li = document.createElement('li')
      li.classList.add('this-li')
      const img = document.createElement('img')
      img.setAttribute('src', `${elemento.img}`)
      const h2 = document.createElement('h2')
      h2.classList.add('li-title')
      h2.innerText = `${elemento.name}`
      const p = document.createElement('p')
      p.innerText=`${elemento.genre}`
      const btnDelete = document.createElement('button')
      btnDelete.classList.add('delete')
      const imgBtnDelete = document.createElement('img')
      imgBtnDelete.setAttribute('src', './images/x.svg')
      imgBtnDelete.classList.add('delete-img')
      btnDelete.appendChild(imgBtnDelete)

      li.appendChild(img)
      li.appendChild(h2)
      li.appendChild(p)
      li.appendChild(btnDelete)
      lista.appendChild(li)
    }

    const searchBar = document.querySelector('.search-bar')
    searchBar.addEventListener('input', filtra)

    function filtra(){
      const listaDeLi = document.querySelectorAll('.this-li')
      const inputFiltrado = searchBar.value.toLocaleLowerCase().trim()
      listaDeLi.forEach((cadaLi)=>{
        const nomeFiltrado = cadaLi.querySelector('.li-title').textContent.toLocaleLowerCase()

        if(inputFiltrado != ""){
          if(nomeFiltrado.includes(inputFiltrado)){
            cadaLi.style.display = "block"
          } else{
            cadaLi.style.display = "none"
          }
        } else {
          cadaLi.style.display = "block"
        }
      }) 
    }

    const todosBtnExclui = document.querySelectorAll('.delete')
    todosBtnExclui.forEach(btn=>{
      btn.addEventListener('click', exclui)
    })
    function exclui(event){
      const elemento = event.currentTarget.parentNode
      elemento.remove()
    }

    const btnSeeAll = document.querySelector('.see-all-btn')
    const listainteira = document.body.querySelector('.recent-searches-list')
    btnSeeAll.addEventListener('click', mostratudo)

    function mostratudo(ev){
      const btn = document.querySelector('.see-all-btn')

      if(btn.textContent == 'See Less'){
        listainteira.style.overflow = 'auto'
        btn.innerText = 'See All'
      } else if (btn.textContent == 'See All'){
        listainteira.style.overflow = 'visible'
        btn.innerText = 'See Less'
      }
    }
    


  } catch (error) {
    console.error('Erro ao carregar JSON', error);
  }
}

carregarJSON()


