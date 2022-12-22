import { render, screen } from "@testing-library/react";
import AdminMovieItem from "../AdminMovieItem";
import AdminMovieList from "../AdminMovieList";
jest.mock("../AdminMovieItem");

const handleSubmit = jest.fn();
const handleDelete = jest.fn();
describe("AdminMovieList.test", () => {
  const movies = [
    {
      name: "test",
    },
  ];

  beforeEach(() => {
    AdminMovieItem.mockImplementation(() => <p>movie item</p>);
  });

  it("should display movieItem", () => {
    render(
      <AdminMovieList
        movies={movies}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
      />
    );
    const movieItem = screen.getByText("movie item");

    expect(movieItem).toBeVisible();
  });

  it("should display add movie button", () => {
    render(
      <AdminMovieList
        movies={movies}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
      />
    );
    const addMovieButton = screen.getByRole("button", {
      name: "Add a new movie",
    });

    expect(addMovieButton).toBeVisible();
  });
});
