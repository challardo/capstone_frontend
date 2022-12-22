import { render, screen } from "@testing-library/react";
import EditMovieModal from "../EditMovieModal";

const close = jest.fn();
const submit = jest.fn();

jest.mock("../../form/MovieForm");

describe("EditMovieModal", () => {
  it("should display dialogue title", () => {
    render(<EditMovieModal open={true} close={close} submit={submit} />);

    const title = screen.getByText("Editing this movie");

    expect(title).toBeVisible();
  });

  it("should display Clear form button", () => {
    render(<EditMovieModal open={true} close={close} submit={submit} />);

    const cancelButton = screen.getByRole("button", { name: "Cancel" });

    expect(cancelButton).toBeVisible();
  });
});
