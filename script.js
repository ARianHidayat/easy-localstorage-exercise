const displayNama = document.querySelector('#nama');
const displayAlamat = document.querySelector('#alamat');

// form code here

const form = document.querySelector('.form')

const btnEdit = document.querySelector('#btn_edit')
const btnInput = document.querySelector('#btn_input')

const btnSimpan = document.querySelector('#btn_simpan')
const btnBatal = document.querySelector('#btn_batal')

btnSimpan.addEventListener('click', () => {
    const inputNama = document.querySelector('#input_name').value;
    const inputAlamat= document.querySelector('#input_alamat').value;
    displayNama.textContent = inputNama;
    displayAlamat.textContent = inputAlamat;

    const input = [{name : inputNama, alamat : inputAlamat}];
    localStorage.setItem('profile',JSON.stringify(input));

    form.style.display = 'none';

    // alert(inputNama);
})

function showFirst(){
    const displayNama = document.querySelector('#nama');
    const displayAlamat = document.querySelector('#alamat');
    const getProfile = JSON.parse(localStorage.getItem('profile'));
    displayNama.textContent = getProfile[0].name;
    displayAlamat.textContent = getProfile[0].alamat;
}
// showFirst()
if(JSON.parse(localStorage.getItem('profile'))){
    showFirst();
}

btnEdit.addEventListener('click',() => {
    form.style.display = 'block';
    const getProfile = JSON.parse(localStorage.getItem('profile'));

    const inputNama = document.querySelector('#input_name');
    const inputAlamat= document.querySelector('#input_alamat');

    inputNama.value = getProfile[0].name;
    inputAlamat.value = getProfile[0].alamat;
})
btnInput.addEventListener('click', () => {
    form.style.display = 'block';
    const getProfile = JSON.parse(localStorage.getItem('profile'));

    const inputNama = document.querySelector('#input_name');
    const inputAlamat= document.querySelector('#input_alamat');

    inputNama.value = "";
    inputAlamat.value = "";
})


// const data = [{name : 'jon', alamat : 'alaskandang'}];

// localStorage.setItem('profile',JSON.stringify(data));

// function getHitam(){
//     console.log(JSON.parse(localStorage.getItem('profile')));
// }
// getHitam()

btnBatal.addEventListener('click', () => {
    form.style.display = 'none';
})