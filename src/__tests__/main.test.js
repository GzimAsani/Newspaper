import { BrowserRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';
import Main from '../components/main';

test('renders correctly', () => {
  const Placeholder = () => (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
  const tree = create(<Placeholder />).toJSON();
  expect(tree).toMatchSnapshot();
});
