<center><img src="./src/assets/Docsby_Logo.svg" width="500"></center>

# Docsby CLI

This is _Docsby CLI_ used to bootstrap new _Docsby_ documentation project.

## CLI Commands

1. [new](#new)
2. [develop](#develop)
3. [build](#build)
4. [run](#run)

### `new`

```
docsby new -from [<starter-url>] [<folder-name>]
docsby new [<folder-name>]
```

| Argument    | Description                                        |
| ----------- | -------------------------------------------------- |
| folder-name | Your folder name, where the startet will be pulled |

#### Options

|     Option     | Description                                                                                                                              |
| :------------: | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `-f`, `--from` | Use provided docsby-starter url. When not used, it is using [docsby-starter-default](https://github.com/marckraw/docsby-starter-default) |

#### Examples

- Create a Docsby documentation named `my-documentation`

```bash
docsby new my-documentation
```

### `develop`

Just run `npm run develop` command in your local folder.

### `build`

Just run `npm run build` command in your local folder.

### `run`

Just alias for `npm run` command in your local folder.
