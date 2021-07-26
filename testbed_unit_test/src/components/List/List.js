import { useSelector, useDispatch } from 'react-redux';

import { itemAction } from '../../store/actions';

import './List.css';

function List() {
  // react-redux
  const item = useSelector((state) => state);

  // const dispatch = useDispatch();

  return (
    <div>
      <ul className="animals">
        {item.items.map((element) => {
          return <li key={element}>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default List;
