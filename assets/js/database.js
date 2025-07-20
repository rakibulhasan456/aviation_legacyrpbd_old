const spreadsheetId = '1sY35jYp7ywgQLVqds-6o_PRFHb1UqJYEvL5SwY9Y83k';
const sheetName = 'Sheet1'; // Replace with your actual sheet/tab name
const url = `https://opensheet.elk.sh/${spreadsheetId}/${sheetName}`;

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const tableBody = document.querySelector('#data-table tbody');
    tableBody.innerHTML = ''; // Clear previous data

    data.forEach(row => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${row['CALL SIGN'] || ''}</td>
        <td>${row['NAME'] || ''}</td>
        <td>${row['HELI'] || ''}</td>
        <td>${row['FIXED WING'] || ''}</td>
        <td>${row['HEAVYWEIGHT'] || ''}</td>
        <td>${row['COMMERCIAL'] || ''}</td>
      `;
      tableBody.appendChild(tr);
    });
  } catch (error) {
    console.error('Failed to fetch data:', error);
    document.querySelector('#data-table tbody').innerHTML =
      '<tr><td colspan="6">Failed to load data.</td></tr>';
  }
}

// Initial load
fetchData();

// Optional: Auto-refresh every 60 seconds
// setInterval(fetchData, 60000);
