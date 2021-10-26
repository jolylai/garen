# Garen

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.

### Example

[cnode](https://github.com/cnodejs/egg-cnode)

[egg]: https://eggjs.org

## Mysql

```shell
$ docker run --name mysql -e MYSQL_ROOT_PASSWORD=12345678 -p 3306:3306 -d mysql:5.7.36
```
