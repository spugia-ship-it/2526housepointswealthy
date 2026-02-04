fetch("https://docs.google.com/spreadsheets/d/e/2PACX-1vRgyleyFfUTptH0_GBnXBm82dtIG3ovj2F6MY_uO-dqwf_hls-lOXbVZSo-bZgEJhQ_rlGgJYj5KBjT/pub?gid=0&single=true&output=csv")
  .then(r => r.text())
  .then(text => {
    document.body.innerText = text;
  });
