let index = (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
                <br>
                <a href='http://localhost:8080/sign'>sign</a>
                <a href='/geturl'>geturl</a>
    `;
};

module.exports = {
  "GET /": index,
};
