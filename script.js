var beg = document.getElementById("beg")
var end = document.getElementById("end")
var pass = document.getElementById("pass")
var res = document.getElementById("res")

function calcular() {

    if (beg.value.length == 0 || end.value.length == 0 || pass.value.length == 0){
        window.alert("{ERRO}")
    } else {
        res.innerHTML = "Contando: <br>"
        let i = Number(beg.value)
        let f = Number(end.value)
        let p = Number(pass.value)
        if (i <= f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c}...`
            }
            res.innerHTML += ("FIM!")
        } else{
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}...`
            }
            res.innerHTML += ("FIM!")
        }
    }
}