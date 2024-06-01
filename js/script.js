


var siteName = document.getElementById("name");
var siteUrl = document.getElementById("url");
var overlay = document.getElementById("popOverlay");
var container = document.getElementById("popContainer");
var siteList = [];


// console.log(localStorage.length);
if (localStorage.getItem("siteData") != null) {
    siteList = JSON.parse(localStorage.getItem("siteData"));
    displayData();
}


function add() {
    if (validataName() == true && validataUrl() == true) {
        var site = {
            siteName: siteName.value,
            url: siteUrl.value,
        }
        // alert(`${site.url}`);
        siteList.push(site);
        localStorage.setItem("siteData", JSON.stringify(siteList));


        displayData();
        clear();
    }
    else {

        container.style.visibility = "visible";
        overlay.style.visibility = "visible";

    }


}

function exit() {
    container.style.visibility = "hidden";
    overlay.style.visibility = "hidden";
}

function displayData() {
    var cartona = "";
    for (var i = 0; i < siteList.length; i++) {
        cartona += `
    <tr>
        <td>${i + 1}</td>
        <td>${siteList[i].siteName}</td>

        <td>
        <a style="color:white; background-color: #8A9E23" class="btn  py-2  fw-bold px-4 fs-5" href="${siteList[i].url}">
        <span><i class="fa-regular fa-eye"></i></span> Visit
        </a>
        
        </td>

        <td>
        <button onclick="deleteUrl(${i})" style="" class="btn btn-danger py-2  fw-bold px-4 fs-5">
            <span><i class="fa-solid fa-trash"></i></span>
            Delete
        </button>
        </td>

    </tr>`;

    }
    document.getElementById("data").innerHTML = cartona;
}
function validataName() {
    var regexName = /\w{3}$/gm
    if (regexName.test(siteName.value) == true) {
        siteName.classList.add("is-valid");
        siteName.classList.remove("is-invalid");

        return true;

    }
    else {
        siteName.classList.add("is-invalid");

        return false;
    }
}
function validataUrl() {
    // var regexUrl=/^(https:\/{2})?www\..{2,}\.com$/gm 
    var regexUrl = /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/gm
    if (regexUrl.test(siteUrl.value) == true) {
        siteUrl.classList.add("is-valid");
        siteUrl.classList.remove("is-invalid");

        return true;
    }
    else {
        siteUrl.classList.add("is-invalid");

        return false;
    }

}

function deleteUrl(deleteIndex) {
    siteList.splice(deleteIndex, 1);
    localStorage.setItem("siteData", JSON.stringify(siteList));
    displayData();
}


function clear() {
    siteName.value = null;
    siteUrl.value = null;
    siteUrl.classList.remove("is-invalid");
    siteUrl.classList.remove("is-valid");
    siteName.classList.remove("is-invalid");
    siteName.classList.remove("is-valid");

}