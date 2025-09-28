import { describe, it, vi, expect, beforeEach } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { AuthLoader } from "../auth-loader";

// Mock hooks
vi.mock("@/stores/auth-store", () => ({
  useAuthStore: () => ({
    setAccessToken: vi.fn(),
    setUser: vi.fn(),
  }),
}));

const mockRefetch = vi.fn();
const mockUserRefetch = vi.fn();

vi.mock("@/features/auth/api/refresh-token", () => ({
  useRefreshTokenQuery: () => ({
    refetch: mockRefetch,
    isFetching: false,
  }),
}));

vi.mock("@/features/auth", () => ({
  useUserQuery: () => ({
    refetch: mockUserRefetch,
    isFetching: false,
  }),
}));

describe("AuthLoader", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders loading initially", () => {
    render(
      <AuthLoader>
        <div>Children</div>
      </AuthLoader>
    );
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });

  it("shows children if no token", async () => {
    mockRefetch.mockResolvedValueOnce({ data: { data: { token: null } } });

    render(
      <AuthLoader>
        <div>Children</div>
      </AuthLoader>
    );

    await waitFor(() => {
      expect(screen.getByText("Children")).toBeInTheDocument();
    });
  });

  it("sets token but no user", async () => {
    mockRefetch.mockResolvedValueOnce({ data: { data: { token: "abc123" } } });
    mockUserRefetch.mockResolvedValueOnce({ data: { data: null } });

    render(
      <AuthLoader>
        <div>Children</div>
      </AuthLoader>
    );

    await waitFor(() => {
      expect(screen.getByText("Children")).toBeInTheDocument();
    });
  });

  it("sets token and user", async () => {
    const fakeUser = { id: 1, name: "John" };
    mockRefetch.mockResolvedValueOnce({ data: { data: { token: "abc123" } } });
    mockUserRefetch.mockResolvedValueOnce({ data: { data: fakeUser } });

    const { useAuthStore } = await import("@/stores/auth-store");
    const { setAccessToken, setUser } = useAuthStore();

    render(
      <AuthLoader>
        <div>Children</div>
      </AuthLoader>
    );

    await waitFor(() => {
      expect(screen.getByText("Children")).toBeInTheDocument();
    });

    expect(setAccessToken).toHaveBeenCalledWith("abc123");
    expect(setUser).toHaveBeenCalledWith(fakeUser);
  });
});
