

const gulp = require("gulp");
const clean = require("gulp-clean");
const sass = require('gulp-sass');
const autoprefixer = require("gulp-autoprefixer");
const cleancss = require("gulp-clean-css");
const concat = require("gulp-concat");
const jsmin = require("gulp-jsmin");
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync").create();

const cleanFolderDist = ()=>{

    return gulp.src('section/*')

        .pipe(clean({
        force:true
        })
        );
}

gulp.task('cleanFolderSection', cleanFolderSection);


const scss = ()=>{

    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.min.css'))
        .pipe(cleancss())
        .pipe(autoprefixer({
            "overrideBrowserslist":'last 2 version'
        }))
        .pipe(gulp.dest('section/css'))
        .pipe(browserSync.stream());

};

gulp.task('scss', scss);

const js = () =>{

    return gulp.src('src/js/**/*.js')
        .pipe(jsmin())
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest('section/js'))
        .pipe(browserSync.stream());

};

gulp.task('js', js);
const img = ()=>{

    return gulp.src('src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('section/images'))
        .pipe(browserSync.stream());

};

gulp.task('images',img);
gulp.task('build', gulp.series('cleanFolderSection', gulp.parallel('scss','js','images')));

const watch =()=>{

    browserSync.init({

        server:{

            baseDir: './'

        }

    });




    gulp.watch('src/scss/**/*.scss', scss);
    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js', js);
    gulp.watch('src/images/**/*', img);

};

gulp.task('watch', watch);
gulp.task('dev', gulp.series('build','watch'));
