### git常用设置

```bash
# 优化展示的log
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative

# 设置 alias 例子
git config --global alias.lg "log --graph"

# 优化log设置alias
git config --global alias.mylog "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative"

# 删除别名(删除git lg)
git config --global --unset alias.lg
```
```bash
# 该文件用于配置私钥对应的服务器
# Default github user(first@mail.com)
Host git
HostName 172.28.39.24
User git
IdentityFile C:/Users/DefaultAccount/.ssh/id_rsa

# second user(second@mail.com)
# 建一个github别名
Host github2
HostName github.com
User git
IdentityFile C:/Users/DefaultAccount/.ssh/id_rsa_wai
# 使用方式例如:
# 原本使用 git clone git@github.com:czwaiwai/multiPageVue.git
# 现在变成了 git clone github2:czwaiwai/multiPageVue.git
```