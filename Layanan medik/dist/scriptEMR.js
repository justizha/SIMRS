const canvas = document.getElementById("signatureCanvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;

const wt = new WebTour({
  borderRadius: 20,
  width: "500px",
});

// Set the pen color to blue-purple (hex: #8A2BE2)
ctx.strokeStyle = "#0a0aff";

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  ctx.beginPath();
  ctx.moveTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    ctx.lineTo(e.clientX - canvas.getBoundingClientRect().left, e.clientY - canvas.getBoundingClientRect().top);
    ctx.stroke();
  }
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mouseout", () => {
  isDrawing = false;
});

function resetSignature() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveSignature() {
  // You can save the signature as needed (e.g., send it to the server).
  // For demonstration purposes, we will simply show an alert with the image data.
  const signatureDataUrl = canvas.toDataURL();
  alert(`Signature Data URL: ${signatureDataUrl}`);
}

function updateDateTime() {
  const datetimeInput = document.getElementById("datetime");
  const now = new Date();

  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const day = now.getDate().toString().padStart(2, "0");
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
  datetimeInput.value = formattedDate;
}

// Initialize the input with current date and time
updateDateTime();

function toggleCheckbox(checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  const checkboxes = document.querySelectorAll(".checkbox");

  // Uncheck all checkboxes except the clicked one
  checkboxes.forEach((cb) => {
    if (cb.id !== checkboxId) {
      cb.checked = false;
    }
  });

  // Toggle the clicked checkbox state
  checkbox.checked = !checkbox.checked;
}

// Create buttons in the navbar based on contentDivs
const navbarButtons = document.getElementById("navbarButtons");
const allCustomDivs = document.querySelectorAll(".custom-div");
const allNestedDivs = document.querySelectorAll(".nested-div");
allNestedDivs.forEach((nestedDiv, index) => {
  const button = document.createElement("button");
  button.id = `helpButtonnestedDiv${index + 1}`;
  button.innerHTML = "?";
  button.classList.add("bg-gray-600", "rounded-md", "py-2", "text-white", "my-1.5", "text-2xl", "bottom-1", "w-12", "h-11", "text-center", "font-bold", "absolute", "right-1", "m-2", "hover:bg-gray-500", "hidden", "custom-help");
  console.log(button);
  navbarButtons.appendChild(button);
});
allCustomDivs.forEach((contentId, index) => {
  const button = document.createElement("button");
  button.id = `helpButtondiv${index + 1}`;
  button.innerHTML = "?";
  button.classList.add("bg-gray-600", "rounded-md", "py-2", "text-white", "my-1.5", "text-2xl", "bottom-1", "w-12", "h-11", "text-center", "font-bold", "absolute", "right-1", "m-2", "hover:bg-gray-500", "hidden", "custom-help");
  console.log(button);
  navbarButtons.appendChild(button);
});

let currentButton = "helpButtondiv3";

// Show the first button initially
const initialButton = document.getElementById("helpButtondiv3");
initialButton.classList.remove("hidden");

function toggleCustomDiv(idToToggle) {
  const allCustomDivs = document.querySelectorAll(".custom-div");
  const allCustomHelps = document.querySelectorAll(".custom-help");

  allCustomHelps.forEach((help) => {
    help.classList.add("hidden");
  });

  allCustomDivs.forEach((div) => {
    div.classList.add("hidden");
  });

  const divToToggle = document.getElementById(idToToggle);
  if (divToToggle) {
    divToToggle.classList.remove("hidden");

    if (idToToggle === "div1") {
      const landing = [
        {
          content: `<p class="text-2xl">Untuk dapat memulai tutorial penggunaan aplikasi SIMRS anda dapat mengetuk tombol “ ? ” yang terletak di kanan atas.</p>`, //can be string or html string
        },
      ];

      wt.setSteps(landing);
      wt.start();
    } else if (idToToggle === "div2") {
      const landing = [
        {
          content: `<p class="text-2xl">Untuk dapat memulai tutorial
          penggunaan aplikasi SIMRS 
          anda dapat mengetuk tombol “ ? ”
          yang terletak di kanan atas.</p>`, //can be string or html string
        },
      ];

      wt.setSteps(landing);
      wt.start();
    } else if (idToToggle === "div3") {
      const landing = [
        {
          content: `<p class="text-2xl">Untuk dapat memulai tutorial
          penggunaan aplikasi SIMRS 
          anda dapat mengetuk tombol “ ? ”
          yang terletak di kanan atas.</p>`, //can be string or html string
        },
      ];

      wt.setSteps(landing);
      wt.start();
    }
  }

  let currentButton = "helpButtondiv1";

  const contentButton = document.getElementById(currentButton);
  contentButton.classList.add("hidden");

  currentButton = `helpButton${idToToggle}`;
  console.log(currentButton);

  // Update the corresponding navbar button
  const navbarButton = document.getElementById(currentButton);
  if (navbarButton) {
    navbarButton.classList.remove("hidden");
  }
}

function showNestedDiv(idToShow) {
  const allNestedDivs = document.querySelectorAll(".nested-div");
  allNestedDivs.forEach((div) => {
    div.classList.add("hidden");
  });

  const divToHide = document.getElementById("divKosong");

  const divToShow = document.getElementById(idToShow);
  if (divToShow) {
    divToHide.classList.add("hidden");
    divToShow.classList.remove("hidden");

    let currentButton = "helpButtondiv4";

    const contentButton = document.getElementById(currentButton);
    contentButton.classList.add("hidden");

    const allCustomHelps = document.querySelectorAll(".custom-help");

    allCustomHelps.forEach((help) => {
      help.classList.add("hidden");
    });

    currentButton = `helpButton${idToShow}`;
    console.log(currentButton);

    // Update the corresponding navbar button
    const navbarButton = document.getElementById(currentButton);
    if (navbarButton) {
      navbarButton.classList.remove("hidden");
    }
  }
}

function toggleAndShowNestedDiv(idToToggle) {
  toggleCustomDiv(idToToggle);
  showNestedDiv(idToToggle + "-nestedDiv");
}

function dropdown() {
  document.querySelector("#submenu").classList.toggle("hidden");
  document.querySelector("#arrow").classList.toggle("rotate-180");
  document.querySelector("#submenu2").classList.toggle("hidden");
  document.querySelector("#arrow2").classList.toggle("rotate-180");
}

// const vector = document.querySelector("#vector");
// const vector2 = document.querySelector("#vector2");
// const sidebar = document.querySelector(".sidebar");

// vector.addEventListener("click", () => {
//   sidebar.classList.toggle("left-[0px]");
// });

// vector2.addEventListener("click", () => {
//   sidebar.classList.toggle("left-[-300px]");
// });

const liItems = document.querySelectorAll(".custom-li");

liItems.forEach((li) => {
  const ul = li.querySelector(".custom-ul");
  if (ul) {
    li.addEventListener("click", (event) => {
      ul.classList.toggle("hidden");
      event.stopPropagation();
    });
  }
});

function preventSubmenuClose() {
  const liItems = document.querySelectorAll(".custom-li");
  const sectionIds = Array.from(liItems).map((li) => li.id);

  sectionIds.forEach((sectionId) => {
    const customSubmenu = document.getElementById(`custom-submenu-${sectionId}`);

    if (customSubmenu) {
      customSubmenu.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    }
  });
}

preventSubmenuClose();

const slider = document.getElementById("mySlider");

function decreaseValue() {
  slider.stepDown();
  console.log(slider.value);
}

function increaseValue() {
  slider.stepUp();
  console.log(slider.value);
}

// Bagian Webtour JS

const landing = [
  {
    content: `<p class="text-2xl">Untuk dapat memulai tutorial penggunaan aplikasi SIMRS anda dapat mengetuk tombol “ ? ” yang terletak di kanan atas.</p>`, //can be string or html string
  },
];

wt.setSteps(landing);
wt.start();

const body = document.getElementById("body");

const helpB1 = document.getElementById("helpButtondiv1");

helpB1.addEventListener("click", helpVitalSign);

const helpB2 = document.getElementById("helpButtondiv2");

helpB2.addEventListener("click", helpResepElektronik);

const helpB3 = document.getElementById("helpButtondiv3");

helpB3.addEventListener("click", helpEMR);

const helpNestedB1 = document.getElementById("helpButtonnestedDiv1");

helpNestedB1.addEventListener("click", helpAsesmenAwalRJ);

const helpNestedB2 = document.getElementById("helpButtonnestedDiv2");

helpNestedB2.addEventListener("click", helpAsesmenMedisRJ);

const helpNestedB3 = document.getElementById("helpButtonnestedDiv3");

helpNestedB3.addEventListener("click", helpCPPT_RJ);

const helpNestedB4 = document.getElementById("helpButtonnestedDiv4");

helpNestedB4.addEventListener("click", helpAsesmenAwalRN);

const helpNestedB5 = document.getElementById("helpButtonnestedDiv5");

helpNestedB5.addEventListener("click", helpAsesmenMedisRN);

const helpNestedB6 = document.getElementById("helpButtonnestedDiv6");

helpNestedB6.addEventListener("click", helpCPPT);

function helpResepElektronik() {
  const RE = [
    {
      element: "#RE_1", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Detail Resep Elektronik",
      content: `
      Silakan masukkan tanggal pembuatan resep elektronik, nomor order resep elektronik, 
      dan nama dokter yang menulis resep elektronik tersebut.`, //can be string or html string
      placement: "bottom-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_2", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Data Resep Elektronik",
      content: `
      Tabel ini dapat digunakan untuk mengorder resep elektronik yang sudah di order sebelumnya 
      jadi anda tidak perlu membuat ulang resep yang sama, 
      cukup dengan menekan salah satu data resep elektronik yang ada.`, //can be string or html string
      placement: "bottom-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_3", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "R/Ke",
      content: `
      Ini adalah nomor urut resep elektronik. Setiap resep memiliki nomor urut yang berbeda untuk mengidentifikasi resep secara unik.`, //can be string or html string
      placement: "bottom-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_4", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Jenis Kemasan",
      content: `
      Pilih jenis kemasan obat, apakah racikan atau non-racikan. Racikan adalah obat yang disusun atau dibuat khusus sesuai dengan resep dokter, sedangkan non-racikan adalah obat yang tidak perlu disusun atau dibuat khusus.`, //can be string or html string
      placement: "bottom-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_5", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Kekuatan",
      content: `
      Masukkan kekuatan obat yang diresepkan oleh dokter. Kekuatan obat mengacu pada tingkat konsentrasi atau kekuatan komponen utama dalam obat.`, //can be string or html string
      placement: "bottom-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_6", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Produk",
      content: `
      Pilih produk obat yang diresepkan. Ini bisa berupa merek obat tertentu atau jenis obat yang spesifik.`, //can be string or html string
      placement: "bottom-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_7", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Jumlah Obat",
      content: `
      Tentukan jumlah obat yang akan diresepkan. Hal ini bisa diukur dalam berbagai satuan seperti tablet, kapsul, atau botol.`, //can be string or html string
      placement: "bottom-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_8", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Aturan Pakai",
      content: `
      Masukkan aturan pakai obat, misalnya, "3x1" berarti obat diminum 3 kali sehari, masing-masing 1 dosis.`, //can be string or html string
      placement: "bottom-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_9", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Satuan",
      content: `
      Pilih satuan untuk mengukur jumlah obat yang akan diresepkan, misalnya, tablet, kapsul, atau mililiter.`, //can be string or html string
      placement: "bottom-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_10", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Satuan Resep",
      content: `
      Pilih satuan resep yang sesuai dengan kebutuhan, seperti butir, strip, atau botol.`, //can be string or html string
      placement: "bottom-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_11", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Iter",
      content: `
      Tentukan iterasi atau perulangan pengambilan obat, misalnya, berapa kali obat diambil dalam satu resep.`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_12", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Keterangan",
      content: `
      Berikan keterangan tambahan atau informasi penting mengenai resep atau obat jika diperlukan.`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_13", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Qty Obat",
      content: `
      Tentukan jumlah obat untuk setiap kemasan atau iterasi, misalnya, berapa banyak obat dalam satu paket atau botol.`, //can be string or html string
      placement: "bottom-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_14", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Tombol Pengelola",
      content: `
      Gunakan opsi ini untuk menambah, menghapus, atau membatalkan paket obat sesuai dengan kebutuhan.`, //can be string or html string
      placement: "bottom", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_tabel", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Tabel Informasi",
      content: `
      Selain itu, terdapat informasi tambahan yang mencakup konversi, stok, harga, total, nomor, kemasan, jumlah/dosis, aturan pakai, satuan resep, keterangan pakai, deskripsi, stok, harga satuan, total, iter, dan tanggal kedaluwarsa. Informasi tambahan ini memberikan detail lebih lanjut mengenai obat dan alat kesehatan yang akan diresepkan.`, //can be string or html string
      placement: "bottom-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_Obat_Simpan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Simpan",
      content: `
      Tombol untuk mengelola data, seperti simpan data resep elektronik untuk menyimpan data tersebut ke bagian farmasi.`, //can be string or html string
      placement: "bottom", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_Obat_Batal", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Batal",
      content: `
      Tombol untuk mengelola data, seperti membatalkan aksi.`, //can be string or html string
      placement: "bottom", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_Obat_Kembali", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Kembali",
      content: `
      Tombol untuk mengelola data, seperti kembali ke halaman sebelumnya.`, //can be string or html string
      placement: "bottom-end", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RE_DSRE", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Data Stok Resep Elektronik",
      content: `
      Daftar obat-obatan yang sering diresepkan, termasuk nama produk dan stoknya di beberapa ruangan atau departemen di suatu rumah sakit.`, //can be string or html string
      placement: "top-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
  ];

  wt.setSteps(RE);
  wt.start();
}

function helpCPPT_RJ() {
  const cppt = [
    {
      element: "#RJ_DPJP", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Catatan Perkembangan Pasien Terintegrasi (C P P T)",
      content: `DPJP Utama (Dokter Penanggung Jawab Pasien Utama): Merupakan dokter yang bertanggung jawab secara utama terhadap perawatan dan pengelolaan pasien.`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RJ_DRB", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Dokter Rawat Bersama",
      content: `Informasi mengenai dokter lain yang terlibat dalam perawatan pasien selama proses rawat jalan.`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RJ_CPPT_Tanggal", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Tanggal dan Jam",
      content: `Waktu dan tanggal pencatatan catatan medis ini.`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RJ_CPPT_Catatan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Catatan Asuhan Medis dan Tenaga Medis Kesehatan Lain",
      content: `Catatan Asuhan Medis dan Tenaga Medis Kesehatan Lain: Bagian di mana dicatat perkembangan medis dan informasi lain yang berkaitan dengan pasien, termasuk hasil pemeriksaan fisik dan tindakan medis.`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RJ_CPPT_SOAP", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "S, O, A, P",
      content: `Merujuk pada SOAP (Subjective, Objective, Assessment, dan Plan), yaitu struktur umum untuk pencatatan informasi medis yang mencakup subjektif (keluhan pasien), objektif (hasil pemeriksaan fisik dan tes), penilaian (diagnosis), dan rencana perawatan.`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RJ_CPPT_DPJP", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Verifikasi DPJP",
      content: `Proses verifikasi DPJP melibatkan dokumentasi dan konfirmasi yang jelas mengenai identitas dokter yang bertanggung jawab atas perawatan pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#sign_pad_hapus", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Hapus Sign Pad",
      content: `Opsi untuk menghapus tanda tangan digital atau persetujuan yang mungkin telah dicatat.`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RJ_CPPT_Simpan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Simpan",
      content: `Opsi untuk menyimpan catatan.`, //can be string or html string
      placement: "top-end", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RJ_CPPT_Batal", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Batal",
      content: `Opsi untuk membatalkan aksi.`, //can be string or html string
      placement: "top-end", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#RJ_CPPT_Kembali", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Kembali",
      content: `Opsi untuk kembali ke halaman sebelumnya.`, //can be string or html string
      placement: "top-end", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
  ];

  wt.setSteps(cppt);
  wt.start();
}

function helpCPPT() {
  var wt = new WebTour({ borderRadius: 20 });
  var steps = [
    {
      content: `<div class="text-center py-12">
                      <h1 class="font-bold text-xl">Selamat Datang Ke SIMRS</h1>
                      <img src="../img/logoTrm.jpg" class="pl-[85px] pt-2"></img>
                  </div>`,
      width: "500px",
    },
    {
      element: "#CPPT",
      title: "Catatan Perkembangan Pasien Terintegrasi (C P P T)",
      content: `<div>
               Ini adalah catatan yang mencakup informasi mengenai perkembangan pasien secara terintegrasi, mencakup data seperti tanggal dan jam datang, DPJP Utama (Dokter Penanggung Jawab Pasien Utama), dan dokter yang merawat bersama pasien.  
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#tanggal3",
      title: " Tanggal dan Jam Datang",
      content: `<div>
               Tempat untuk mencatat tanggal dan jam pasien datang untuk pemeriksaan atau perawatan.
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#dpjpU",
      title: "DPJP Utama (Dokter Penanggung Jawab Pasien Utama)",
      content: `<div>
               Merupakan dokter yang bertanggung jawab utama terhadap perawatan pasien.
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#DRB",
      title: "Dokter Rawat Bersama",
      content: `<div>
              Pilihan untuk mencatat informasi tentang dokter-dokter lain yang terlibat dalam perawatan pasien.
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#catatanAM",
      title: " Catatan Asuhan Medis dan Tenaga Medis Kesehatan Lain",
      content: `<div>
              Tempat untuk mencatat perkembangan medis dan informasi yang berkaitan dengan perawatan pasien, termasuk intervensi yang dilakukan oleh tenaga medis kesehatan lain.
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#SOAP",
      title: "SOAP",
      content: `<div>
              Singkatan dari Subjective, Objective, Assessment, dan Plan, yang merupakan struktur umum untuk catatan medis yang mencakup subjektif (keluhan pasien), objektif (hasil pemeriksaan fisik dan tes), penilaian (diagnosis), dan rencana perawatan.
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#PPA",
      title: " Instruksi PPA (Pemeriksaan Penunjang dan Tindakan)",
      content: `<div>
              Berisi instruksi terkait pemeriksaan penunjang dan tindakan medis yang perlu dilakukan.
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#VDPJP",
      title: " Verifikasi DPJP",
      content: `<div>
              Bagian ini untuk mencatat verifikasi atau persetujuan dari DPJP Utama terhadap catatan perkembangan pasien.

                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#table",
      title: "",
      content: `<div>
              Tanggal/Jam, Catatan Asuhan Medis, dan Tenaga Medis Kesehatan Lain, Instruksi PPA, Verifikasi DPJP: Kolom-kolom yang memungkinkan penulisan dan pencatatan informasi medis yang berkaitan dengan pasien sesuai dengan tanggal dan jam tertentu
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#simpan3",
      title: "Simpan : Opsi untuk menyimpan catatan.",
      placement: "top",
      width: "400px",
    },
    {
      element: "#batal",
      title: "Batal : Opsi untuk membatalkan aksi.",
      placement: "top",
      width: "400px",
    },
    {
      element: "#kembali",
      title: "Kembali : Opsi untuk kembali ke halaman sebelumnya.",
      placement: "top",
      width: "400px",
    },
    {
      element: "#cetak",
      title: "Cetak : Opsi untuk mencetak.",
      placement: "top",
      width: "400px",
    },
    {
      element: "#CV",
      title: "Cetak View : Opsi untuk melihat tampilan cetak.",
      placement: "top-end",
      width: "400px",
    },
    {
      content: `<div class="text-center py-12">
                      <h1 class="font-bold text-xl">Ini Adalah Akhir Dari Tour!</h1>
                      <img src="../img/logoTrm.jpg" class="pl-[85px] pt-2"></img>
                  </div>`,
      width: "500px",
    },
  ];

  wt.setSteps(steps);
  wt.start();
}

function helpAsesmenMedisRN() {
  var wt = new WebTour({ borderRadius: 20 });
  var steps = [
    {
      content: `<div class="text-center py-12">
                                <h1 class="font-bold text-xl">Selamat Datang Ke SIMRS</h1>
                                <img src="../img/logoTrm.jpg" class="pl-[85px] pt-2"></img>
                            </div>`,
      width: "500px",
    },
    {
      element: "#KPM",
      title: "Kondisi saat Pasien Masuk",
      content: `<div>
                        Ceklis dan input salah satu kondisi pada saat pasien masuk    
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#KU2",
      title: "Keluhan Utama",
      content: `<div>
                        Input keluhan utama pasien
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#KSI",
      title: "Keluhan Saat Ini",
      content: `<div>
                        Input keluhan pasien saat ini
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#RPD2",
      title: "Riwayat Penyakit Dahulu",
      content: `<div>
                        Input riwayat penyakit dahulu pada pasien
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#asal",
      title: "Asal Pasien",
      content: `<div>
                        Ceklis salah satu asal pasien sebelumnya
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#dpjp",
      title: "DPJP",
      content: `<div>
                        Pilih salah satu DPJP ( Dokter Penanggung Jawab Pasien)
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#alat",
      title: "Alat Bantu yang Digunakan",
      content: `<div>
                        Ceklis salah satu alat bantu yang digunakan oleh pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#ttv",
      title: "TTV",
      content: `<div>
                        Input TTV meliputi TB (Tinggi Badan), BB (Berat Badan), TD (Tekanan Darah), Nadi, Nafas, Suhu dan juga SpO2
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#GCSD",
      title: "Glasgow Coma Scale Dewasa",
      content: `<div>
                        Ceklis salah satu pada Glasgow Coma Scale Dewasa
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#mvp",
      title: "Glasgow Coma Scale Dewasa",
      content: `<div>
                        Ceklis salah satu pada kolom Glasgow Coma Scale Dewasa meliputi Point :
                        1.Mata
                        2.Verbal
                        3.Pergerakan
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#rp",
      title: "Riwayat Pengobatan",
      content: `<div>
                        Input riwayat pengobatan / obat-obatan sesuai dengan keadaan pasien
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#WBF",
      title: "Deawasa dan Anak > 3 Tahun (Wong Baker Faces)",
      content: `<div>
                        Ceklis salah satu kolom score skala nyeri sesuai dengan kondisi pasien
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#rp2",
      title: "Riwayat Pasien",
      content: `<div>
                        Ceklis salah satu riwayat pasien sesuai dengan kondisi pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#deskripsi",
      title: " Deskripsi penyakit dan operasi yang tidak tercantum diatas",
      content: `<div>
                        Input deskripsi penyakit dan operasi yang tidak tercantum diatas
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#ra",
      title: " Riwayat (alergi)",
      content: `<div>
                        Input dan jelaskan riwayat (alergi) pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#obat",
      title: " Alkohol/obat",
      content: `<div>
                        Ceklis dan input pada kolom alkohol/obat sesuai dengan keadaan pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#mrkk",
      title: "Merokok ",
      content: `<div>
                        Ceklis dan input pada kolom Merokok sesuai dengan keadaan pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#rk",
      title: "Riwayat Keluarga",
      content: `<div>
                        Input riwayat penyakit keluarga pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#rn",
      title: "Resiko Nutrisional",
      content: `<div>
                        Ceklis salah satu kolom sesuai dengan keadaan pasien pada pernyataan Resiko Nutrisional Point 1 dan Point 2
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#pengkajian",
      title: "Penilaian Resiko Jatuh Morse ",
      content: `<div>
                        Ceklis salah satu kolom sesuai dengan keadaan pasien pada pernyataan Penilaian Resiko Jatuh Morse meliputi Point 1 sampai Point 6
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#resiko",
      title: "Tingkat resiko",
      content: `<div>
                        Ceklis salah satu tingkat resiko
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#mtht",
      title: "Pemeriksaan Mata,Hidung,Telinga dan Tenggorokan",
      content: `<div>
                        Ceklis salah satu kolom Pemeriksaan fisik umum meliputi Pemeriksaan mata, telinga, hidung dan juga penggorokan sesuai dengan kondisi pasien
                </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#catatan_RN",
      title: "Catatan",
      content: `<div>
                        Input catatan dari Pemeriksaan mata, telinga, hidung dan tenggorakan sesuai dengan kondisi pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#paru2",
      title: "Pemeriksaan paru(kecepatan, kedalaman, pola dan juga suara nafas) ",
      content: `<div>
                        Ceklis salah satu kolom Pemeriksaan fisik umum meliputi Pemeriksaan paru(kecepatan, kedalaman, pola dan juga suara nafas) sesuai dengan kondisi pasien
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#catatan2",
      title: "Catatan",
      content: `<div>
                        Input catatan dari Pemeriksaan paru(kecepatan, kedalaman, pola dan juga suara nafas) sesuai dengan kondisi pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#kardiovaskuler",
      title: "Pemeriksaan kordiavaskuler (kecepatan, denyut, tekanan darah, sirkulasi dan juga retensi cairan) ",
      content: `<div>
                        Ceklis salah satu kolom Pemeriksaan fisik umum meliputi Pemeriksaan kordiavaskuler (kecepatan, denyut, tekanan darah, sirkulasi dan juga retensi cairan) sesuai dengan kondisi pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#catatan3",
      title: "Catatan",
      content: `<div>
                        Input catatan dari Pemeriksaan kordiavaskuler (kecepatan, denyut, tekanan darah, sirkulasi dan juga retensi cairan) sesuai dengan kondisi pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#neurologi",
      title: "Pemeriksaan  neurologi (orientasi, verbal, kekuatan) ",
      content: `<div>
                        Ceklis salah satu kolom Pemeriksaan fisik umum meliputi Pemeriksaan  neurologi (orientasi, verbal, kekuatan) sesuai dengan kondisi pasien
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#catatan4",
      title: "Catatan",
      content: `<div>
                        Input catatan dari Pemeriksaan neurologi (orientasi, verbal, kekuatan) sesuai dengan kondisi pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#gastro",
      title: "Pemeriksaan Gastrointestinal ",
      content: `<div>
                        Ceklis salah satu kolom Pemeriksaan fisik umum Pemeriksaan gastrointestinal sesuai dengan kondisi pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#catatan5",
      title: "Catatan",
      content: `<div>
                        Input catatan dari Pemeriksaan gastrointestinal sesuai dengan kondisi pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#genigine",
      title: "Pemeriksaan Genitourinaria dan Ginekologi ",
      content: `<div>
                        Ceklis salah satu kolom Pemeriksaan fisik umum meliputi Pemeriksaan genitourinaria dan ginekologi sesuai dengan kondisi pasien
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#catatan6",
      title: "Catatan",
      content: `<div>
                        Input catatan dari Pemeriksaan genitourinaria dan ginekologi sesuai dengan kondisi pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#muskulos",
      title: " Pemeriksaan muskoluskeletol dan kulit (mobilitas, fungsi sendir, warna kulit, turgor, permukaan kulit dan kondisi luka)",
      content: `<div>
                        Ceklis salah satu kolom Pemeriksaan fisik umum meliputi Pemeriksaan muskoluskeletol dan kulit (mobilitas, fungsi sendri, warna kulit, turgor, permukaan kulit dan kondisi luka) sesuai dengan kondisi pasien
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#PNS",
      title: "Pemeriksaan Norton Scole (Resiko Kulit)",
      content: `<div>
                        Ceklis salah satu kolom sesuai dengan keadaan pasien Pemeriksaan Norton Scole (Resiko Kulit) meliputi Point 1 sampai 5
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#catatan7",
      title: "Catatan",
      content: `<div>
                        Input catatan dari pemeriksaan Norton Scole (Resiko Kulit) sesuai dengan kondisi pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#PAH",
      title: " Pemeriksaan Aktivitas Harian Dasar (ADL)",
      content: `<div>
                        Ceklis salah satu kolom sesuai dengan keadaan pasien pada pemeriksaan Aktivitas Harian Dasar (ADL) meliputi Point 1 sampai 3
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#AKL",
      title: "Asesmen Keperawatan Khusus",
      content: `<div>
                        Ceklis salah satu pada Asesmen Keperawatan Khusus lansia (usia>65 tahun) meliputi kondisi fisik dan mental, pernah jatuh, kontraktur/nyeri gerak, menggunakan alat bantu, skala depresi, memori dan juga status minimental
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#edukasi",
      title: "Edukasi",
      content: `<div>
                        Input data edukasi sesuai dengan keadaan pasien
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#HE",
      title: "Hambatan Edukasi",
      content: `<div>
                        Input data Hambatan edukasi meliputi Bahasa dan juga Cacat/Fisik/Kognitif (gangguan penglihatan/pendengaran lain)
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#psikososial",
      title: "Psikososial/ekonomi",
      content: `<div>
                        Ceklis dan input salah satu kolom pada Psikososial/ekonomi meliputi Pendidikan, Pekerjaan, dan juga Agama kepercayaan, Nilai-nilai yang dianut, Status Pernikahan, Keluarga, Tempat tinggal dan juga Status Psikologis sesuai dengan data diri dan kondisi pasien
                            </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#DK",
      title: "Diagnosa Keperawatan",
      content: `<div>
                                Input Diagnosa Keperawatan setelah melakukan pemeriksaan dengan pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#plan",
      title: " Planing/Intervensi",
      content: `<div>
                        Input Planning/Intervensi setelah melakukan pemeriksaan dengan pasien
                            </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#tanggal2",
      title: "Tanggal dan Jam",
      content: `<div>
                        Input tanggal dan jam pemeriksaan pasien
                            </div>`,
      placement: "left-start",
      width: "400px",
    },
    {
      element: "#ttd",
      title: "Tanda tangan perawat",
      content: `<div>
                                Input tanda tangan perawat
                            </div>`,
      placement: "left",
      width: "400px",
    },
    {
      element: "#perawat_RN",
      title: "Perawat",
      content: `<div>
                                Pilih salah satu perawat pemeriksa pasien
                            </div>`,
      placement: "left-start",
      width: "400px",
    },
    {
      element: "#simpan2",
      title: "Klik kolom simpan",
      placement: "top",
      width: "400px",
    },

    {
      content: `<div class="text-center py-12">
                                <h1 class="font-bold text-xl">Ini Adalah Akhir Dari Tour!</h1>
                                <img src="../img/logoTrm.jpg" class="pl-[85px] pt-2"></img>
                            </div>`,
      width: "500px",
    },
  ];

  wt.setSteps(steps);
  wt.start();
}

function helpAsesmenAwalRN() {
  var wt = new WebTour({ borderRadius: 20 });
  var steps = [
    {
      content: `<div class="text-center py-12">
                      <h1 class="font-bold text-xl">Selamat Datang Di SIMRS</h1>
                      <img src="../img/logoTrm.jpg" class="pl-[85px] pt-2"></img>
                  </div>`,
      width: "500px",
    },
    {
      element: "#KU",
      title: "Keluhan Utama",
      content: `<div>
                      Input keluhan utama pada pasien    
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#RPS",
      title: "Riwayat Penyakit Sekarang",
      content: `<div>
                      Input riwayat penyakit sekarang pada pasien
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#RPD",
      title: "Riwayat Penyakit Dahulu",
      content: `<div>
                      Input riwayat penyakit dahulu pada pasien
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#hipertensi",
      title: "Hipertensi",
      content: `<div>
                      Ceklis salah satu kolom sesuai dengan kondisi pasien pada kolom Hipertensi
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#merokok",
      title: "Merokok",
      content: `<div>
                      Ceklis salah satu kolom sesuai dengan kondisi pasien pada kolom Merokok
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#DM",
      title: "Diabetes Melitus",
      content: `<div>
                      Ceklis salah satu kolom sesuai dengan kondisi pasien pada kolom diabetes Melitus
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#dyslipidemia",
      title: "Dyslipidemia (Kelainan Kolestrol Darah)",
      content: `<div>
                      Ceklis salah satu kolom sesuai dengan kondisi pasien pada kolom diabetes Dyslipidemia (kelainan kolestrol darah)
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#RSJD",
      title: "Riwayat Serangan Jantung Dini Pada Orang Tua (Pria <55 tahun atau Wanita <65 tahun)",
      content: `<div>
                      Ceklis salah satu kolom sesuai dengan kondisi pasien pada Riwayat serangan jantung dini pada orang tua (pria <55 tahun atau wanita <65 tahun)
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#RA",
      title: "Riwayat Alergi",
      content: `<div>
                      Input riwayat alergi pada pasien
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#RP",
      title: "Riwayat Pengobatan",
      content: `<div>
                      Input riwayat Pengobatan pada pasien
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#KUmum",
      title: "Keadaan Umum",
      content: `<div>
                      Ceklis salah satu kolom keadaan umum sesuai dengan kondisi pasien
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#TV",
      title: "Tanda Vital",
      content: `<div>
                      Input data Tanda Vital meliputi:Tekanan Darah, Suhu Tubuh, Frekuensi Nadi, Frekuensi Nafas dan juga Skor Nyeri sesuai dengan keadaan pasien
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#antropometri",
      title: "Antropometri",
      content: `<div>
                      Input data Antropometri meliputi:Berat badan, Tinggi badan, Lingkar Perut dan juga IMT sesuai dengan keadaan pasien
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#kesadaran",
      title: "Kesadaran",
      content: `<div>
                      <h1>Ceklis salah satu kolom sesuai dengan keadaan pasien pada pernyataan Kesadaran point 1, 2 dan 3</h1>
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#kesadaran_keterangan",
      title: "Keterangan",
      content: `<div>
                      <h1>Setelah menginputkan nilai disini akan menampilkan keterangannya</h1>
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#mata",
      title: "Mata",
      content: `<div>
                      Ceklis dan input pada kolom Mata meliputi Konjungtiva dan Sklera sesuai dengan kondisi pasien
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#hidung",
      title: "Hidung",
      content: `<div>
                      Ceklis dan input pada kolom Hidung sesuai dengan kondisi pasien
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#bibir",
      title: "Bibir",
      content: `<div>
                      Ceklis dan input pada kolom Bibir sesuai dengan kondisi pasien
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#leher",
      title: "Leher",
      content: `<div>
                      Input Leher JVP pada kolom sesuai dengan kondisi pasien
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#thorax",
      title: "Thorax",
      content: `<div>
                      Ceklis dan input pada kolom Thorax sesuai dengan kondisi pasien
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#cor",
      title: "Cor",
      content: `<div>
                      Ceklis dan input pada kolom Cor meliputi Inspeksi, Palpasi, Perkusi dan juga Auskultasi sesuai dengan kondisi pasien
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#paru",
      title: "Paru",
      content: `<div>
                      Ceklis dan input pada kolom Paru meliputi Inspeksi, Palpasi, Perkusi dan juga Auskultasi sesuai dengan kondisi pasien
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#abdomen",
      title: "Abdomen",
      content: `<div>
                      Ceklis dan input pada kolom Abdomen meliputi Inspeksi, Palpasi dan juga Perkusi sesuai dengan kondisi pasien
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#ekstremitas",
      title: "Ekstremitas",
      content: `<div>
                      Ceklis dan input salah satu kolom pada Ekstremitas sesuai dengan kondisi pasien
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#KO",
      title: "Kekuatan Otot",
      content: `<div>
                      Input Kekuatan otot pada kolom sesuai dengan keadaan otot pasien
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#PN",
      title: "Pemeriksaan Neurologi",
      content: `<div>
                      Input Pemeriksaan Neurologi pada kolom sesuai dengan kondisi pasien
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#SL",
      title: "Status Lokalis",
      content: `<div>
                      Input Status Lokalis pada kolom sesuai dengan kondisi pasien
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#PP",
      title: "Pemeriksaan Penunjang",
      content: `<div>
                      Ceklis dan input Pemeriksaan Penunjangan pada kolom meliputi EKG, Echocardiography, Laboratorium dan juga Radiologi
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#diagnosa",
      title: "Diagnosa",
      content: `<div>
                      Diagnosis pasien
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#tatalaksana",
      title: "Tatalaksana",
      content: `<div>
                      Input Tatalaksana pada kolom meliputi tanggal dan jam pemeriksaan
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#prognosis",
      title: "Prognosis",
      content: `<div>
                      Ceklis salah satu kolom pada Prognosis sesuai dengan kondisi pasien
                  </div>`,
      placement: "left-start",
      width: "500px",
    },
    {
      element: "#rencana",
      title: "Rencana Selanjutnya",
      content: `<div>
                      Input data Rencana Selanjutnya setelah melakukan pencatatan asesmen medis
                  </div>`,
      placement: "left",
      width: "500px",
    },
    {
      element: "#tanggal",
      title: "Tanggal dan Jam",
      content: `<div>
                      Input tanggal dan jam sesuai dengan waktu pemeriksaan pada pasien
                  </div>`,
      placement: "left-start",
      width: "400px",
    },
    {
      element: "#dokter",
      title: "Dokter",
      content: `<div>
                      Input Dokter Pemeriksa pasien
                  </div>`,
      placement: "left-start",
      width: "400px",
    },
    {
      element: "#simpan",
      title: "Klik kolom simpan",
      placement: "top-start",
      width: "400px",
    },
    {
      content: `<div class="text-center py-12">
                      <h1 class="font-bold text-xl">Ini Adalah Akhir Dari Tour!</h1>
                      <img src="../img/logoTrm.jpg" class="pl-[85px] pt-2"></img>
                  </div>`,
      width: "500px",
    },
  ];

  wt.setSteps(steps);
  wt.start();
}

function helpAsesmenAwalRJ() {
  console.log(body);

  // Bagian Webtour JS
  const asesmen_awal = [
    {
      element: "#P_KU", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Keluhan Utama",
      content: `Input keluhan utama pada pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_RPD", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Riwayat Penyakit Dahulu",
      content: `Input riwayat penyakit dahulu pada pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_RA", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Riwayat Alergi",
      content: `Input riwayat alergi pada pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Hipertensi", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Hipertensi",
      content: `Ceklis salah satu kolom sesuai dengan kondisi pasien pada kolom Hipertensi`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_M", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Merokok",
      content: `Ceklis salah satu kolom sesuai dengan kondisi pasien pada kolom Merokok`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_DM", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Diabetes Melitus",
      content: `Ceklis salah satu kolom sesuai dengan kondisi pasien pada kolom diabetes Melitus`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_D", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Dyslipidemia (kelainan kolestrol darah)",
      content: `Ceklis salah satu kolom sesuai dengan kondisi pasien pada kolom diabetes Dyslipidemia (kelainan kolestrol darah)`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_RSJ", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Riwayat serangan jantung dini pada orang tua",
      content: `Ceklis salah satu kolom sesuai dengan kondisi pasien pada Riwayat serangan jantung dini pada orang tua (pria <55 tahun atau wanita <65 tahun)`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_RP", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Riwayat Pengobatan",
      content: `Input riwayat Pengobatan pada pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_TV", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Tanda Vital",
      content: `Input data Tanda Vital meliputi: Tekanan Darah, Suhu Tubuh, Frekuensi Nadi, Frekuensi Nafas dan juga Skor Nyeri sesuai dengan keadaan pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_SN", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Skoring nyeri (Wong Baker Faces)",
      content: `Ceklis salah satu kolom pada Scoring Nyeri sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_A_SRJ", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Skala Resiko Jatuh",
      content: `Ceklis salah satu kolom sesuai dengan keadaan pasien pada pernyataan Skala Resiko Jatuh Point A`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_B_SRJ", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Skala Resiko Jatuh",
      content: `Ceklis salah satu kolom sesuai dengan keadaan pasien pada pernyataan Skala Resiko Jatuh Point B`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_C_SRJ", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Skala Resiko Jatuh",
      content: `Ceklis salah satu kolom sesuai dengan keadaan pasien pada pernyataan Skala Resiko Jatuh Point C`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Ant", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Antropometri",
      content: `Input data Antropometri meliputi: Berat badan, Tinggi badan, Lingkar Perut dan juga IMT sesuai dengan keadaan pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_RN", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Resiko Nutrisional",
      content: `Ceklis salah satu kolom sesuai dengan keadaan pasien pada pernyataan RESIKO NUTRISIONAL NO 1 dan NO 2`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_RN_K", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Resiko Nutrisional Keterangan",
      content: `Keterangan ini merupakan skor dari pernyataan RESIKO NUTRISIONAL`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_AB", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Alat Bantu",
      content: `Input alat bantu sesuai dengan kebutuhan pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_ADL", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "ADL",
      content: `Input alat bantu sesuai dengan aktivitas pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Pendidikan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Pendidikan",
      content: `Input data pendidikan terakhir pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Pekerjaan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Pekerjaan",
      content: `Input data pekerjaan pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Agama", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Agama",
      content: `Ceklis salah satu agama sesuai dengan data KTP pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Nilai_Dianut", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Nilai-nilai yang dianut",
      content: `Input data Nilai-nilai yang dianut oleh pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Status_Perkawinan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Status Perkawinan",
      content: `Ceklis salah satu status perkawinan sesuai data pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Keluarga", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Keluarga",
      content: `Ceklis salah satu kolom keluarga meliputi: Tinggal sendiri atau Tinggal serumah`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Tempat_Tinggal", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Tempat Tinggal",
      content: `Ceklis salah satu kolom sesuai dengan Tempat Tinggal pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Status_Psikologis", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Status Psikologis",
      content: `Ceklis salah satu Status Psikologis sesuai dengan keadaan pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Edukasi", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Edukasi",
      content: `Input Edukasi sesuai dengan keadaan pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Hambatan_Edukasi", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Hambatan Edukasi",
      content: `Ceklis dan input hambatan saat memberikan Edukasi kepada pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Diagnosa_Keperawatan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Diagnosa Keperawatan",
      content: `Input Diagnosa Keperawatan Sesuai dengan data data yang telah diisi sebelumnya`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Intervensi_Keperawatan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Intervensi Keperawatan",
      content: `Input Intervensi Keperawatan sesuai dengan perencaan yang akan dilakukan selanjutnya`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Implementasi_Keperawatan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Implementasi Keperawatan",
      content: `Input Implementasi Keperawatan sesuai dengan serangkaian kegiatan yang akan dilakukan`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Tgl_Jam", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Tanggal dan Jam",
      content: `Input Tanggal dan Jam melakukan Asesmen Awal Keperawatan Rawat Jalan`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Perawat", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Perawat",
      content: `Input nama Perawat yang mengisi data Asesmen Awal Keperawatan Rawat Jalan `, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#P_Simpan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Simpan Data",
      content: `Klik kolom simpan `, //can be string or html string
      placement: "top-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
  ];

  wt.setSteps(asesmen_awal);
  wt.start();
}

function helpAsesmenMedisRJ() {
  // Bagian Webtour JS
  const asesmen_awal = [
    {
      element: "#D_KU", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Keluhan Utama",
      content: `Input keluhan utama pada pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_RPS", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Riwayat Penyakit Sekarang",
      content: `Input riwayat penyakit sekarang pada pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_RPD", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Riwayat Penyakit Dahulu",
      content: `Input riwayat penyakit dahulu pada pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Hipertensi", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Hipertensi",
      content: `Ceklis salah satu kolom sesuai dengan kondisi pasien pada kolom Hipertensi`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Merokok", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Merokok",
      content: `Ceklis salah satu kolom sesuai dengan kondisi pasien pada kolom Merokok`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Diabetes_Melitus", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Diabetes Melitus",
      content: `Ceklis salah satu kolom sesuai dengan kondisi pasien pada kolom diabetes Melitus`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Dyslipidemia", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Dyslipidemia",
      content: `ceklis salah satu kolom sesuai dengan kondisi pasien pada kolom Dyslipidemia (kelainan kolestrol darah)`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_RSJ", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Riwayat Serangan Jantung",
      content: `Ceklis salah satu kolom sesuai dengan kondisi pasien pada Riwayat serangan jantung dini pada orang tua (pria <55 tahun atau wanita <65 tahun)`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Riwayat_Pengobatan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Riwayat Pengobatan",
      content: `Input riwayat Pengobatan pada pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Keadaan_Umum", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Keadaan Umum",
      content: `Ceklis salah satu kolom keadaan umum sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Tanda_Vital", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Tanda Vital",
      content: `Input data Tanda Vital meliputi: Tekanan Darah, Suhu Tubuh, Frekuensi Nadi, Frekuensi Nafas dan juga Skor Nyeri sesuai dengan keadaan pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Antropometri", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Antropometri",
      content: `Input data Antropometri meliputi: Berat badan, Tinggi badan, Lingkar Perut dan juga IMT sesuai dengan keadaan pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Kesadaran", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Kesadaran",
      content: `Ceklis salah satu kolom sesuai dengan keadaan pasien pada pernyataan Kesadaran point 1, 2 dan 3`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Kesadaran_Keterangan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Kesadaran Keterangan",
      content: `Ceklis salah satu kolom Keterangan sesuai dengan nilai Kesadaran`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Mata", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Mata",
      content: `Ceklis dan input pada kolom Mata meliputi Konjungtiva dan Sklera sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Hidung", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Hidung",
      content: `Ceklis dan input pada kolom Hidung sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Bibir", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Bibir",
      content: `Ceklis dan input pada kolom Bibir sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Leher", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Leher",
      content: `Input Leher JVP pada kolom sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Thorax", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Thorax",
      content: `Ceklis dan input pada kolom Thorax sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Cor", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Cor",
      content: `Ceklis dan input pada kolom Cor meliputi Inspeksi, Palpasi, Perkusi dan juga Auskultasi sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Paru", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Paru",
      content: `Ceklis dan input pada kolom Paru meliputi Inspeksi, Palpasi, Perkusi dan juga Auskultasi sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Abdomen", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Abdomen",
      content: `Ceklis dan input pada kolom Abdomen meliputi Inspeksi, Palpasi dan juga Perkusi sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Ekstremitas", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Ekstremitas",
      content: `Ceklis dan input salah satu kolom pada Ekstremitas sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Kekuatan_Otot", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Kekuatan Otot",
      content: `Input Kekuatan otot pada kolom sesuai dengan keadaan otot pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Pemeriksaan_Neurologi", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Pemeriksaan Neurologi",
      content: `Input Pemeriksaan Neurologi pada kolom sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Status_Lokalis", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Status Lokalis",
      content: `Input Status Lokalis pada kolom sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Pemeriksaan_Penunjang", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Pemeriksaan Penunjang",
      content: `Ceklis dan input Pemeriksaan Penunjangan pada kolom meliputi EKG, Echocardiography, Laboratorium dan juga Radiologi`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Diagnosa", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Diagnosa",
      content: `Input Diagnosa pada kolom Sesuai dengan data data yang telah diisi sebelumnya`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Tatalaksana", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Tatalaksana",
      content: `Input Tatalaksana pada kolom meliputi tanggal dan jam pemeriksaan`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Prognosis", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Prognosis",
      content: `Ceklis salah satu kolom pada Prognosis sesuai dengan kondisi pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Rencana_Selanjutnya", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Rencana Selanjutnya",
      content: `Input data Rencana Selanjutnya pada kolom meliputi Tanggal, Rawat dan juga Rujuk`, //can be string or html string
      placement: "left", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Tanggal", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Tanggal",
      content: `Input tanggal sesuai dengan waktu pemeriksaan pada pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Dokter", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Dokter",
      content: `Input Dokter Pemeriksa pasien`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#D_Simpan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Simpan",
      content: `Klik kolom simpan`, //can be string or html string
      placement: "top-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-en d
    },
  ];

  wt.setSteps(asesmen_awal);
  wt.start();
}

function helpVitalSign() {
  // Bagian Webtour JS
  const tb = [
    {
      element: "#VS_tb", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Tinggi Badan",
      content: `Masukan Data Tinggi Badan,
      Harap berikan informasi mengenai tinggi badan pasien yang sesuai.`, //can be string or html string
      placement: "bottom", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#VS_bb", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Berat Badan",
      content: `Masukan Data Berat Badan,
      Harap berikan informasi mengenai berat badan pasien yang sesuai.`, //can be string or html string
      placement: "bottom", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#VS_td", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Tekanan Darah",
      content: `Masukan Data Tekanan Darah,
      Harap berikan informasi mengenai tekanan darah pasien yang sesuai.`, //can be string or html string
      placement: "bottom", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#VS_nadi", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Denyut Nadi",
      content: `Masukan Data Denyut Nadi,
      Harap berikan informasi mengenai denyut nadi pasien yang sesuai.`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#VS_pernapasan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Pola Pernapasan",
      content: `Masukan Data Pola Pernapasan,
      Harap berikan informasi mengenai pola pernapasan pasien yang sesuai.`, //can be string or html string
      placement: "bottom", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#VS_suhu", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Suhu Tubuh",
      content: `Masukan Data Suhu Tubuh,
      Harap berikan informasi mengenai suhu tubuh pasien yang sesuai.`, //can be string or html string
      placement: "bottom", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#VS_SpO2", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "SpO2",
      content: `Masukan Data SpO2,
      Harap berikan informasi mengenai data tingkat saturasi oksigen dalam darah 
      (SpO2) pasien yang sesuai.`, //can be string or html string
      placement: "bottom", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#VS_imt", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Indeks Massa Tubuh",
      content: `Masukan Data  Indeks Massa Tubuh,
      Harap berikan informasi mengenai Indeks Massa Tubuh (IMT) pasien yang sesuai.`, //can be string or html string
      placement: "left-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#VS_lp", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Lingkar Perut",
      content: `Masukan Data Lingkar Perut,
      Harap berikan informasi mengenai lingkar perut pasien yang sesuai.`, //can be string or html string
      placement: "bottom", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#VS_simpan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Simpan Data",
      content: `
      Silakan klik tombol 'Simpan' untuk memastikan data pasien 
      yang telah dimasukkan sebelumnya tersimpan dengan aman pada rekam medis elektronik (EMR) pasien.`, //can be string or html string
      placement: "bottom", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
  ];

  wt.setSteps(tb);
  wt.start();
}

function helpEMR() {
  const emr = [
    {
      element: "#formulir", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Formulir",
      content: `Pada bagian atas ini, merupakan informasi data dari pasien yang akan Anda daftarkan atau registrasikan, yang sebelumnya data ini sudah Anda masukkan pada registrasi pasien baru.`, //can be string or html string
      placement: "bottom", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#riwayat", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Riwayat Registrasi",
      content: `Merekam informasi data pasien seperti nama, tanggal lahir, alamat, dan kontak.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#emr", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "EMR (Electronic Medical Record)",
      content: `Menyimpan dan mengelola catatan medis elektronik pasien, termasuk riwayat penyakit, pemeriksaan, dan perawatan.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#catatan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Catatan Klinis",
      content: `Mencatat informasi penting mengenai kondisi dan perkembangan pasien selama perawatan.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#diagnosis", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Diagnosis",
      content: `Menyediakan diagnosis atau penilaian medis atas kondisi pasien berdasarkan gejala dan pemeriksaan.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#vital", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Vital Sign",
      content: `Merekam tanda-tanda vital pasien seperti tekanan darah, denyut jantung, suhu tubuh, dan pernapasan.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#tindakan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Tindakan",
      content: `Catatan mengenai tindakan medis yang dilakukan terhadap pasien, seperti prosedur, pembedahan, atau terapi.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#resep", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Resep Elektronik",
      content: `Membuat resep obat secara elektronik untuk pasien, termasuk dosis, frekuensi, dan instruksi.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#floor", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Floor Stock",
      content: `Manajemen persediaan obat dan peralatan medis di lantai perawatan.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#lab", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Laboratorium",
      content: `Akses ke hasil uji laboratorium pasien untuk diagnosis dan pemantauan.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#radiologi", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Radiologi",
      content: `Mengakses hasil pemeriksaan radiologi dan prosedur kardiologi invasif di ruang Cathlab.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#echo", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Echocardiografi / Dopler",
      content: `Hasil pemeriksaan ultrasonografi jantung untuk menilai fungsi jantung.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#ekg", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "EKG (Elektrokardiogram)",
      content: `Hasil pemeriksaan yang merekam aktivitas listrik jantung.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#ecg", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "ECG (Elektrokardiografi)",
      content: `Serupa dengan EKG, merekam aktivitas listrik jantung.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#surveilans", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Surveilans",
      content: `Pemantauan pasien secara terus-menerus untuk deteksi dini perubahan kondisi.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#faktor", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Faktor Resiko Dirawat",
      content: `Mencatat faktor-faktor risiko pasien yang dapat memengaruhi perawatan.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#resume", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Resume Medis",
      content: `Ringkasan informasi medis penting pasien, termasuk riwayat penyakit dan perawatan.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#konsultasi", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Konsultasi",
      content: `Permintaan atau hasil konsultasi dengan spesialis medis lainnya.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#bedah", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Bedah / ESWL",
      content: `Pencatatan terkait prosedur bedah atau ESWL (Extracorporeal Shock Wave Lithotripsy).`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#perjanjian", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Perjanjian / Kontrol",
      content: `Jadwal kontrol atau janji temu pasien selanjutnya.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#form", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Formulir Pendelegasian Pemberi Obat",
      content: `Dokumen yang mengatur pemberian obat oleh staf medis.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#covid", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Covid-19",
      content: `Informasi dan tindakan terkait COVID-19 dan pemantauan pasien yang terinfeksi.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#berkas", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Berkas",
      content: `Akses ke berkas dan dokumen medis pasien..`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#bundle", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Bundle Hais",
      content: `Langkah-langkah pengendalian infeksi (Hais) yang harus diikuti.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#monitor", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Monitoring ICU",
      content: `Pemantauan pasien di unit perawatan intensif (ICU).`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#cathlab", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Cathlab",
      content: `Mengakses hasil pemeriksaan radiologi dan prosedur kardiologi invasif di ruang Cathlab.`, //can be string or html string
      placement: "right-start", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#kper", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "KPER",
      content: `Sistem pendokumentasian elektronik yang khusus digunakan oleh profesi perawat.`, //can be string or html string
      placement: "right-end", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#laporan", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Laporan Pemeriksaan Diagnostik Invasif dan Intervensi Non Bedah",
      content: `Dokumen hasil pemeriksaan diagnostik yang melibatkan intervensi medis, baik invasif maupun non-bedah.`, //can be string or html string
      placement: "right-end", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
    {
      element: "#emr_utama", //target element (if not defined then the popover will act like a modal at the center of the screen)
      title: "Asesmen Medis",
      content: `<ul class="list-disc ml=4 p-4">
      <li>Membuat Data Baru: Jika pasien belum memiliki nomor EMR atau data sebelumnya, Anda dapat mengklik tombol "Buat Baru." Ini akan menginisialisasi pembuatan nomor EMR baru untuk pasien tersebut.</li>
      <li>
        Menggunakan Nomor EMR yang Ada: Jika pasien sudah memiliki nomor EMR sebelumnya, cukup masukkan nomor EMR yang sudah ada dan tekan tombol "Lihat." Ini akan memungkinkan akses ke data yang sudah ada tanpa membuat nomor EMR baru.
      </li>
    </ul>`, //can be string or html string
      placement: "bottom", //top, top-start, top-end, left, left-start, left-end, right, right-start, right-end, bottom, bottom-start, bottom-end
    },
  ];

  wt.setSteps(emr);
  wt.start();
}

// Akhir Bagian WebTour JS
