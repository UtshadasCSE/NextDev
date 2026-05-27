interface MyDocument {
  title: string;
  content: string;
  author: string;
}

type Draft<T> = {
  readonly [P in keyof T]?: T[P];
};

const myDraft: Draft<MyDocument> = {
  title: "Learning TypeScript",
};
