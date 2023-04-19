import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Snowman from './Snowman';



describe('Game loss behavior', function() {
  test('does not show button area after losing', function() {
    const { container } = render(<Snowman />);

    const buttons = document.querySelectorAll('button');
    const buttonArea = document.querySelector('#button-area');
    const snowmanImage = document.querySelector('#snowman-image');

    for (let i = 19; i < buttons.length - 1; i++) {
      fireEvent.click(buttons[i]);
    }

    expect(snowmanImage).toBeInTheDocument();
    expect(buttonArea).toContainHTML('You lose. The correct word is: apple');
  });
});