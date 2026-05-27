type DataType<T> = T extends any[] ? "Large" : "Small";
