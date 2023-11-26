/// <reference path="../typings/index.d.ts" />

const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();
const bodyparser = require("koa-bodyparser");
const controller = require("./controller");

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
  await next();
});

app.use(bodyparser());

app.use(controller());

app.listen(8080);
console.log("\nFinished!\nhttp://localhost:8080/ \n");
