const gulp = require('gulp')

/*
 ---- Top level commands Gulp ----
 gulp.task - define tasks
 gulp.src - point to files to use
 gulp.dest - points to folder to output
 gulp.watch - watch files and folders for change
*/

// logs message
gulp.task('default', async ()=>{
    return console.log("Gulp is now set up");
});

//  perform image,scss and js bundling, cache busting and other tasks .. download necesarry packages using -> npm i <package-name>