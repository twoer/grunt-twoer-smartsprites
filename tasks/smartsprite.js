/*
 * grunt-contrib-smartsprite
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

module.exports = function(grunt) {

    var path = require('path');
    var cp = require('child_process');
    var _ = grunt.util._;
    var f = require('util').format;
    var log = grunt.log;

    grunt.registerMultiTask('smartsprite', '{%= description %}', function() {
        var options = this.options({
            stdout: true,
            stderr: true
        });
        if(!options.rootPath || !options.outputPath) {
            log.error('rootPath or outputPath is null.');
            return;
        }
        var cmdPath = options.smartspritePath || '"' +  path.resolve('') + '/node_modules/grunt-contrib-smartsprites/smartsprites-0.2.9/smartsprites.cmd"';
        var rootPath = path.resolve(options.rootPath);
        var outputPath = path.resolve(options.outputPath);
        var callback = _.isFunction(options.callback) ? options.callback : function() {}
        var suffix = options.cssFileSuffix || '""';
        var command = command = cmdPath + ' --root-dir-path "' + rootPath + '" --output-dir-path "' + outputPath + '" --css-file-suffix ' + suffix;

        var done = this.async();
        var childProcess = cp.exec(command, null, callback);

        stdout && childProcess.stdout.on('data', function (data) { log.error('stdout:' + data) });
        stderr && childProcess.stderr.on('data', function (data) { log.error('stderr:' + data); });

        childProcess.on('exit', function(code) {
            if (code !== 0) {
                log.error(f('Exited with code: %d.', code));
                return done(false);
            }
            log.ok(f('Exited with code: %d.', code));
            done();
        });
    });
};
