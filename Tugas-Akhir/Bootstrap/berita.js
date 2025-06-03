const ctx = document.getElementById('chartGunung').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Gunung Anak Krakatau', 'Gunung Merapi', 'Gunung Semeru'],
    datasets: [{
      label: 'Level Bahaya',
      data: [4, 3, 3], // Level: 4 = Awas, 3 = Siaga, 2 = Waspada, 1 = Normal
      backgroundColor: [
        'rgba(220, 53, 69, 0.8)',    // Awas (Merah)
        'rgba(253, 126, 20, 0.8)',   // Siaga (Oranye)
        'rgba(253, 126, 20, 0.8)'    // Siaga (Oranye)
      ],
      borderColor: [
        'rgba(220, 53, 69, 1)',
        'rgba(253, 126, 20, 1)',
        'rgba(253, 126, 20, 1)'
      ],
      borderWidth: 2
    }]
  },
  options: {
    indexAxis: 'y',
    scales: {
      x: {
        min: 0,
        max: 4,
        ticks: {
          stepSize: 1,
          callback: function(value) {
            return ['','Normal','Waspada','Siaga','Awas'][value];
          }
        },
        title: {
          display: true,
          text: 'Level Bahaya (1-4)'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
});

const dataGunung = {
    "Jawa Tengah": [
      { nama: "Gunung Merapi", daerah: "Magelang, Boyolali, Klaten" }
    ],
    "Jawa Timur": [
      { nama: "Gunung Semeru", daerah: "Lumajang" }
    ],
    "Sumatera Utara": [
      { nama: "Gunung Sinabung", daerah: "Karo" }
    ],
    "Sumatera Barat": [
      { nama: "Gunung Marapi", daerah: "Agam & Tanah Datar" }
    ],
    "Lampung": [
      { nama: "Gunung Anak Krakatau", daerah: "Selat Sunda" }
    ]
  };

  function tampilkanGunung() {
    const provinsi = document.getElementById("provinsi").value;
    const tbody = document.querySelector("#tabelGunung tbody");
    const tabel = document.getElementById("tabelGunung");

    tbody.innerHTML = ""; // Kosongkan dulu

    if (dataGunung[provinsi]) {
      dataGunung[provinsi].forEach(item => {
        const row = `<tr><td>${item.nama}</td><td>${item.daerah}</td></tr>`;
        tbody.innerHTML += row;
      });
      tabel.style.display = "table";
    } else {
      tabel.style.display = "none";
    }
  }

