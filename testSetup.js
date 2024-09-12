import "@testing-library/jest-dom/vitest"; // or use /dom
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

afterEach(() => {
  // runs a cleanup every test
  // makes sure that mounted component are unmounted when redered
  cleanup();
});
