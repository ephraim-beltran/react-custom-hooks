import { describe, it, expect } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { useFetch } from "./index.jsx";

describe("useFetch hook", () => {
  it("fetches remote resource", async () => {
    const { result } = renderHook(() =>
      useFetch("https://jsonplaceholder.org/posts/1"),
    );
    await waitFor(() => {
      const [data, status] = result.current;
      expect(data).not.toBe(null);
    });
  });

  it.todo("Should return error");
});
