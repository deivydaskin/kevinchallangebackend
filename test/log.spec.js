var should = require("should");
var request = require("request");
var chai = require("chai");
var expect = chai.expect;
var urlBase = "http://localhost:3001/logs";

describe("logs API test", function () {
  it("Should return 50 logs max", function (done) {
    request.get(
      {
        url: urlBase,
      },
      function (error, response, body) {
        // convert the response to json
        var _body = {};
        try {
          _body = JSON.parse(body);
        } catch (e) {
          _body = {};
        }

        expect(response.statusCode).to.equal(200);

        expect(_body).to.have.lengthOf.at.most(50);

        done();
      }
    );
  });
});
