import { useDispatch, useSelector } from 'react-redux';
import StatusFilter from '../components/statusFilter';
import GetPosts from '../components/getPosts';
import UserTodo from '../components/userTodo';

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
