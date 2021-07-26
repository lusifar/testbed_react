import { useSelector, useDispatch } from 'react-redux';

import { itemAction } from '../../store/actions';

import './List.css';

function List() {
  // react-redux
  const item = useSelector((state) => state.item);
  const dispatch = useDispatch();

  return (
    <div>
      <ul className="animals">
        <li>Cat</li>
        <li>Whale</li>
        <li>Lion</li>
        <li>Elephant</li>
        <li>Rhino</li>
      </ul>
    </div>
  );
}

export default List;
