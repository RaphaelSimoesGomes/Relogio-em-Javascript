function ShowData() {
    const dataA = new Date();
    const dataAtual = dataA.toDateString();
    document.getElementById('data').innerHTML = dataAtual;
}
document.addEventListener('DOMContentLoaded', function () {
    ShowData();
});
function Relógio() {
    function ShowHoras() {
        const d = new Date();
        const horaAtual = d.toLocaleTimeString();
        document.getElementById('horas').innerHTML = horaAtual;
    }
    function myFunction() {
        console.clear();
    }

    setInterval(() => {
        ShowHoras();
    }, 1000);

    setInterval(() => {
        myFunction();
    }, 999);

}
