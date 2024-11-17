// console.log('halo dek')

const btn_edit = document.querySelector('#btn_edit');
const btn_resume = document.querySelector('#btn_resume');
const btn_submit = document.querySelector('#btn_submit');
const formPage = document.querySelector('.form');

btn_edit.addEventListener('click', () => {
    // formPage.style.display = 'flex';
    //statement untuk show dan hide 
    // binding inputan
    const inputNama = document.querySelector('#inputNama');
    const inputRole = document.querySelector('#inputRole');
    const inputAvail = document.querySelector('#inputAvail');
    const inputUsia = document.querySelector('#inputUsia');
    const inputLokasi = document.querySelector('#inputLokasi');
    const inputPengalaman = document.querySelector('#inputPengalaman');
    const inputEmail = document.querySelector('#inputEmail');

    inputNama.value = "";
    inputRole.value = "";
    inputAvail.value = "";
    inputUsia.value = "";
    inputLokasi.value = "";
    inputPengalaman.value = "";
    inputEmail.value = "";

    if(formPage.style.display == 'none' || formPage.style.display == undefined){
        formPage.style.display = 'flex';
    }else {
        formPage.style.display = 'none';
    }
})


btn_submit.addEventListener('click', () => {
    // binding inputan
    const inputNama = document.querySelector('#inputNama').value;
    const inputRole = document.querySelector('#inputRole').value;
    const inputAvail = document.querySelector('#inputAvail').value;
    const inputUsia = document.querySelector('#inputUsia').value;
    const inputLokasi = document.querySelector('#inputLokasi').value;
    const inputPengalaman = document.querySelector('#inputPengalaman').value;
    const inputEmail = document.querySelector('#inputEmail').value;

    // send data to local storage here
    const dataForm = [{
        nama : inputNama, 
        role : inputRole,
        availability : inputAvail,
        usia : inputUsia,
        lokasi : inputLokasi,
        pengalaman : inputPengalaman,
        email : inputEmail,
    }]
    localStorage.setItem('ToStorage',JSON.stringify(dataForm))

    //binding text profile
    const nama = document.querySelector('#nama');
    const role = document.querySelector('#role');
    const avail = document.querySelector('#avail');
    const usia = document.querySelector('#usia');
    const lokasi = document.querySelector('#lokasi');
    const pengalaman = document.querySelector('#pengalaman');
    const email = document.querySelector('#email');

    //binding data from local storage
    const getForm = JSON.parse(localStorage.getItem('ToStorage'))
    nama.textContent = getForm[0].nama
    role.textContent = getForm[0].role
    avail.textContent = getForm[0].availability
    usia.textContent = getForm[0].usia
    lokasi.textContent = getForm[0].lokasi
    pengalaman.textContent = getForm[0].pengalaman
    email.textContent = getForm[0].email

    setTimeout(() => {
        formPage.style.display = 'none';
    },1000);

    setTimeout(() => {
        alert('Data Berhasil Disimpan')
    },1200);

    
})

btn_resume.addEventListener('click', () => {
    //statement untuk show dan hide 
    if(formPage.style.display == 'none' || formPage.style.display == undefined){
        formPage.style.display = 'flex';
    }else {
        formPage.style.display = 'none';
    }
    //get item from local storage
    const getForm = JSON.parse(localStorage.getItem('ToStorage'))

    // binding inputan
    const inputNama = document.querySelector('#inputNama');
    const inputRole = document.querySelector('#inputRole');
    const inputAvail = document.querySelector('#inputAvail');
    const inputUsia = document.querySelector('#inputUsia');
    const inputLokasi = document.querySelector('#inputLokasi');
    const inputPengalaman = document.querySelector('#inputPengalaman');
    const inputEmail = document.querySelector('#inputEmail');

    //set default value based on local storage data
    inputNama.value = getForm[0].nama;
    inputRole.value = getForm[0].role;
    inputAvail.value = getForm[0].availability;
    inputUsia.value = getForm[0].usia;
    inputLokasi.value = getForm[0].lokasi;
    inputPengalaman.value = getForm[0].pengalaman;
    inputEmail.value = getForm[0].email;
})

// untuk menampilkan data ketika habis di reset
function show(){
    const getForm = JSON.parse(localStorage.getItem('ToStorage'))
    nama.textContent = getForm[0].nama
    role.textContent = getForm[0].role
    avail.textContent = getForm[0].availability
    usia.textContent = getForm[0].usia
    lokasi.textContent = getForm[0].lokasi
    pengalaman.textContent = getForm[0].pengalaman
    email.textContent = getForm[0].email
}

if(getForm = JSON.parse(localStorage.getItem('ToStorage'))){
    show()
}
