# Generics in TypeScript

Generics let you write code that is parameterized by types, so instead of hardcoding a specific data type (like string or number), you define a placeholder type that gets filled in when the code is used. This is what makes components and functions both reusable and strictly typed.

Let’s break down how that works.

## 1. The Core Idea: Type Parameters

A generic introduces a type variable (often `T`) that represents “some type I don’t know yet.”

```typescript
function identity<T>(value: T): T {
  return value;
}
```
- `T` is a placeholder.
- When you call the function, TypeScript infers or assigns the actual type.

Examples:
- `identity<string>("hello")`; // `T = string`
- `identity<number>(42)`;     // `T = number`

So instead of writing multiple versions of the same function, you write it once, and it adapts.

## 2. Reusability Without Losing Type Safety

Without generics, you might fall back to `any`:

```typescript
function identity(value: any): any {
  return value;
}
```
- This is reusable—but unsafe. You lose type checking.

With generics:
- You keep flexibility and preserve type information end-to-end.
- Example:
  ```typescript
  const result = identity("hello");
  // result is typed as string (not any)
  ```

## 3. Generics in Data Structures

Generics shine when building reusable data structures:

```typescript
class Box<T> {
  content: T;
  constructor(value: T) {
    this.content = value;
  }
  getContent(): T {
    return this.content;
  }
}
type Usage:
defaults to new Box<string>("hi") and new Box<number>(123). Each instance is strongly typed based on what you pass in.
demo:
defaults to new Box<string>("hi") and new Box<number>(123). Each instance is strongly typed based on what you pass in.
demo:
type Usage:
defaults to new Box<string>("hi") and new Box<number>(123). Each instance is strongly typed based on what you pass in.
demo:
type Usage:
documentation for usage examples with different types.
demonstrates strong typing per instance.
demonstrates strong typing per instance.
demonstrates strong typing per instance.