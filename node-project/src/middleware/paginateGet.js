const paginateGet = (model)=>{
    // pagination for get requests
  return  (req,res,next) =>{
      const page = parseInt(req.query.page);
      const limit = parseInt(req.query.limit);

      const startIndex = (page-1)*limit;
      const endIndex = page*limit;

      let results = {};

      if(endIndex < model.length) {
         results.next = {
             page: page+1,
             limit: limit
         }
      }

      if(startIndex > 0){
        results.previous = {
            page: page-1,
            limit: limit
        }
      }

      results.result = model.slice(startIndex, endIndex);

      res.paginatedResults = results;
      next()

  }
}




module.exports = paginateGet
