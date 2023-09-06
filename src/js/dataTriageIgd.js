const data = [
    {
        NoRekamMedis : "0001",
        NamaPasien : "Test0001",
        JenisKelamin : "Laki Laki",
        TanggalLahir : "29-oct-2000",
        Alamat :"Bandung 29",
        NoTelp : "005945894",
        NoEmr : "001",
        TglEmr : "12-decs-2023",
        NoRegistrasi : "0001"
    
    },
    {
        NoRekamMedis : "0001",
        NamaPasien : "Test0001",
        JenisKelamin : "Laki Laki",
        TanggalLahir : "29-oct-2000",
        Alamat :"Bandung 29",
        NoTelp : "005945894",
        NoEmr : "001",
        TglEmr : "12-decs-2023",
        NoRegistrasi : "0001"
    
    },
    {
        NoRekamMedis : "0001",
        NamaPasien : "Test0001",
        JenisKelamin : "Laki Laki",
        TanggalLahir : "29-oct-2000",
        Alamat :"Bandung 29",
        NoTelp : "005945894",
        NoEmr : "001",
        TglEmr : "12-decs-2023",
        NoRegistrasi : "0001"
    
    },
    {
        NoRekamMedis : "0001",
        NamaPasien : "Test0001",
        JenisKelamin : "Laki Laki",
        TanggalLahir : "29-oct-2000",
        Alamat :"Bandung 29",
        NoTelp : "005945894",
        NoEmr : "001",
        TglEmr : "12-decs-2023",
        NoRegistrasi : "0001"
    
    },
    {
        NoRekamMedis : "0001",
        NamaPasien : "Test0001",
        JenisKelamin : "Laki Laki",
        TanggalLahir : "29-oct-2000",
        Alamat :"Bandung 29",
        NoTelp : "005945894",
        NoEmr : "001",
        TglEmr : "12-decs-2023",
        NoRegistrasi : "0001"
    
    },
    {
        NoRekamMedis : "0001",
        NamaPasien : "Test0001",
        JenisKelamin : "Laki Laki",
        TanggalLahir : "29-oct-2000",
        Alamat :"Bandung 29",
        NoTelp : "005945894",
        NoEmr : "001",
        TglEmr : "12-decs-2023",
        NoRegistrasi : "0001"
    
    },
    {
        NoRekamMedis : "0001",
        NamaPasien : "Test0001",
        JenisKelamin : "Laki Laki",
        TanggalLahir : "29-oct-2000",
        Alamat :"Bandung 29",
        NoTelp : "005945894",
        NoEmr : "001",
        TglEmr : "12-decs-2023",
        NoRegistrasi : "0001"
    
    },
    {
        NoRekamMedis : "0001",
        NamaPasien : "Test0001",
        JenisKelamin : "Laki Laki",
        TanggalLahir : "29-oct-2000",
        Alamat :"Bandung 29",
        NoTelp : "005945894",
        NoEmr : "001",
        TglEmr : "12-decs-2023",
        NoRegistrasi : "0001"
    
    },
    {
        NoRekamMedis : "0001",
        NamaPasien : "Test0001",
        JenisKelamin : "Laki Laki",
        TanggalLahir : "29-oct-2000",
        Alamat :"Bandung 29",
        NoTelp : "005945894",
        NoEmr : "001",
        TglEmr : "12-decs-2023",
        NoRegistrasi : "0001"
    
    },
    {
        NoRekamMedis : "0001",
        NamaPasien : "Test0001",
        JenisKelamin : "Laki Laki",
        TanggalLahir : "29-oct-2000",
        Alamat :"Bandung 29",
        NoTelp : "005945894",
        NoEmr : "001",
        TglEmr : "12-decs-2023",
        NoRegistrasi : "0001"
    
    },
    {
        NoRekamMedis : "0001",
        NamaPasien : "Test0001",
        JenisKelamin : "Laki Laki",
        TanggalLahir : "29-oct-2000",
        Alamat :"Bandung 29",
        NoTelp : "005945894",
        NoEmr : "001",
        TglEmr : "12-decs-2023",
        NoRegistrasi : "0001"
    
    },
    {
        NoRekamMedis : "0001",
        NamaPasien : "Test0001",
        JenisKelamin : "Laki Laki",
        TanggalLahir : "29-oct-2000",
        Alamat :"Bandung 29",
        NoTelp : "005945894",
        NoEmr : "001",
        TglEmr : "12-decs-2023",
        NoRegistrasi : "0001"
    
    },
    {
        NoRekamMedis : "0001",
        NamaPasien : "Test0001",
        JenisKelamin : "Laki Laki",
        TanggalLahir : "29-oct-2000",
        Alamat :"Bandung 29",
        NoTelp : "005945894",
        NoEmr : "001",
        TglEmr : "12-decs-2023",
        NoRegistrasi : "0001"
    
    },
]


document.addEventListener('DOMContentLoaded', function () {
    const dataLoop = document.getElementById('dataLoop');
    data.forEach((item, index) => {
        const row = document.createElement('tr');
        row.classList.add("hover:bg-main-blue-0")
        row.classList.add("hover:text-white")
        for (const key in item) {
            if (item.hasOwnProperty(key)) {
                const cell = document.createElement('td');
                cell.textContent = item[key];
                row.appendChild(cell);
            }
        }
        if (index % 2 === 0) {
            row.classList.add('bg-gray-100'); 
        }
        dataLoop.appendChild(row);
    });
});

