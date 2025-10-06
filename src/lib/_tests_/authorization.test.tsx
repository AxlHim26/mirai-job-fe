import { describe, it, vi, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { Authorization } from "../authorization";
import { ROLES } from "@/consts";

// mock useAuthorization
const mockCheckAccess = vi.fn();
vi.mock("@/hooks", () => ({
  useAuthorization: () => ({
    checkAccess: mockCheckAccess,
  }),
}));

describe("Authorization", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders children when checkAccess returns true", () => {
    mockCheckAccess.mockReturnValue(true);

    render(
      <Authorization allowedRoles={[ROLES.ROLE_ADMIN]}>
        <div>Secret Content</div>
      </Authorization>
    );

    expect(screen.getByText("Secret Content")).toBeInTheDocument();
  });

  it("renders forbiddenFallback when checkAccess returns false", () => {
    mockCheckAccess.mockReturnValue(false);

    render(
      <Authorization
        allowedRoles={[ROLES.ROLE_ADMIN]}
        forbiddenFallback={<div>No Access</div>}
      >
        <div>Secret Content</div>
      </Authorization>
    );

    expect(screen.getByText("No Access")).toBeInTheDocument();
    expect(screen.queryByText("Secret Content")).not.toBeInTheDocument();
  });

  it("renders null when checkAccess returns false and no fallback provided", () => {
    mockCheckAccess.mockReturnValue(false);

    const { container } = render(
      <Authorization allowedRoles={[ROLES.ROLE_ADMIN]}>
        <div>Secret Content</div>
      </Authorization>
    );

    expect(container).toBeEmptyDOMElement();
  });
});
