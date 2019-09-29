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

sha256("A paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.").then(hash => {
  let hashCharsHex = hash.split("");
  let hashCharsDec = hashCharsHex.map(hexChar => parseInt(hexChar, 16));
  let charIndexies = []
  for(let i = 0; i < 64; i++) {
    charIndexies[i] = i;
  }
  // console.log(hashCharsDec);

  let ctx1 = document.getElementById('myChart1').getContext('2d');
  let myChart1 = new Chart(ctx1, {
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


sha256(" paragraph is a self-contained unit of a discourse in writing dealing with a particular point or idea. A paragraph consists of one or more sentences. Though not required by the syntax of any language, paragraphs are usually an expected part of formal writing, used to organize longer prose.").then(hash => {
  let hashCharsHex = hash.split("");
  let hashCharsDec = hashCharsHex.map(hexChar => parseInt(hexChar, 16));
  let charIndexies = []
  for(let i = 0; i < 64; i++) {
    charIndexies[i] = i;
  }
  // console.log(hashCharsDec);

  let ctx2 = document.getElementById('myChart2').getContext('2d');
  let myChart2 = new Chart(ctx2, {
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
