fetch("http://www.julianaivars.com/juliana/wp-json/wp/v2/bike?order=asc")
.then(res => res.json())
.then(handleData)

function handleData(posts) {
    posts.forEach(showPost) 

}

function showPost(post) {

    console.log(post)
    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = post.brand;
    copy.querySelector(".body").innerHTML = post.content.rendered;
    copy.querySelector(".brand").textContent = post.title.rendered;
    copy.querySelector(".price span").textContent = post.price;
    copy.querySelector(".colour span").style.backgroundColor = post.colour;
    
    if(post.in_stock==1){
        copy.querySelector(".instock span").textContent = "Yes"
    } else {
        copy.querySelector(".instock span").textContent = "No"
    }
    document.querySelector("main").appendChild(copy);
}

