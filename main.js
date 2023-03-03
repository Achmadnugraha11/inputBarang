const dataBarang = []; //array untuk menampung barang

//untuk menampilkan barang
function showBarang() {
    const listBarang = document.getElementById("list-barang");

    //clear list barang
    listBarang.innerHTML = "";

    //cetak semua barang
    for (let i = 0; i < dataBarang.length; i++) {
        const btnEdit = "<button class='btn btn-primary btn-sm' id='edit' onclick='editBarang(" + i + ")''>Edit</button>";
        const btnHapus = "<button class='btn btn-danger btn-sm' onclick='deleteBarang(" + i + ")''>Hapus</button>";

        listBarang.innerHTML += "<li>" + "<hr>" + dataBarang[i] + " " + btnEdit + " " + btnHapus + "</li>";
        }
    }

// tambah barang
function addBarang() {
    const input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    showBarang();
}

// edit barang
function editBarang(id) {
    const newBarang = prompt("Barang baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showBarang();
}

// hapus barang
function deleteBarang(id) {
    dataBarang.splice(id, 1);
    showBarang();
}

showBarang();
