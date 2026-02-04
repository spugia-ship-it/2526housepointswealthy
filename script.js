function getJarTotals() {
  return fetch("data.csv")
    .then(res => res.text())
    .then(text => {
      const rows = text.split("\n").map(r => r.split(","));

      // Find the row that contains the instrument labels
      const labelRowIndex = rows.findIndex(row =>
        row.includes("Brass") &&
        row.includes("Voice") &&
        row.includes("Woodwind")
      );

      if (labelRowIndex === -1) {
        throw new Error("Instrument label row not found");
      }

      // The totals are the row ABOVE the labels
      const totalsRow = rows[labelRowIndex - 1];

      // First 6 values = jar totals
      return totalsRow.slice(0, 6).map(Number);
    });
}
