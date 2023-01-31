import { fireEvent, render, screen } from '@testing-library/react';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'Naruto';

  test('should show the login initially', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText('Cargando...'));
    expect(screen.getByText(category));
  });

  test('should show items when the images are loaded useFetchGifs', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'Saitama',
        url: 'https://localhost:4200/saitama.jpg',
      },
      {
        id: '123',
        title: 'Goku',
        url: 'https://localhost:4200/goku.jpg',
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
