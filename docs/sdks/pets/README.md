# Pets
(*pets*)

## Overview

### Available Operations

* [add](#add) - Add a new pet to the store

## add

Add a new pet to the store

### Example Usage

```typescript
import { Petstore } from "petstore";

const petstore = new Petstore({
  apiKey: process.env["PETSTORE_API_KEY"] ?? "",
});

async function run() {
  const result = await petstore.pets.add({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
    ],
  });
  
  // Handle the result
  console.log(result)
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { PetstoreCore } from "petstore/core.js";
import { petsAdd } from "petstore/funcs/petsAdd.js";

// Use `PetstoreCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const petstore = new PetstoreCore({
  apiKey: process.env["PETSTORE_API_KEY"] ?? "",
});

async function run() {
  const res = await petsAdd(petstore, {
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
    ],
  });

  if (!res.ok) {
    throw res.error;
  }

  const { value: result } = res;

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [components.Pet](../../models/components/pet.md)                                                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[components.Pet](../../models/components/pet.md)\>**

### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
