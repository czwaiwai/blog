### docker 的学习

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
```

```bash
docker run -d --name jenkins -p 49001:8080 -v /home/czwaiwai/test/jenkins_home:/var/jenkins_home jenkins
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