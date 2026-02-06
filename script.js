console.log("script is running");
const CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRgyleyFfUTptH0_GBnXBm82dtIG3ovj2F6MY_uO-dqwf_hls-lOXbVZSo-bZgEJhQ_rlGgJYj5KBjT/pub?gid=0&single=true&output=csv";

fetch(CSV_URL)
  .then(res => res.text())
  .then(text => {
    const rows = text.trim().split("\n").map(r => r.split(","));

    const totals = rows[0].slice(0, 6).map(Number);

    totals.forEach((value, i) => {
      const bar = document.getElementById(`bar${i + 1}`);
      bar.style.height = value / 100000 + "px";
    });
  });
