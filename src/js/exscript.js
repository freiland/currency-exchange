export default class currencyEx {
  static getExRate(countryCode) {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();
      const url = "https://v6.exchangerate-api.com/v6/333348a10fe0ab319ac2bf4e/latest/USD";
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open('GET', url, true);
      request.send();

    });
  }
}