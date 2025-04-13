# Sito RLE
*Run-length Encoding*

## To install

```
npm install sito-rle
```

or can use `yarn` or `pnpm`

This simple code only have a class with `rle` and will have a `compress` and `decompress` methods

## Compress

This method will take a `string` and will compress it using basic rle

```
import { compress } from "sito-rle";

const text = "aaaabbbbcc";

console.log(compress(text)); // expected log: [4, 97, 4, 98, 2, 99];

```

You will be saving 4 bytes from 10, having 6 bytes with the compression result;

## Decompress

This method will take an `Array` or `Uint8Array` and will decompress using reverse basic rle

```
import { decompress } from "sito-rle";

const input = [15, 97, 2, 65];

console.log(decompress(input)); // expected log: `aaaaaaaaaaaaaaaAA`;

```

### Using as class

You will able to use the parser as an `object` too

```
import parser from "sito-rle";

// this object parser will have compress and decompress methods 
```
