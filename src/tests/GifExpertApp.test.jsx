import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpert } from '../GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  const setup = () => {
    render(<GifExpert />);
    return {
      input: screen.getByRole('textbox'),
      form: screen.getByRole('form', { name: 'form' }),
    };
  };

  test('should match the snapshot', () => {
    const { container } = render(<GifExpert />);
    expect(container).toMatchSnapshot();
  });

  test('Should have GifExpertApp in h1', () => {
    setup();
    expect(screen.getByRole('heading', { level: 1 }).innerHTML).toBe(
      'GifExpertApp'
    );
  });

  test("Should add category if it's not repeated", () => {
    const { input, form } = setup();
    fireEvent.change(input, { target: { value: 'Saitama' } });
    fireEvent.submit(form);
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(2);
  });
});
