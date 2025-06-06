# g-lerna

lerna 实践

## 创建 npm 私服

```bash
pnpm add verdaccio -g

verdaccio # 启动一个私服
# http://localhost:4873
npm adduser --registry http://localhost:4873/ # 注册一个用户
npm publish --registry http://localhost:4873/ # 发布一个包
```

## 创建项目

```bash
lerna init --packages="packages/*"

lerna create g-lerna --registry http://localhost:4873
lerna create @g-lerna/cli --registry http://localhost:4873
lerna create @g-lerna/create --registry http://localhost:4873
lerna create @g-lerna/init --registry http://localhost:4873
```
