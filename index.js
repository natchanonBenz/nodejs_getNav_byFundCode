const axios = require('axios');
const jsdom = require("jsdom");

var fundName = process.argv
var target = fundName[2]

axios.get('https://codequiz.azurewebsites.net/', { headers: { Cookie: "hasCookie=true;" } })
  .then(response => {

    var res = response.data
    var dom = new jsdom.JSDOM(res);

    var Nav_result
    var size = dom.window.document.getElementsByTagName("td").length;
    var list_text = [];

    for (let i = 0; i < size; i++) {
      list_text.push(dom.window.document.getElementsByTagName("td")[i].textContent)
    }

    for (let j = 0; j < list_text.length; j++) {
      if (list_text[j] == target) {
        Nav_result = list_text[j + 1]
      }
    }
    console.log(Nav_result)

  })
  .catch(error => {
    console.log(error);
  });