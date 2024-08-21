const test = (body = undefined, token) => {
  if (body) {
    console.log("ola mundo");
  }
  console.log(token);
};
test(null, "eita preula");
