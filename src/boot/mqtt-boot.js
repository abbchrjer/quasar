import * as mqtt from "mqtt"; // import everything inside the mqtt module and give it the namespace "mqtt"
const options = {
  port: 1884,
  clientId: "christopher",
  clean: false,
};

//let client = mqtt.connect("ws://abb-mosca.cloud.abbspets.se", options); // create a client
let client = mqtt.connect("ws://mosca-app.cloud.mustini.se", options)

export { client };
