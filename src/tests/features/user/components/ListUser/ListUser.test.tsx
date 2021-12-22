import React from 'react';
import { renderWithReduxStore } from 'src/tests/utils';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import ListUser from 'src/features/user/components/ListUser';
import { screen, waitForElementToBeRemoved } from '@testing-library/react';

const server = setupServer(
  rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496',
            },
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets',
          },
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: {
              lat: '-43.9509',
              lng: '-34.4618',
            },
          },
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
          company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains',
          },
        },
      ]),
    );
  }),
);

describe('List User', () => {
  beforeAll(() => server.listen());
  beforeEach(() => {
    server.resetHandlers();
    renderWithReduxStore(<ListUser />);
  });
  afterAll(() => server.close());

  it('should render correctly', async () => {
    expect(screen.getByLabelText('loading-indicator')).toBeInTheDocument();
    await waitForElementToBeRemoved(screen.getByLabelText('loading-indicator'));
    const items = await screen.findAllByTestId('user-item');
    expect(items.length).toBe(2);
  });
});
