import { useDispatch } from 'react-redux';
import Button from './Button';
import { deleteItem } from '../features/cart/cartSlice';

function DeleteButton({ id }) {
  const dispatch = useDispatch();

  function deleteHandler() {
    console.log(id);

    dispatch(deleteItem(id));
  }
  return (
    <Button type="small" onClick={deleteHandler}>
      Delete
    </Button>
  );
}

export default DeleteButton;
