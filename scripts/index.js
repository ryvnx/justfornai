// login page scripts
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    validateForm();
  });
  
  function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    //validasi username dan password, username dan password bisa diganti sesuai keinginan
    if (username === "nailah" && password === "ryan") {
      Swal.fire({
        icon: "success",
        title: "Login berhasil!",
        text: "Selamat datang sengggggg",
        showConfirmButton: false,
        timer: 1500,
      }).then(function () {
        window.location.href = "love.html";
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login gagal!",
        text: "Masa ga kenallllll aku :(",
        confirmButtonText: "Coba lagi",
        confirmButtonColor: "#ff7675",
      });
    }
  }
  