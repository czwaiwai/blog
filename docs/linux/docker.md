# docker 的学习

#### 运行docker容器
```bash
# -i --interactive=false: 以交互模式运行容器，通常与 -t 同时使用；
# -t --tty=false: 为容器重新分配一个伪输入终端，通常与 -i 同时使用；
# -d --detach=false: 后台运行容器，并返回容器ID；
# --name="nginx-lb": 为容器指定一个名称；
# -p --publish=[]: 端口映射，格式为：主机(宿主)端口:容器端口
# -v --volume=[]: 给容器挂载存储卷，挂载到容器的某个目录
docker run -i -t ubuntu /bin/bash

#使用镜像 nginx:latest，以后台模式启动一个容器,将容器的 80 端口映射到主机的 80 端口,主机的目录 /data 映射到容器的 /data。
docker run -p 80:80 -v /data:/data -d nginx:latest

#进入容器内部
docker exec -it nginx bash
#获取容器的ip
docker inspect --format '{{ .NetworkSettings.IPAddress }}' nginx
#使用nginx镜像创建容器
docker run --name nginx -d -p 80:80 -v /home/czwaiwai/docker/nginx/nginx.conf:/etc/nginx/nginx.conf -v /home/czwaiwai/docker/nginx/html:/usr/share/nginx/html -v /home/czwaiwai/docker/nginx/logs/access.log:/var/log/nginx/access.log  --link=node_demo01:node nginx
# --link=[容器的name]:[容器中的别名] 链接容器

# 构建一个镜像文件
docker build -t node_demo01 .
```

```bash
# 运行jenkins
docker run -d --name jenkins -p 49001:8080  -p 50000:50000 -v /home/czwaiwai/docker/jenkins_home:/var/jenkins_home jenkins/jenkins
# 浏览器打开localhost:49001即可查看
```
#### dockerfile node 基础用法
```bash
#制定node镜像的版本
FROM node:8.9-alpine
#声明作者
MAINTAINER czwaiwai
#移动当前目录下面的文件到app目录下
ADD . /app/
#进入到app目录下面，类似cd
WORKDIR /app
#安装依赖
RUN npm install
#对外暴露的端口
EXPOSE 3000
#程序启动脚本
CMD ["npm", "start"]
```

#### 安装gitlab
```bash
# 下载gitlab
docker pull gitlab/gitlab:latest
# 运行gitlab
# --restart always 加上这个命令可以使宿主机重启后自动启动容器
docker run -d --hostname 192.168.1.106  \
-p 10443:443 \
-p 10080:80  \
-p 10022:22  \
--name=gitlab \
-v /home/czwaiwai/docker/gitlab/config:/etc/gitlab \
-v /home/czwaiwai/docker/gitlab/logs:/var/log/gitlab \
-v /home/czwaiwai/docker/gitlab/data:/var/opt/gitlab \
gitlab/gitlab-ce
# ps： 对应的端口记得在防火墙中放开
# pps:默认账户名为root，首次会要求设置密码
# pps: 需要设置邮件服务等配置
```