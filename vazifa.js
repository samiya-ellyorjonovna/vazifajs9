let saqlangan = localStorage.getItem('profil');

if (saqlangan !== null) {
    let profil = JSON.parse(saqlangan);
    
    n1.innerText = profil.ism;
    n2.innerText = profil.familiya;
    n3.innerText = profil.yosh;
}
function saqlash() {
    let ism = document.forma.ism.value;
    let familiya = document.forma.familiya.value;
    let yosh = document.forma.yosh.value;

    let profil = {
        ism: ism,
        familiya: familiya,
        yosh: yosh
    };

    localStorage.setItem('profil', JSON.stringify(profil));
    n1.innerText = ism;
    n2.innerText = familiya;
    n3.innerText = yosh;
}