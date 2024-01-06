window.onload = () => {
    let product_desc = document.getElementById("product-description-2");
    product_desc.classList.add("active");
}

function showSlides(n) {
    let slides = document.getElementsByClassName("product-card");
    // let descriptions = document.getElementsByClassName("description");0
    for (let i = 0; i < slides.length; i++) {
        if (i == n) {
            slides[i].style.width = "70%";0
            // descriptions[i].classList.add("active");
            // descriptions[i].style.display = "block";  
        } else {
            slides[i].style.width = "10%";
            // descriptions[i].classList.remove("active");
            // descriptions[i].style.display ="none";
        }
    }
}

document.getElementById("presentation-title").onclick = function() {toggle_appear("presentation-content")};
document.getElementById("exhibit-title").onclick = function() {toggle_appear("exhibit-content")};
document.getElementById("merch-title").onclick = function() {toggle_appear("merch-content")};

function toggle_appear(name) {
    let display = document.getElementById(name).style.display; 
    document.getElementById(name).style.display = display == "none" ? "flex" : "none"; 
}

function generate_designer(data) {
    let num = data.length;
    for (let i = 0; i < num; i++) {
        document.getElementById("presentation-content").innerHTML += `
        <div class="designer-card" onclick="openPage('designer.html')" style={background-img: url(${data[i].profile_pic});}>
        </div>`;
    }
}

function openPage(pageUrl){
    window.open(pageUrl);
}

function on() {
    document.getElementById("overlay").style.display = "block";
  }

generate_designer(DATA);
console.log(DATA[0].profile_pic)

// document.getElementsByClassName("designer-card")[0].onclick = function() {console.log("try");toggle_appear("main-content"); on()};