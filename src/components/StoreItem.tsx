import { Button, Card } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineDelete,
} from 'react-icons/ai';

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgurl: string;
};

export function StoreItem({ id, name, price, imgurl }: StoreItemProps) {
  let quantity = 1;
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgurl}
        height="200px"
        style={{ objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        {quantity === 0 ? (
          <Button className="w-100">Add to Cart</Button>
        ) : (
          <div
            className="d-flex justify-content-center flex-row align-items-center"
            style={{ gap: '.5rem' }}
          >
            <AiOutlinePlusCircle size={20} />
            <div>{quantity} in cart</div>
            <AiOutlineMinusCircle size={20} />
            <div className="d-flex">
              <AiOutlineDelete size={20}/>
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}