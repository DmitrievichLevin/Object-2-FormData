# Object 2 FormData

> Form Data Class For Transforming complex Objects into Form Data

With O2F, you can:

- **Create** FormData from Complex Data Structures for use in HTTP Methods.
- **Convert** Files nested within Objects/Arrays
- **POST/PATCH** Objects of any size

## Why you should use Object-2-FormData

O2F is an Object Class that recursively traverses Objects neatly into FormData in such a way that they are exactly represented when parsed on the backend. This includes: Files, Arrays, Objects, & Primitive Data-Types.

## Install

```sh
# NPM
npm install object-2-formdata --save
```

## Adding to your project

### In Node.js

```js
import { ObjectToForm } from "object-2-formdata";
```

### Example:

##### Front-End

```js
const form = new ObjectToForm(<Object>, <String>);
```

#### <Object>:

- **Required**
- Object to parse into Form Data

#### <String>:

- **Not Required**
- Base String eg.('payload')

#### Back-End:

```js
var payload = serializeObject(JSON.parse(JSON.stringify(payload)));
```

```json
payload: {
  metadata: { createdBy: 'test-admin', uploaded: '2022-08-27T02:06:33.678Z' },
  id: '519dc76b-3b2f-47cd-9958-8518066318aa',
  title: 'Test',
  cover: {
    contentsUrl: 'https://www.test.com'
  },
  volumes: 1,
  summary: 'Some Summary',
  authors: [ 'Howardbleu' ],
  themes: [ 'Combat Sports' ],
  genre: [ 'Award Winning' ],
  status: 'Publishing',
  chapters: [
    { volume: 0, number: 0, releaseDate: '2022-09-06T00:00:00Z' },
    { volume: 0, number: 0, releaseDate: '2022-09-21T00:00:00Z' }
  ],
  __v: 0
}

files: [
  {
    fieldname: 'patch[chapters][0][file]',
    originalname: 'Test1.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg',
    buffer: <Buffer ff d8 ff e1 01 f2 45 78 69 66 00 00 4d 4d 00 2a 00 00 00 08 00 08 01 0e 00 02 00 00 00 65 00 00 00 6e 01 1a 00 05 00 00 00 01 00 00 00 d4 01 1b 00 05 ... 3589046 more bytes>,
    size: 3589096
  },
  {
    fieldname: 'patch[chapters][1][file]',
    originalname: 'Test2.png',
    encoding: '7bit',
    mimetype: 'image/png',
    buffer: <Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 49 48 44 52 00 00 0d 79 00 00 13 31 08 00 00 00 00 46 38 92 c0 00 00 00 1a 74 45 58 74 41 75 74 68 6f 72 00 64 61 ... 3382048 more bytes>,
    size: 3382098
  }
]
```

## License

MIT
