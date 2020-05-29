import Conf from "conf";
// duapi config -k={your api key} -c={your city id} -u=Celsius
const configKey = "duConfig";

export async function configure(args) {
  const config = new Conf();
  let currentConfigObject = config.get(configKey);
  currentConfigObject = currentConfigObject || {};

  let apiKey = args.k;
  if (!apiKey) {
    apiKey = currentConfigObject.apiKey;
  }

  let cityId = args.c;
  if (!cityId) {
    cityId = currentConfigObject.cityId || 4862034;
    cityId = Number(cityId);
  }

  let units = args.u;
  if (!units) {
    units = currentConfigObject.units || "Kelvin";
  }

  config.set(configKey, { apiKey: apiKey, cityId: cityId, units: units });
  console.log(config.get(configKey));
}

export function getConfig() {
  return new Conf().get(configKey);
}
