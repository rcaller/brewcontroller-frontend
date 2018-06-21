module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-deb');grunt.initConfig({
    deb_package: {
        options: {
            maintainer: "Rich Caller <richc@tertiarybrewery.co.uk>",
            uploaders: [ { "name": "Rich Caller", "email": "richc@tertiarybrewery.co.uk" } ],
            version: "0.1."+(process.env.BUILD_NUMBER?:1),
            name: "brewcontrol",
            short_description: "Frontend and core package for brewcontrol HERMS system",
            long_description: "Frontend and core package for brewcontrol HERMS system",
            target_architecture: "armhf",
            category: "devel",
            build_number: "",
            revision: "",
            dependencies: ["nginx", "brewapi", "brewcontroller"],           // List of the package dependencies
            extra_headers: [],          // List of extra headers to include
            tmp_dir: '.tmp',            // The task working dir
            output: './output/'         // Where your .deb should be created
        },
        build: {
            // Here you define what you want in your package
            files: [{
                cwd: './dist/brew',
                src: '**/*',
                dest: '/var/www/html'
            }],

            // You can provide preinst, postinst, prerm and postrm script either by giving a file or what to put in it
            scripts: {
                postinst: {
                    content: 'service nginx restart'
                }
            }
        }
    }
});
};
