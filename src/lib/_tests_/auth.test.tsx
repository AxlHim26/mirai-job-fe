import { describe, it, vi, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ProtectedRoute } from "../auth";

// mock paths
vi.mock("@/config/paths", () => ({
  paths: {
    auth: {
      login: {
        getHref: (from: string) => `/login?redirect=${from}`,
      },
    },
  },
}));

// mock useAuthStore
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let mockUser: any = null;
vi.mock("@/stores/auth-store", () => ({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useAuthStore: (selector?: any) => {
    const state = { user: mockUser };
    return selector ? selector(state) : state;
  },
}));

// mock useLocation
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-router-dom")>();
  return {
    ...actual,
    useLocation: () => ({ pathname: "/dashboard" }),
  };
});

describe("ProtectedRoute", () => {
  beforeEach(() => {
    mockUser = null;
  });

  it("redirects to login if user is null", () => {
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <ProtectedRoute>
          <div>Children</div>
        </ProtectedRoute>
      </MemoryRouter>
    );

    // Navigate render ra một <a href="/login?...">
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/login?redirect=/dashboard");
  });

  it("renders children if user exists", () => {
    mockUser = { id: 1, name: "Alice" };

    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <ProtectedRoute>
          <div>Children</div>
        </ProtectedRoute>
      </MemoryRouter>
    );

    expect(screen.getByText("Children")).toBeInTheDocument();
  });
});
