import { render, screen } from "@testing-library/react";
import AdminPage from "../AdminPage";
import AdminMovieList from "../../movie/AdminMovieList";

jest.mock("../../movie/AdminMovieList");

describe("AdminPage", () => {
  beforeEach(() => {
    AdminMovieList.mockImplementation(() => <p>movie list</p>);
  });

  it("should display the title", () => {
    render(<AdminPage />);
    const title = screen.getByText("Admin page");
    expect(title).toBeVisible();
  });

  it("should display the movie list", () => {
    render(<AdminPage />);
    const movieList = screen.getByText("movie list");
    expect(movieList).toBeVisible();
  });
});
