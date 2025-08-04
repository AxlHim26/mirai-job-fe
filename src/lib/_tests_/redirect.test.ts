/// <reference types="vitest/globals" />
import { describe, it, expect, vi } from "vitest";
import { redirect } from "../redirect";
import { RoleTypes } from "@/hooks";

const DEFAULT_PATH = {
  ROLE_CANDIDATE: "/app/candidate",
  ROLE_RECRUITER: "/app/recruiter",
  ROLE_ADMIN: "/app/admin",
} satisfies Record<RoleTypes, string>;

describe("redirect()", () => {
  const mockNavigate = vi.fn();

  afterEach(() => {
    mockNavigate.mockClear();
  });

  it("should navigate to redirectTo when valid for ROLE_CANDIDATE", () => {
    redirect({
      redirectTo: "/app/candidate/dashboard",
      role: "ROLE_CANDIDATE",
      navigate: mockNavigate,
    });

    expect(mockNavigate).toHaveBeenCalledWith("/app/candidate/dashboard", {
      replace: true,
    });
  });

  it("should navigate to default path when redirectTo is outside scope", () => {
    redirect({
      redirectTo: "app/admin/dashboard",
      role: "ROLE_CANDIDATE",
      navigate: mockNavigate,
    });

    expect(mockNavigate).toHaveBeenCalledWith(DEFAULT_PATH.ROLE_CANDIDATE, {
      replace: true,
    });
  });

  it("should navigate to default path when redirectTo is undefined", () => {
    redirect({
      redirectTo: undefined,
      role: "ROLE_RECRUITER",
      navigate: mockNavigate,
    });

    expect(mockNavigate).toHaveBeenCalledWith(DEFAULT_PATH.ROLE_RECRUITER, {
      replace: true,
    });
  });

  it("should navigate to redirectTo when valid for ROLE_ADMIN", () => {
    redirect({
      redirectTo: "/app/admin/settings",
      role: "ROLE_ADMIN",
      navigate: mockNavigate,
    });

    expect(mockNavigate).toHaveBeenCalledWith("/app/admin/settings", {
      replace: true,
    });
  });
});
