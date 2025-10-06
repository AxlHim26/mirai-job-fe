import { describe, it, vi, expect, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { ROLES } from "@/consts";
import { useAuthorization } from "../use-authorization";

// Mock useAuthStore
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let mockUser: any = null;
vi.mock("@/stores/auth-store", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useAuthStore: (selector: any) => selector({ user: mockUser }),
}));

describe("useAuthorization", () => {
  beforeEach(() => {
    mockUser = null;
  });

  it("throws error if user is null", () => {
    mockUser = null;

    const { result } = renderHook(() => useAuthorization());

    expect(result.current).toEqual(Error("User does not exist!"));
  });

  it("returns role and allows access when role is in allowedRoles", () => {
    mockUser = { role: { name: "ADMIN" } };

    const { result } = renderHook(() => useAuthorization());

    expect(result.current.role).toEqual({ name: "ADMIN" });

    const canAccess = result.current.checkAccess({
      allowedRoles: [ROLES.ROLE_ADMIN],
    });
    expect(canAccess).toBe(true);
  });

  it("denies access when role is not in allowedRoles", () => {
    mockUser = { role: { name: "USER" } };

    const { result } = renderHook(() => useAuthorization());

    const canAccess = result.current.checkAccess({
      allowedRoles: [ROLES.ROLE_ADMIN],
    });
    expect(canAccess).toBe(false);
  });

  it("works with multiple allowedRoles", () => {
    mockUser = { role: { name: ROLES.ROLE_CANDIDATE } };

    const { result } = renderHook(() => useAuthorization());

    const canAccess = result.current.checkAccess({
      allowedRoles: [ROLES.ROLE_ADMIN, ROLES.ROLE_CANDIDATE],
    });
    expect(canAccess).toBe(true);
  });
});
