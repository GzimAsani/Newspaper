import { useSelector } from 'react-redux';
import StatusFilter from './statusFilter';
import GetPosts from '../containers/getPosts';
import UserTodo from '../containers/userTodo';

const ShowPage = () => {
  const filter = useSelector((state) => state.filter);

  const handleChange = () => {
    if (filter.current === 'Posts' || filter.current === 'Select') {
      return <GetPosts />;
    } return <UserTodo />;
  };

  return (
    <StatusFilter />,
    handleChange()

  );
};

export default ShowPage;
