# UpdateUserRequest

## Example Usage

```typescript
import { UpdateUserRequest } from "petstore/models/operations";

let value: UpdateUserRequest = {
  username: "Kenyon2",
  user: {
    id: 10,
    username: "theUser",
    firstName: "John",
    lastName: "James",
    email: "john@email.com",
    password: "12345",
    phone: "12345",
    userStatus: 1,
  },
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `username`                                         | *string*                                           | :heavy_check_mark:                                 | name that needs to be updated                      |
| `user`                                             | [components.User](../../models/components/user.md) | :heavy_minus_sign:                                 | Update an existent user in the store               |