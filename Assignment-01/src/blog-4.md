# Understanding the Four Pillars of Object-Oriented Programming in TypeScript

In large TypeScript codebases, complexity doesn’t come from “too much code” — it comes from uncontrolled relationships between pieces of code. The four OOP pillars exist to control exactly that: how data and behavior are structured, shared, and exposed.

Let’s go one by one, but in the context of real TypeScript systems (APIs, services, frontend apps, backend domains).

## 1. Encapsulation — Controlling What the Outside World Can Touch

**Encapsulation** is about hiding internal state and exposing only safe operations.

In TypeScript, this usually means:
- private fields
- protected members
- public methods as controlled entry points

```typescript
class UserService {
  private cache: Map<string, string> = new Map();

  public getUser(id: string) {
    if (this.cache.has(id)) return this.cache.get(id);

    const user = this.fetchFromDB(id);
    this.cache.set(id, user);
    return user;
  }

  private fetchFromDB(id: string) {
    return `User-${id}`;
  }
}
```
**What this solves at scale:**
- Prevents accidental mutation of internal state
- Reduces “spaghetti access” to shared data
- Makes refactoring safe (you can change internals without breaking callers)

**What this really means:** you shrink the “blast radius” of changes.

## 2. Abstraction — Hiding Implementation Complexity Behind Contracts

**Abstraction** means exposing what something does, not how it does it.

In TypeScript, this shows up as:
- interfaces
- abstract classes
- service contracts

```typescript
type PaymentProvider = {
  charge(amount: number): Promise<boolean>;
};
```
doesn't matter how payment happens:
```typescript
def class CheckoutService {
  constructor(private payment: PaymentProvider) {}
  async checkout(total: number) {
    return this.payment.charge(total);
  }
}
doesn't matter how payment happens:
the business logic remains unaffected.
Why this matters in large systems:
a. You can swap implementations (Stripe → PayPal) without touching business logic
. Enables mocking in tests
. Decouples “core logic” from “infrastructure logic”
Key idea: your system becomes contract-driven instead of implementation-driven.
 
describes a flexible architecture where components interact through well-defined interfaces.
doesn't depend on specific implementations.
describes a flexible architecture where components interact through well-defined interfaces.
doesn't depend on specific implementations.
describes a flexible architecture where components interact through well-defined interfaces.
doesn't depend on specific implementations.
describes a flexible architecture where components interact through well-defined interfaces.
doesn't depend on specific implementations.
describes a flexible architecture where components interact through well-defined interfaces.