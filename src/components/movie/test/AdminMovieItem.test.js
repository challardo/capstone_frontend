import { fireEvent, render, screen } from "@testing-library/react";
import AdminMovieItem from "../AdminMovieItem";

const handleEdit = jest.fn();
const handleDelete = jest.fn();
describe("AdminMovieItem", () => {
  const movie = {
    _id: "id",
    name: "name",
    coverImage: "coverImage",
    synopsis: "synopsis",
    genre: "genre",
    releaseDate: "releaseDate",
  };
  beforeEach(() => {});
  it("should display card image", () => {
    render(
      <AdminMovieItem
        movie={movie}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    const cardImage = screen.getByRole("img");
    expect(cardImage).toBeVisible();
  });

  it("should display movie name", () => {
    render(
      <AdminMovieItem
        movie={movie}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    const movieName = screen.getByText("name");
    expect(movieName).toBeVisible();
  });

  it("should display movie synopsis", () => {
    render(
      <AdminMovieItem
        movie={movie}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    const movieSynopsis = screen.getByText("synopsis");
    expect(movieSynopsis).toBeVisible();
  });

  it("should display movie genre", () => {
    render(
      <AdminMovieItem
        movie={movie}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    const movieGenre = screen.getByText("Genre: genre");
    expect(movieGenre).toBeVisible();
  });

  it("should display movie releaseDate", () => {
    render(
      <AdminMovieItem
        movie={movie}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    const movieReleaseDate = screen.getByText("Release date: releaseDate");
    expect(movieReleaseDate).toBeVisible();
  });

  it("should display edit button", () => {
    render(
      <AdminMovieItem
        movie={movie}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    const editButton = screen.getByRole("button", { name: "edit" });
    expect(editButton).toBeVisible();
  });

  it("should click edit button", () => {
    render(
      <AdminMovieItem
        movie={movie}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    const editButton = screen.getByRole("button", { name: "edit" });
    fireEvent.click(editButton);
    expect(handleEdit).toBeCalled();
  });

  it("should display delete button", () => {
    render(
      <AdminMovieItem
        movie={movie}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    const deleteButton = screen.getByRole("button", { name: "delete" });
    expect(deleteButton).toBeVisible();
  });

  it("should click delete button", () => {
    render(
      <AdminMovieItem
        movie={movie}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    );
    const deleteButton = screen.getByRole("button", { name: "delete" });
    fireEvent.click(deleteButton);
    expect(handleDelete).toBeCalled();
  });
});
