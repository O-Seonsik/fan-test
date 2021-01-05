const fan = () => {
    if(document.getElementById('backend-data')){
        return alert("이미 정보를 불러왔습니다.")
    }

    fetch('http://34.67.216.174:5000')
        .then(response => response.json())
        .then(data => {
            let add_div = document.createElement("div")
            const dynamicDOM = document.getElementById("get_api")

            const text = "<p>author: " + data.author+ "</p>" + "<p>description: " + data.description+ "</p>" + "<p>date: " + data.date+ "</p>"
            add_div.innerHTML = text
            add_div.setAttribute("id", "backend-data")
            dynamicDOM.appendChild(add_div);
        })
        .catch((error) => {
            console.error('Error:', error)
        });
}


