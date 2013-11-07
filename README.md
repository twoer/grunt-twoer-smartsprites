grunt-contrib-smartsprite
=========================


> 本程序基于 https://github.com/carrotsearch/smartsprites



## 使用方法：
```js
//grunt smartsprite
smartsprite: 
{
    dev: 
    {
        // smartspritePath : 'smartsprites.cmd',
        rootPath: config.src + 'style/source/',
        outputPath: config.src +  'style/',
        stdout: true,
        stderr: true,
        callback: function()
        {
            grunt.log.writeln('smartsprite exec successfully.');
        }
    }
}
```

#### options.
