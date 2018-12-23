### mysql安装及启动
centos7默认安装的版本是Mariadb

  
```bash
#如果重新安装的话
yum install mariadb mariadb-server
# 启动mariadb
systemctl start mariadb 
#首次设置root密码及相关配置（可能需要sudo权限）
mysql_secure_installation
#测试登录（后面输入密码）
mysql -u root -p
```