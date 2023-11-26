const fs = require("fs");

let addController = (router, dir) => {
  let js_files = fs.readdirSync(__dirname + `\\${dir}`).filter((f) => {
    return f.endsWith(".js");
  });

  let http_method = ["GET ", "POST "];

  for (let f of js_files) {
    console.log(`process controller: ${f}`);
    let mapping = require(__dirname + "\\controllers\\" + f);
    for (let url in mapping) {
      for (let method of http_method) {
        try {
          if (url.startsWith(method)) {
            let path = url.substring(method.length);
            let rou_fn = new Function(
              "path",
              "m",
              "router",
              `router.${method.trim().toLowerCase()}(path,m)`
            );
            rou_fn(path, mapping[url], router);
            console.log(`register URL mapping: ${method}${path}`);
          }
        } catch (err) {
          console.log(`invalid URL: ${url}`);
        }
      }
    }
  }
};

module.exports = (dir) => {
  let controllers_dir = dir || "controllers";
  const Router = require("koa-router");
  let router = new Router();

  addController(router, controllers_dir);

  return router.routes();
};
