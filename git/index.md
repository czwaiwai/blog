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