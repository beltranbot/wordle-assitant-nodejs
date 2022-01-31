const filesystem = require('./filesystem');
const WordFilterProcessor = require('./wordFilterProcessor');

let filters = {
  ignore: "coi",
  must_have: "grwn",
  in_place: [
    {
      key: "_",
      cant_be: ""
    },
    {
      key: "r",
      cant_be: ""
    },
    {
      key: "_",
      cant_be: ""
    },
    {
      key: "_",
      cant_be: "w"
    },
    {
      key: "_",
      cant_be: "n"
    },
  ]
};

const filename = 'five_letters_words_dictionary.csv';
const processor = WordFilterProcessor(filters);

let file = filesystem.open(filename).split("\n");
let i = 0;

for (const line of file) {
  if (processor.filter(line)) {
    i++;
    console.log(line);
  }
}
