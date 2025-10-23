function post(){
    inputTitle = document.querySelector("#inputTitle")
    inputContent = document.querySelector("#inputContent")
    articles = document.querySelector("#articles")

    articles.innerHTML = articles.innerHTML +
    `<div class="article">
        <h2 class="title">${inputTitle.value}</h2>
        <hr/>
        <p class="content" >${inputContent.value}</p>
    </div>`

    inputTitle.value = ""
    inputContent.value = ""

}