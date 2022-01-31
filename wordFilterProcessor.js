module.exports = (filters) => {
  ignore = filters.ignore.split("");
  must_have = filters.must_have.split("");
  in_place = filters.in_place;

  const show = () => {
    console.log("IGNORE:", ignore);
    console.log("MUST_HAVE:", must_have);
    console.log("IN_PLACE:", in_place);
  };

  const filter = (word) => {
    return applyFilters(word);
  };

  const applyFilters = (word) => {
    return checkIgnoredLetters(word) &&
      checkMustHave(word) &&
      checkInPlace(word)
  }

  const checkIgnoredLetters = (word) => {
    for (const letter of ignore) {
      if (word.includes(letter)) {
        return false;
      }
    }
    return true;
  };

  const checkMustHave = (word) => {
    for (const letter of must_have) {
      if (!word.includes(letter)) {
        return false;
      }
    }
    return true;
  };

  const checkInPlace = (word) => {
    for (const [index, obj] of in_place.entries()) {
      for (const letter of obj.cant_be.split("")) {
        if (word[index] === letter) {
          return false;
        }
      }
      if (obj.key === "_" || obj.key === word[index]) {
        continue;
      }
      return false;
    }
    return true;
  };

  return {
    filter,
    show
  };
};


