import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from './Snowman';



describe('Game loss behavior', function () {
  test('shows loss message', function () {
    const { container } = render(<Snowman words={["apple"]} />);

    const buttons = container.querySelectorAll('button');
    const buttonArea = container.querySelector('#button-area');
    const snowmanImage = container.querySelector('#snowman-image');

    for (let i = 19; i < buttons.length - 1; i++) {
      fireEvent.click(buttons[i]);
    }

    expect(snowmanImage).toBeInTheDocument();
    expect(buttonArea).toContainHTML('You lose. The correct word is: apple');
  });
});