import axios from "axios";

console.log("inicio", new Date());

function delay(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function syncOuSincronoAdicao(param1: number, param2: number) {
  return param1 + param2;
}

console.log("dps sync", new Date());

console.log(`Adição 1 + 2 = ${syncOuSincronoAdicao(1, 2)}`);

console.log("dps calc sync", new Date());

async function asyncOuAssincronoAdicao(param1: number, param2: number) {
  console.log("dentro async", new Date());
  await delay(1000);
  console.log("dps de esperar 1s", new Date());
  console.log("resultado!!!!!!!!", param1 + param2);
}

console.log("dps func async", new Date());

console.log("Api running...");

console.log("dps api renning", new Date());

(async () => {
  console.log("dentro chamada", new Date());
  asyncOuAssincronoAdicao(1, 3);
  console.log("fim", new Date());
  getStates();
})();

async function getStates() {
  // const data = await axios({
  //   method: 'post',
  //   url: '/user/12345',
  //   data: {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   }
  // });

  console.log("antes request", new Date());

  const data = await axios.get("https://dev.api.nursa.com/states", {
    headers: {
      authorization: "1234",
      "X-TOKEN": "codigo",
    },
  });

  console.log("dps request", new Date());
  const states = data.data;
  console.log("status", data.status);
  console.log("data", states[0]);
}
