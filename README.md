# Project Name

> MYKEA Main Pictures Display and Carousel Modal

## Related Projects

  - https://github.com/hrr47-fec-omalley/reviews-service
  - https://github.com/hrr47-fec-omalley/similar-products-service
  - https://github.com/hrr47-fec-omalley/add-to-bag-service

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [Endpoints](#endpoints)

## Usage

> Run `npm install` to install all dependancies (will also install Dev dependancies). To install for deployment, run `npm install --production`.

> `run schema` will drop DB and create a new DB with tables.
> `node db/seed.js` will seed the DB with random products.

> `npm run build` will build webpack and watch files.
> `npm run server` starts nodemon and server and watches for changes.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 12.18.2

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## Endpoints

### GET - /:id/pictures/:id
Takes in an id from req.params.id and returns one set of pictures from the database.

### POST - /
Takes in an object in the body in the below form and creates a new record in the database.

{
  description: string with description of item,
  picture1: url to picture one,
  picture2: url to picture two,
  picture3: url to picture three,
  picture4: url to picture four,
  picture5: url to picture five,
  picture6: url to picture six
}

### PUT - /:id
Takes in an object in the body in the below form and updates a record in the database.
{
  table: must be 'pictures' or 'descriptions',
  id: item id to update,
  update: text to update
}

### DELETE - /:id
Takes in an id from req.params.id and deletes the item in the database.
