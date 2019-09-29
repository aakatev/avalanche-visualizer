async function sha256(message) {
  // encode as UTF-8
  const msgBuffer = new TextEncoder('utf-8').encode(message);                    

  // hash the message
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

  // convert ArrayBuffer to Array
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string                  
  const hashHex = hashArray.map(b => ('00' + b.toString(16)).slice(-2)).join('');
  return hashHex;
}

sha256("lol").then(hash => {
  let hashCharsHex = hash.split("");
  let hashCharsDec = hashCharsHex.map(hexChar => parseInt(hexChar, 16));
  let charIndexies = []
  for(let i = 0; i < 64; i++) {
    charIndexies[i] = i;
  }
  // console.log(hashCharsDec);

  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: charIndexies,
      datasets: [{ 
          data: hashCharsDec,
          label: "Characters",
          borderColor: "#3e95cd"
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'avalanche effect visualizer (sha256)'
      }
    }
  });
})

