import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import {
  decreaseItemQuantity,
  getCurQuantityById,
  increaseItemQuantity,
} from './cartSlice';

function UpdatingCart({ id }) {
  const dispatch = useDispatch();
  const currQuantity = useSelector(getCurQuantityById(id));

  return (
    <div className="flex items-center gap-1 md:gap-3">
      <Button type="round" onClick={() => dispatch(decreaseItemQuantity(id))}>
        -
      </Button>

      <span className="text-sm font-medium">{currQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseItemQuantity(id))}>
        +
      </Button>
    </div>
  );
}

export default UpdatingCart;
