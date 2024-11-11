import { formatCurrency } from '../../utils/helpers';
import DeleteButton from '../../ui/DeleteButton';
import UpdatingCart from './UpdatingCart';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdatingCart id={pizzaId} />
        <DeleteButton id={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;