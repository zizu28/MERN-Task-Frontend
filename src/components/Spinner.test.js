import {render, screen} from "@testing-library/react";
import Spinner from "./Spinner";

describe("Spinner", () => {
    it("should render correctly", () => {
        render(<Spinner />)
        expect(screen.getByTestId("spin-container")).toBeInTheDocument();
        expect(screen.getByTestId("inner-container")).toBeInTheDocument();
    })
})