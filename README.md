# g-lerna

lerna 实践

## 创建 npm 私服

### 安装

```bash
pnpm add verdaccio -g
```

### 启动

```bash
verdaccio # 启动一个私服
# http://localhost:4873
```

### 使用

```bash
npm adduser --registry http://localhost:4873/ # 注册一个用户
npm publish --registry http://localhost:4873/ # 发布一个包
```

### 后台运行

```bash
pm2 start /Users/robin/Library/pnpm/global/5/.pnpm/verdaccio@6.1.2_encoding@0.1.13_typanion@3.14.0/node_modules/verdaccio/bin/verdaccio
pm2 ls
pm2 logs verdaccio
```

## 创建项目

```bash
lerna init --packages="packages/*"

lerna create g-lerna --registry http://localhost:4873
lerna create @g-lerna/cli --registry http://localhost:4873
lerna create @g-lerna/create --registry http://localhost:4873
lerna create @g-lerna/init --registry http://localhost:4873
```
