### centos 常用操作记录

```bash
#用命令行禁止屏幕待机黑屏
setterm -blank 0
#centos yum 安装命令 -y表示之后需要确定的地方全部都自动yes
yum install -y 
```
#### 查看linux系统是centos还是ubuntu
```bash
cat /etc/*release*
```
#### centos挂载win10共享文件夹  
```bash

#window端使用命令查看电脑的domain值
net config workstation
#查询结果对应"工作站域"的值 这里是workgroup

#centos端 安装工具
yum install cifs-utils
#运行下方命令即可挂载成功
mount -t cifs -o domain=workgroup,username=share,password=123 //172.31.118.122/tmp /mnt/share  
#如果没有填写domian,那么也不要填写密码才能手动输入密码才能挂载成功
mount -t cifs -o username=share //172.31.118.122/tmp /mnt/share  
# centos自动挂载目录

```

### centos7防火墙开放端口
    
```bash
# 查看所有打开的端口：
firewall-cmd --zone=public --list-ports
# firewall 开启8388 tcp端口
firewall-cmd --zone=public --add-port=8388/tcp --permanent
#  firewall 开启8388 udp端口
firewall-cmd --zone=public --add-port=8388/udp --permanent
# ps --permanent参数表示永久有效
# 删除8080 TCP 端口
firewall-cmd --zone=public --remove-port=8080/tcp --permanent
# firewall reload 使配置生效
firewall-cmd --reload
```

