import { render, screen } from "@testing-library/react";
import AddMovieModal from "../AddMovieModal";

const close = jest.fn();
const submit = jest.fn();

describe("AddMovieModal", () => {
  it("should display dialogue title", () => {
    render(<AddMovieModal open={true} close={close} submit={submit} />);

    const title = screen.getByText("Add a new movie");

    expect(title).toBeVisible();
  });

  it("should display Clear form button", () => {
    render(<AddMovieModal open={true} close={close} submit={submit} />);

    const clearButton = screen.getByRole("button", { name: "Clear form" });

    expect(clearButton).toBeVisible();
  });

  it("should display Add product button", () => {
    render(<AddMovieModal open={true} close={close} submit={submit} />);

    const addProductButton = screen.getByRole("button", {
      name: "Add product",
    });

    expect(addProductButton).toBeVisible();
  });
});
