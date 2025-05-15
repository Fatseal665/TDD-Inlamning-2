import CustomButton, { ButtonState } from "./CustomButton"
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom"

describe("Custom Button Component States", () => {
    
    test("Check if Button Component Starts with Idle", () => {
        const buttonText: string = "signup"
        const {getByText} = render(<CustomButton buttonText={buttonText} />)
        const customButtonComponent = getByText(buttonText)

        expect(customButtonComponent).toHaveClass(ButtonState.idle) 
    })

    test("Check if Button Component on Hover State Changes", () => {
        const buttonText: string = "signup"
        const {getByText} = render(<CustomButton buttonText={buttonText} />)
        const customButtonComponent = getByText(buttonText)

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.mouseEnter(customButtonComponent)
        expect(customButtonComponent).toHaveClass(ButtonState.hover)

    })

    test("Custom Button Component on click state change", () => {
        const buttonText: string = "signup"
        const {getByText} = render(<CustomButton buttonText={buttonText} />)
        const customButtonComponent = getByText(buttonText)

        expect(customButtonComponent).toHaveClass(ButtonState.idle)
        fireEvent.click(customButtonComponent)
        expect(customButtonComponent).toHaveClass(ButtonState.clicked)
    })

})



