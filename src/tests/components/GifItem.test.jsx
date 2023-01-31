import { render, screen } from '@testing-library/react';
import { GifItem } from '../../components/GifItem';

describe('Pruebas en <GifItem />', () => {
  const title = 'Vegeta';
  const url = 'https://vegetal.com/vegeta.jpg';

  test('should match with the snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);

    expect(container).toMatchSnapshot();
  });

  test('must show the image with the correct url and alt', () => {
    render(<GifItem title={title} url={url} />);
    /* expect(screen.getByRole('img').src).toBe(url);*/

    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(alt);
  });

  test('must show the title in the component', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
