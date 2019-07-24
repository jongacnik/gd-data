# gd-data

Fetch public ([published to web](https://support.google.com/docs/answer/183965?co=GENIE.Platform%3DDesktop&hl=en)) google docs as structured data. Ready to deploy to [now](https://zeit.co/now).

## API

### `/api/doc?url=[url]`

Pass url to a public google doc. Content is parsed with [archieml](http://archieml.org/).

## Deploy

```
$ git clone https://github.com/jongacnik/gd-data && cd gd-data
$ now
```

## Why?

Useful if you want google doc data and don't want to deal with authentication. Works great when you don't mind your doc being public, and don't care that published to web docs only update every 5 mins.

p.s. This is provided as-is since just using for myself :)

## Todo

- [ ] Add support for `/api/sheet?url=[url]`