const paginatePost = (model)=>{
    // pagination for post requests
  return  async (req,res,next) =>{
      const page = parseInt(req.body.page);
      const limit = parseInt(req.body.limit);

      const startIndex = (page-1)*limit;
      const endIndex = page*limit;

      let results = {};

      if(endIndex < await model.countDocuments().exec()) {
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

      try{
        results.result =await model.find().limit(limit).skip(startIndex).exec()
      }
      catch {(e)=>{
        res.status(500).json({
          message: e.message
        })
      }}

      res.paginatedResults = results;
      next()

  }
}
module.exports = paginatePost