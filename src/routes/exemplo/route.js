exports.path = "/exemplinho/:name";

const template = require('../../components/page-layout');

exports.handler = (input, out) => {
  let data = {},
    name = input.params.name;

  if (name == "aline") {
    data.name = name + " Nogueira";
  } else {
    data.name = name;
  }

  data.title = "Titulo da página";
  data.content = "Bla bla bla";

  template.render(data, out);

  // template.render(data, () => {
  //     //throw away the render output
  //     setImmediate(out);
  // });

  // Or don't render the template and send other content:
  //out.end('<h1>' + input.params.name + '</h1>')
};
