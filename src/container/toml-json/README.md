# toml-json

Convert TOML files to JSON.

github: [https://github.com/marioa5945/toml-json](https://github.com/marioa5945/toml-json)

## Installation

```sh
# Locally in your project
yarn add toml-json --dev

npm install -D toml-json
```

## Usage

```ts
import tomlJson from '../src';

let config = tomlJson({ fileUrl: './example/config.toml' });
console.log(config);

config = tomlJson({ data: 'title = "TOML Example 2"' });
console.log(config);
```

## License

ISC
