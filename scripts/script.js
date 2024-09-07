// Prorated Pricing Calculator Function (for index.html)
function calculateProratedPrice() {
    const numPlayers = document.getElementById('numPlayers').value;
    const renewalDate = new Date(document.getElementById('endDate').value);
    const pricingTier = document.getElementById('pricingTier').value;

    if (!numPlayers || !renewalDate) {
        alert("Please enter all required fields.");
        return;
    }

    // Base price for players
    const basePrice = 99;
    let discount = 0;

    // Apply discount based on pricing tier
    if (pricingTier === 'tier1') {
        discount = 0.25;
    } else if (pricingTier === 'tier2') {
        discount = 0.30;
    } else if (pricingTier === 'tier3') {
        discount = 0.35;
    }

    // Get current date and calculate remaining days
    const currentDate = new Date();
    const timeDiff = renewalDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // Calculate the price
    const discountedPrice = basePrice * (1 - discount);
    const totalPrice = numPlayers * discountedPrice * (daysRemaining / 365);

    // Display results in modal
    document.getElementById('basePriceDisplay').innerText = `$${discountedPrice.toFixed(2)}`;
    document.getElementById('discountDisplay').innerText = `${(discount * 100)}%`;
    document.getElementById('daysRemainingDisplay').innerText = `${daysRemaining} days`;
    document.getElementById('numPlayersDisplay').innerText = numPlayers;
    document.getElementById('modalPrice').innerText = `$${totalPrice.toFixed(2)}`;

    // Show the modal
    $('#resultModal').modal('show');
}

// Serial Number Lookup Function (for serial-lookup.html)
function lookupSerialNumbers() {
    const serialNumbers = document.getElementById('serialNumbers').value.split('\n');
    const resultBody = document.getElementById('resultBody');
    resultBody.innerHTML = ''; // Clear previous results

    const prefixData = {
        "15": "HD933",
        "16": "TD1012",
        "17": "HD913",
        "19": "LG445",
        "23": "DM-RMC-100-STR",
        "24": "LS424",
        "25": "LS424-W",
        "26": "LS425",
        "27": "LS445",
        "28": "LS425",
        "29": "MD435",
        "30": "HD110",
        "31": "LS423",
        "32": "HD120",
        "33": "HD223",
        "35": "HD1023",
        "37": "S-STBP-HD",
        "38": "LS423-W",
        "40": "HD410",
        "41": "LS423K",
        "42": "LS424",
        "43": "LS424-W",
        "44": "HD224",
        "45": "HD224-W",
        "46": "HD1024",
        "47": "HD1024-W",
        "48": "HD1024-BULK",
        "49": "HD1024-BULK-W",
        "50": "HD810",
        "51": "TPS-SP1-4",
        "53": "HS123",
        "55": "HO523",
        "56": "HO524",
        "57": "HO523-W",
        "58": "HS124",
        "59": "HS144",
        "60": "HD1010",
        "61": "CV-HD",
        "62": "CV-UHD",
        "63": "CV-UHD-Wifi",
        "64": "S-STBP-HD2",
        "65": "CV-HD2",
        "66": "OF1006",
        "67": "CV-UHD2",
        "68": "CV-UHD2-W",
        "70": "HD210",
        "71": "HD210W",
        "72": "HD220",
        "73": "AU320",
        "74": "LS322",
        "75": "LS422",
        "76": "A915",
        "77": "HD222",
        "78": "HD1022",
        "79": "HD917",
        "80": "BrightSign Expander Module",
        "81": "EN700",
        "90": "BrightSign WiFi Module",
        "91": "WA100-NA",
        "92": "WA100-WW",
        "93": "WS103",
        "94": "WD104",
        "95": "WD105",
        "96": "WD104-500",
        "97": "WD105-NW",
        "A0": "HD1010v2",
        "A1": "HD1010W",
        "A2": "HD1020",
        "AA": "AU325",
        "AC": "AU335",
        "C1": "HS125",
        "C2": "HS145",
        "D1": "XD234",
        "D2": "XD234-W",
        "D3": "XD1034",
        "D4": "XD1034-W",
        "D5": "XT244",
        "D6": "XT244-W",
        "D7": "XT1144",
        "D8": "XT1144-W",
        "D9": "XT1144-PP",
        "E0": "VC100",
        "E1": "XT1144-BULK",
        "E2": "XT1144-BULK-W",
        "E3": "XT1144-T",
        "E4": "XD1034-BULK",
        "E5": "XD1034-BULK-W",
        "L0": "BRT-MV2",
        "L1": "BRT-MV3",
        "L2": "XD232",
        "L3": "XD1032",
        "L4": "XD1132",
        "L5": "XD1232",
        "L6": "XT243",
        "L8": "XT1143",
        "L9": "XT1143-PP",
        "M0": "BrightSign MZ210",
        "M1": "HD225",
        "M2": "HD1025",
        "M3": "XD235",
        "M4": "XD1035",
        "M5": "SP2",
        "M6": "S-PLAY-2000-C",
        "M7": "CV-HD3",
        "M8": "CV-UHD3",
        "R1": "XD233-W",
        "R2": "XD1033-W",
        "R3": "XD233",
        "R4": "XD1033",
        "R5": "XD1133",
        "R6": "XT243-W",
        "R7": "XT1143-W",
        "SD": "CV-UHD2",
        "T0": "HD910",
        "T1": "HD960",
        "T2": "HD912",
        "T3": "HD962",
        "T4": "HD970",
        "T5": "HD922",
        "T6": "HD972",
        "T7": "HD920",
        "T8": "HD922S",
        "T9": "HD972S",
        "TA": "LS425-W",
        "TC": "LS445-W",
        "TD": "LS424-BULK",
        "TE": "LS424-BULK-W",
        "TF": "LS424",
        "TG": "LS424-W",
        "TH": "HD224",
        "TJ": "HD224-W",
        "TK": "HD1024",
        "TL": "HD1024-W",
        "TM": "HD1024-BULK",
        "TN": "HD1024-BULK-W",
        "TP": "TPS-SP1-4",
        "TR": "S-STBP-HD2",
        "TS": "CV-HD2",
        "TT": "CV-UHD2",
        "TU": "XD234",
        "TV": "XD234-W",
        "TW": "XD1034",
        "TX": "XD1034-W",
        "TY": "XT244",
        "U0": "USB Touch Pad",
        "U1": "BLC400",
        "U2": "USB400",
        "U3": "BP200HI",
        "U4": "AUX-300",
        "U5": "BP900HI",
        "U6": "USB700",
        "U7": "USB700-P",
        "UA": "XT244-W",
        "UC": "XT1144-W",
        "UD": "XT1144-PP",
        "UE": "XT1144-BULK",
        "UF": "XT1144-BULK-W",
        "UG": "XD1034-BULK",
        "UH": "XD1034-BULK-W",
        "UJ": "XT1144",
        "UK": "XD1034-WD",
        "UM": "XT1144-WD",
        "UN": "XD1034-BULK-WD",
        "UP": "XT1144-BULK-WD",
        "UR": "XT245",
        "US": "XT1145",
        "UT": "XT2145",
        "UU": "XT245-W",
        "UV": "XT1145-W",
        "UW": "XT2145-W",
        "X0": "XD230",
        "X1": "XD1030",
        "X2": "XD1230",
        "X3": "4K1142",
        "X4": "4K1042",
        "X5": "4K242",
        "X6": "SV-4K-NA",
        "X7": "SV-4K-ROW",
        "X8": "DMP-2K",
        "XA": "XC2055",
        "XC": "XC4055",
        "XD": "XC2055-W",
        "XE": "XC4055-W",
        "Y0": "Used by Steve Goodwin for Testing",
        "Y1": "XC2055",
        "Y2": "XC4055"
    };

    serialNumbers.forEach(serialNumber => {
        const trimmedSerialNumber = serialNumber.trim();
        if (trimmedSerialNumber) {
            const prefix = trimmedSerialNumber.slice(0, 2).toUpperCase();
            const model = prefixData[prefix] || 'No model found for this serial number prefix';
            const row = `<tr><td>${trimmedSerialNumber}</td><td>${model}</td></tr>`;
            resultBody.insertAdjacentHTML('beforeend', row);
        }
    });

    // Show the result section
    document.getElementById('result').classList.remove('hidden');
}

// Export table to Excel function
function exportTableToExcel(tableId, filename = '') {
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableId);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');

    // Specify filename
    filename = filename ? filename + '.xls' : 'excel_data.xls';

    // Create a download link element
    downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    if (navigator.msSaveOrOpenBlob) {
        // For Internet Explorer
        var blob = new Blob(['\ufeff', tableHTML], { type: dataType });
        navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;

        // Setting the file name
        downloadLink.download = filename;

        // Trigger the download
        downloadLink.click();
    }
}

function generateUrl() {
    // Get the video ID from the input field
    var videoId = document.getElementById('videoId').value.trim();

    if (videoId) {
        // Construct the embed URL with the required parameters
        var embedUrl = 'https://www.youtube.com/embed/' + videoId +
                       '?playlist=' + videoId +
                       '&autoplay=1&rel=0&controls=0&showinfo=0&loop=1&cc_load_policy=1';

        // Create a new table row for the result
        var resultBody = document.getElementById('resultBody');
        var newRow = document.createElement('tr');

        // Create columns for Video ID, Generated URL, and Copy button
        var videoIdCell = document.createElement('td');
        videoIdCell.textContent = videoId;

        var urlCell = document.createElement('td');
        var urlLink = document.createElement('a');
        urlLink.href = embedUrl;
        urlLink.target = '_blank';
        urlLink.textContent = embedUrl;
        urlCell.appendChild(urlLink);

        var actionCell = document.createElement('td');
        var copyButton = document.createElement('button');
        copyButton.classList.add('copy-btn');
        copyButton.textContent = 'Copy to Clipboard';
        copyButton.onclick = function() {
            copyToClipboard(embedUrl, copyButton);
        };
        actionCell.appendChild(copyButton);

        // Append the new cells to the row
        newRow.appendChild(videoIdCell);
        newRow.appendChild(urlCell);
        newRow.appendChild(actionCell);

        // Append the new row to the table
        resultBody.appendChild(newRow);

        // Show the result section
        document.getElementById('result').classList.remove('hidden');
    }
}

function copyToClipboard(embedUrl, copyButton) {
    // Create a temporary text area element
    var tempInput = document.createElement('textarea');
    tempInput.value = embedUrl;
    document.body.appendChild(tempInput);

    // Select and copy the text
    tempInput.select();
    document.execCommand('copy');

    // Remove the temporary text area element
    document.body.removeChild(tempInput);

    // Change button text and color to indicate it's copied
    copyButton.innerText = 'Copied!';
    copyButton.classList.add('copied');

    // Revert back to original button state after 2 seconds
    setTimeout(function() {
        copyButton.innerText = 'Copy to Clipboard';
        copyButton.classList.remove('copied');
    }, 2000);
}

function openMailClient() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Create the mailto link
    var mailtoLink = 'mailto:cwubrightsign@gmail.com' +
                     '?subject=Contact Form Submission from ' + encodeURIComponent(name) +
                     '&body=' + encodeURIComponent(message) + 
                     '%0A%0AFrom: ' + encodeURIComponent(name) + 
                     ' (' + encodeURIComponent(email) + ')';

    // Open the mail client
    window.location.href = mailtoLink;
}