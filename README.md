Numbers' Encyclopedia
---------------------
* Numbers with their descriptions (values, properties, attributes, as attributes, meaning, mentions, descriptions ...)
* Could be also called 'knowyournumber.com'
* forty2.com, 4two.com, ramanujan.com, 1729.com etc

Examples
--------

### 2
* A primary number


### 3.14
* An aproximation of value of pie, i.e. 3/14. Often denoted with symbol π.
* Ratio of a circle's circumference to its diameter
* > पाई या π एक गणितीय नियतांक है जिसका संख्यात्मक मान किसी वृत्त की परिधि और उसके व्यास के अनुपात के बराबर होता है। इस अनुपात के लिये π संकेत का प्रयोग सर्वप्रथम सन् १७०६ में विलियम जोन्स ने सुझाया। इसका मान लगभग 3.14159 के बराबर होता है। यह एक अपरिमेय राशि है।  -- http://hi.wikipedia.org/wiki/पाई

### 16
* 2^4
* 4^2
* No. of vowels in Indian traditions

### 25
* No. of plosive consonants sounds in Indian tradition
* 2^5
* 50/2

### 42
* Answer to The Ultimate Question of Life, the Universe, and Everything.


API
---

### POST

###### Add Number (but not its description)
```
curl -X POST -H "Content-Type:application/vnd.api+json" http://localhost:1729/numbers -d '{"numbers":[{"name":"42"}]}'
```

```js
{
  "numbers": [
    {
      "id": "suSfyduwv6wOED5o",
      "name": "42"
    }
  ]
}
```

###### Add Description (Not tied to any number yet !)
```
curl -X POST -H "Content-Type:application/vnd.api+json" http://localhost:1729/descriptions -d '{"descriptions":[{"body":"Answer to The Ultimate Question of Life, the Universe, and Everything."}]}'
```

```js
{
  "descriptions": [
    {
      "id": "ntolnbuksXDpi7Zs",
      "body": "Answer to The Ultimate Question of Life, the Universe, and Everything."
    }
  ]
}
```

###### Add Number with Description (Not Working)
```
curl -X POST -H "Content-Type:application/vnd.api+json" http://localhost:1729/numbers -d '{"numbers":[{"name":"42","descriptions":[{"body":"Answer to The Ultimate Question of Life, the Universe, and Everything."}]}]}'
```
It adds a description in it's links object. However, it doesn't create a Description object and add it's link. Rather, the end result is a Description object embedded inside Number object.

```js
{
  "numbers": [
    {
      "id": "l7ckJPk2J2MDkkiE",
      "name": "42",
      "links": {
        "descriptions": [
          {
            "body": "Answer to The Ultimate Question of Life, the Universe, and Everything."
          }
        ]
      }
    }
  ]
}
```

Here ```http://localhost:1729/numbers/l7ckJPk2J2MDkkiE/descriptions``` would not give you the Description you just added.

###### Add Description directly to 'descriptions' collection of a Number (Not working)
```
curl -X POST -H "Content-Type:application/vnd.api+json" http://localhost:1729/numbers/suSfyduwv6wOED5o/descriptions -d '{"descriptions":[{"body":"13*4"}]}'
```

```
Cannot POST /numbers/pziSEodyreLUdLKV/descriptions
```

### GET
```
curl -X GET http://localhost:1729/numbers
```

```
curl -X GET http://localhost:1729/numbers/suSfyduwv6wOED5o
```

```
curl -X GET http://localhost:1729/numbers/suSfyduwv6wOED5o/descriptions
```

### PUT

###### Updating 'descriptions' collection of a Number with a description id. 

Essentially, this will link/add a Descriptions to a Number.

```
curl -X PUT -H "Content-Type:application/vnd.api+json" http://localhost:1729/numbers/suSfyduwv6wOED5o -d '{"numbers":[{"name":"42","descriptions":["ntolnbuksXDpi7Zs"]}]}'
```

```js
{
  "numbers": [
    {
      "id": "suSfyduwv6wOED5o",
      "name": "42",
      "links": {
        "descriptions": [
          "ntolnbuksXDpi7Zs"
        ]
      }
    }
  ]
}
```

It is worth noting that the corresponding Description object has been also changed by this operation.

Earlier
```js
{
  "descriptions": [
    {
      "id": "1FS2RvmqTPx6ZgR3",
      "body": "Answer to The Ultimate Question of Life, the Universe, and Everything."
    }
  ]
}
```

After
```js
{
  "descriptions": [
    {
      "id": "1FS2RvmqTPx6ZgR3",
      "body": "Answer to The Ultimate Question of Life, the Universe, and Everything.",
      "links": {
        "number": "08ggk3RvhyxDAHTc"
      }
    }
  ]
}
```

### DELETE

###### Removes a number ( With all it's descriptions )
```
curl -I -X DELETE http://localhost:1729/numbers/Y1JZxhRmhONsYYu0
```
```
HTTP/1.1 204 No Content
Date: Fri, 20 Dec 2013 20:05:40 GMT
Connection: keep-alive
```

[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/samyakbhuta/dumbnumb/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

