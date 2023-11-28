let fn_sign = (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>
              <form action="/signin" method="post">
                  <p>Name: <input name="name" value="koa"></p>
                  <p>Password: <input name="password" type="password"></p>
                  <p><input type="submit" value="Submit"></p>
              </form>`;
};

let fn_signin = (ctx, next) => {
  let back = '<br><a href="http://localhost:8080/sign">back</a>';
  let signname = ctx.request.body.name || "";
  let password = ctx.request.body.password || "";
  if (signname == "koa" && password == "123") {
    ctx.response.body = `<h1>hello ${ctx.request.body.name}</h1>` + back;
  } else {
    ctx.response.body = `<h1>no!</h1>` + back;
  }
};

let test = ()=>{
  return;
};
module.exports = {
  "GET /sign": fn_sign,
  "POST /signin": fn_signin,
  "TEST /test":test
};
