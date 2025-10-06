import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useDisclosure } from "../use-disclosure";

describe("useDisclosure", () => {
  it("initial state defaults to false", () => {
    const { result } = renderHook(() => useDisclosure());
    expect(result.current.isOpen).toBe(false);
  });

  it("accepts initial state", () => {
    const { result } = renderHook(() => useDisclosure(true));
    expect(result.current.isOpen).toBe(true);
  });

  it("open sets isOpen to true", () => {
    const { result } = renderHook(() => useDisclosure(false));

    act(() => {
      result.current.open();
    });

    expect(result.current.isOpen).toBe(true);
  });

  it("close sets isOpen to false", () => {
    const { result } = renderHook(() => useDisclosure(true));

    act(() => {
      result.current.close();
    });

    expect(result.current.isOpen).toBe(false);
  });

  it("toggle inverts isOpen state", () => {
    const { result } = renderHook(() => useDisclosure(false));

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(true);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.isOpen).toBe(false);
  });
});
