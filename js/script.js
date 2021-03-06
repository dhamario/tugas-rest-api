function tampilkanSemuaMenu() {
  $.getJSON("data/pizza.json", function (data) {
    let menu = data.menu;
    $.each(menu, function (i, data) {
      $(`#daftar-menu`).append(
        `<div class="col-sm-6 col-md-4 mb-3">
        <div class="card">
          <img src="data/img/pizza/` +
          data.gambar +
          `" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">` +
          data.nama +
          `</h5>
            <p class="card-text">` +
          data.deskripsi +
          `</p>
            <h5 class="card-title">Rp. ` +
          data.harga +
          `</h5>
            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
          </div>
        </div>
      </div>`
      );
    });
  });
}

tampilkanSemuaMenu();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $(".menu-title").html(kategori);

  if (kategori == "All Menu") {
    tampilkanSemuaMenu();
    return;
  }

  $.getJSON("data/pizza.json", function (data) {
    let menu = data.menu;
    let content = "";
    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content +=
          `<div class="col-sm-6 col-md-4 mb-3">
        <div class="card">
          <img src="data/img/pizza/` +
          data.gambar +
          `" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">` +
          data.nama +
          `</h5>
            <p class="card-text">` +
          data.deskripsi +
          `</p>
            <h5 class="card-title">Rp. ` +
          data.harga +
          `</h5>
            <a href="#" class="btn btn-primary">Pesan Sekarang</a>
          </div>
        </div>
      </div>`;
      }
    });

    $("#daftar-menu").html(content);
  });
});
