const paginatePost = (model)=>{
    // pagination for post requests
  return  (req,res,next) =>{
      const page = parseInt(req.body.page);
      const limit = parseInt(req.body.limit);

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
module.exports = paginatePost