grunt-contrib-smartsprite
=========================


> 本程序基于 https://github.com/carrotsearch/smartsprites


## 依赖环境

*  java    `~jre 1.6`  
*  nodejs  `不确定，个人环境是 windows v0.10.15 `
*  nodejs  `~0.4.0`


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

#### smartspritePath
Type: `String`  
smartsprite 路径，当前已经包含 `smartsprites-0.2.9` ，默认会使用此目录的 smartsprite


#### rootPath
Type: `String` 
包含 smartsprite tag 的 css 文件夹路径


#### outputPath
Type: `String` 
smartsprite 执行输出 css 文件夹路径


#### stdout
Type: `Boolean` 
是否显示标准输出


#### stderr
Type: `Boolean`
是否显示错误输出


#### callback
Type: `Function`
执行完成回掉



## 感谢：
* 整个程序大部分都参考了 https://github.com/jharding/grunt-exec
* Waitcat
* TooBug
* Vincent



## 最后
* 新手，程序难免有瑕疵，望大家多包涵，多斧正！


 
















