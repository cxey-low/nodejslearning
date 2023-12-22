const https =require('https')

let getURL = (ctx, next) => {
  ctx.response.body = `
  <h1>Index</h1>
              <form action="/submiturl" method="post">
                  <p>URL: <input name="name"></p>
                  <p><input type="submit" value="Submit"></p>
              </form>
  `;
};

let submitURL = (ctx, next) => {
  let gotURL = ctx.request.body.name || "";

  https.get(gotURL, (res) => {
    let body = "";
    res.on("data", (data) => {
      body += data;
    });
    res.on("end", () => {
      ctx.response = body;
    });
    res.on("error", (err) => {
      ctx.response = err.message;
    });
  });
};

module.exports={

  "GET /geturl":getURL,
  "POST /submiturl":submitURL


}