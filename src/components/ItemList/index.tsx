import './styles.css'

type Props = {
  items: Array<{
    imageUrl: string;
    name: string;
    id: number;
  }>;
  handleNav: (id: number) => void
};

const ItemList = (props: Props) => {
  return <div className='ItemList'>
    {props.items.map(item =>
      <div className='ItemList_item' onClick={() => props.handleNav(item.id)}>
        <img src={item.imageUrl} alt={item.name} />
        <p>{item.name}</p>
      </div>
    )}
  </div>
};

export default ItemList;
