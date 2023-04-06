const controller = {
  getCats: async (req, res, next) => {
    try {
      res.locals.cats = [];
      // while (res.locals.cats.length < 6) {
      const catId = Math.floor(Math.random() * 28163);
      let data = await fetch(`https://jservice.io/api/category?id=${catId}`);
      data = await data.json();
      console.log(data.json);
      
      // if (data.clues_count >= 5) {
      res.locals.cats.push(data);
      // console.log(res.locals.cats);
      // }
      // }
      return next();
    }
    catch(err) {
      return next({err: 'error retrieving categories'});
    }
  },
  // getClues: null,
};

module.exports = controller;