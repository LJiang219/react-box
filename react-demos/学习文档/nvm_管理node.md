## 使用 nvm 管理不同版本的node 与 npm
+ 参考 https://www.cnblogs.com/kaiye/p/4937191.html

1. Mac 下通过 brew install nvm 所安装的 nvm

2. nvm 与 n 的区别
node 版本管理工具还有一个是 TJ 大神的 n 命令，n 命令是作为一个 node 的模块而存在，而 nvm 是一个独立于 node/npm 的外部 shell 脚本，因此 n 命令相比 nvm 更加局限。

由于 npm 安装的模块路径均为 /usr/local/lib/node_modules ，当使用 n 切换不同的 node 版本时，实际上会共用全局的 node/npm 目录。 因此不能很好的满足『按不同 node 版本使用不同全局 node 模块』的需求

3. nvm 查看 node版本
 nvm ls-remote 查看有哪些 node 版本
 nvm list 查看本地node版本
 nvm use 版本号 切换版本

 4. npm ls -g --depth=0 #查看已经安装在全局的模块，以便删除这些全局模块后再按照不同的 node 版本重新进行全局安装

 5. https://github.com/nvm-sh/nvm

 6. 删除全局安装的包  $ npm uninstall -g 包名

 7. 升级node, 参考  https://github.com/nvm-sh/nvm
nvm install node # "node" is an alias for the latest version

 8. 升级了node版本, cnpm 不在了, 需要重新安装 cnpm
 sudo npm install -g cnpm --registry=https://registry.npm.taobao.org

 9. mac 下查看node安装路径
 which node
 /Users/jiangling/.nvm/versions/node/v8.4.0/bin/node

 10. nvm（nodejs version manager）是nodejs的管理工具，如果你需要快速更新node版本，并且不覆盖之前的版本；或者想要在不同的node版本之间进行切换；
 11. nvm uninstall 6.2.0 #卸载对应的版本

 12. 卸载已安装到全局的 node/npm
如果之前是在官网下载的 node 安装包，运行后会自动安装在全局目录，其中
node 命令在 /usr/local/bin/node ，npm 命令在全局 node_modules 目录中，具体路径为 /usr/local/lib/node_modules/npm
安装 nvm 之后最好先删除下已安装的 node 和全局 node 模块

cnpm ls -g --depth=0 #查看已经安装在全局的模块，以便删除这些全局模块后再按照不同的 node 版本重新进行全局安装
/Users/jiangling/.nvm/versions/node/v8.4.0/lib

/usr/local/lib/node_modules 

这两个路径有什么区别?????

cd / 进入mac根目录
ls 
cd /usr/local/bin 查看是否有node /usr/local/bin/node


## 
+ 参考 https://www.cnblogs.com/yhhBKY/p/11583316.html
第一步（找到你node的安装路径）找到后，可以打开文件夹更直观的看到下面要删除的lib，include，bin文件
which node
 
第二步
cd 到这个路径的lib下面
eg：cd /Users/jiangling/.nvm/versions/node/v8.12.0/lib
在执行 sudo rm -rf node*
 
第三步
cd 到include下面
eg：cd /Users/xxxxx/.nvm/versions/node/v8.12.0/include
在执行sudo rm -rf node*
 
第四部
在cd到bin路径下
eg：cd /Users/xxxxx/.nvm/versions/node/v8.12.0/bin
在执行
sudo rm -rf /Users/xxxxx/.nvm/versions/node/v8.12.0/bin/npm
sudo rm -rf /Users/xxxxx/.nvm/versions/node/v8.12.0/bin/node
sudo rm -rf /Users/xxxxx/.nvm/versions/node/v8.12.0/share/man/man1/node.1
sudo rm -rf /Users/xxxxx/.nvm/versions/node/v8.12.0/lib/dtrace/node.d
sudo rm -rf ~/.npm