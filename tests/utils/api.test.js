var api = require("../../app/utils/api");

test("Given lambda, s3 constuct a url as q=topic:lambda+q=topic:s3", function() {
  expect(api.constructUri(["lambda", "s3"])).toBe("q=topic:lambda+q=topic:s3");
});

test("Given  a single label constuct a url as q=topic:lambda", function() {
  expect(api.constructUri(["lambda"])).toBe("q=topic:lambda");
});
