<!-- Start SDK Example Usage [usage] -->
```typescript
import { Petstore } from "petstore";

const petstore = new Petstore({
  apiKey: process.env["PETSTORE_API_KEY"] ?? "",
});

async function run() {
  const result = await petstore.pet.update({
    id: 10,
    name: "doggie",
    category: {
      id: 1,
      name: "Dogs",
    },
    photoUrls: [
      "<value>",
      "<value>",
    ],
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->