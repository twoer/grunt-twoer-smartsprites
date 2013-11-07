/*
 * grunt-contrib-smartsprite
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

'use strict';

module.exports = function(grunt) 
{

    var path = require('path');
    var cp = require('child_process');
    var _ = grunt.util._;
    var f = require('util').format;
    var log = grunt.log;

    grunt.registerMultiTask('smartsprite', '{%= description %}', function() 
    {
        var data = this.data;
        if(!data.rootPath || !data.outputPath)
        {
            log.error('rootPath or outputPath is null.');
            return;
        }
        var stdout = data.stdout !== undefined ? data.stdout : true;
        var stderr = data.stderr !== undefined ? data.stderr : true;
        var cmdPath = data.smartspritePath || '"' +  path.resolve('') + '/node_modules/grunt-contrib-smartsprite/smartsprites-0.2.9/smartsprites.cmd"';
        var rootPath = path.resolve(data.rootPath);
        var outputPath = path.resolve(data.outputPath);
        var callback = _.isFunction(data.callback) ? data.callback : function() {}
        var command = command = cmdPath + ' --root-dir-path "' + rootPath + '" --output-dir-path "' + outputPath + '" --css-file-suffix ""';

        var done = this.async();
        var childProcess = cp.exec(command, null, callback);

        stdout && childProcess.stdout.on('data', function (data) { log.error('stdout:' + data) });
        stderr && childProcess.stderr.on('data', function (data) { log.error('stderr:' + data); });

        childProcess.on('exit', function(code) 
        {
            if (code !== 0) 
            {
                log.error(f('Exited with code: %d.', code));
                return done(false);
            }
            log.ok(f('Exited with code: %d.', code));
            done();
        });

    
    });


};
