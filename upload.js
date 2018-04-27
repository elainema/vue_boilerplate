var sftp = require('gulp-sftp');
var gulp = require("gulp"); //base file
var exec = require('child_process').exec;

gulp.task('upload', function() {
    return gulp.src('vue_app.tar.gz')
        .pipe(sftp({
            host: '172.30.10.98',
            user: 'ubuntu',
            pass: '12354',
            remotePath: "/dianyi/app/node/build",
            callback: function() {
                console.log("hi, deploy url: http://172.30.10.98:8084/vue_app.tar.gz ")

            }
        }))
        .on("end", function(){
            exec('md5sum vue_app.tar.gz', {
                encoding: 'utf8',
                timeout: 0,
                maxBuffer: 5000 * 1024, // 默认 200 * 1024
                killSignal: 'SIGTERM'
            }, function(err, stdout, stderr) {
                console.log("vue_app.tar.gz md5sum is : " + stdout.split(" ")[0]);
            })

        });
});

gulp.start("upload")