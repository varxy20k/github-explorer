var axios = require("axios");
var labels = ["security", "js"];
module.exports = {
  constructUri: constructUri,
  fetchReposWithLabels: fetchReposWithLabels
};

/**
 * @param {Array}
 * @return {Array.<{name: string, html_url: string, description: string, github_stars: Number}>}
 */
function fetchReposWithLabels() {
  var data = {};
  return axios
    .get(
      "https://api.github.com/search/repositories?q=topic:s3+topic:security&sort=stars&order=desc"
    )
    .then(function(response) {
      return response.data.items;
    })
    .then(function(data) {
      return data.map(function(element) {
        return {
          name: element.name,
          html_url: element.html_url,
          description: element.description,
          github_stars: element.stargazers_count
        };
      });
    })
    .then(function(data) {
      console.log(data);
    });
}
fetchReposWithLabels();

/**
 * A function to construct url with given array of tags
 * @params {string[]}
 */
function constructUri(tagarray) {
  return tagarray
    .map(function(value, i, array) {
      if (array.length - 1 === i) {
        return "q=topic:" + value;
      }
      return "q=topic:" + value + "+";
    })
    .join("");
}
