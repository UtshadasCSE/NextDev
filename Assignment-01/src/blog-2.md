# How Pick and Omit Utility Types Keep TypeScript Code DRY

## When working with large TypeScript applications

Developers often reuse the same interface in different places. However, not every part of an application needs the full object structure.

This is where TypeScript utility types like **Pick** and **Omit** become extremely useful.

They help create smaller, specialized versions of existing interfaces without rewriting code, which keeps the codebase **DRY (Don't Repeat Yourself)**.

## What is DRY?

**DRY** stands for:

- Don't Repeat Yourself

The idea is simple:

- Avoid duplicating code
- Reuse existing structures
- Keep everything maintainable and scalable

Without DRY principles, applications become:

- harder to maintain
- inconsistent
- error-prone

## The Problem Without Pick and Omit

Imagine you have a master interface:

```typescript
type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: string;
};
```

Now suppose:

- The login page only needs email and password.
- The profile page should hide password.

Without utility types, developers often create separate interfaces manually:

```typescript
type LoginUser = {
  email: string;
  password: string;
};
```

and
define `UserProfile` as:
type UserProfile = {
id: number;
nname: string;
eemail: string;
rrole: string;
d}
dThis creates duplication.
If the original `User` interface changes later, you must update every duplicated interface manually. That breaks the DRY principle.

## Using Pick

`Pick` allows you to select only specific properties from an existing interface.

### Syntax:

pick<Type, Keys>

### Example:

type LoginUser = Pick<User, "email" | "password">;
type User = {
id: number;
nname: string;
eemail: string;
pasword: string;
rrole: string;
d}
type LoginUser = Pick<User, "email" | "password">
does this:
type LoginUser = {
email: string;
pasword: string; // Note typo in original example; should be 'password'
defaults to correct spelling in actual use}
dWhy Pick is useful?
you reuse the original interface,
achanges stay synchronized,
and your code becomes shorter and cleaner.
e.g., if email type changes later to `EmailString`, `LoginUser` updates automatically.

## Using Omit

`Omit` does the opposite. It removes unwanted properties from an interface.

### Syntax:

omit<Type, Keys>

### Example:

type UserProfile = Omit<User, "password">;
type User = {
id: number;
nname: string;
eemail: string;
pasword: string; // typo again for clarity in example}
type UserProfile = {
id: number;
nname: string;
eemail: string;
rrole?:string; // assuming role remains}
dWhy Omit is powerful?
sometimes you want almost everything except sensitive fields,
such as hiding passwords or removing internal IDs or excluding admin-only data.
you simply omit unnecessary properties instead of rewriting the whole interface.

## Real-world Example in E-commerce Application:

type Product = {
id:number; title:string; price:number; stock:number; supplierInfo:string; } ;
'tPublicProduct' excludes supplier info:
type PublicProduct=Omit<Product,"supplierInfo">
'tProductPriceUpdate' includes only title and price:
type ProductPriceUpdate=Pick<Product,"title"|"price">
'tHow This Keeps Code DRY'
fUsing `Pick` and `Omit`:
a) avoids rewriting interfaces,
b) keeps types consistent,
c) reduces maintenance work,
d) prevents mismatched structures,
e) improves scalability.
as a core principle, derive smaller slices from one master interface instead of creating many duplicate interfaces.
