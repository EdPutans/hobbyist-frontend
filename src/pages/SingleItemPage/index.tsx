import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImageList, { ImageListItem } from '../../components/ImageList';
import ItemList from '../../components/ItemList';
import useFetch from '../../hooks/useFetch';

type Item = ImageListItem & {
  subItems?: ImageListItem[]
};

type Props<I> = {
  endpoint: string;
  normaliseItem: (item: I) => Item;
  subItemsTitle: string;
  handleSubItemNav: (id: number) => void;
}

function SingleItemPage<T>({ endpoint, normaliseItem, subItemsTitle, handleSubItemNav }: Props<T>): JSX.Element {
  const { id } = useParams();

  const { item } = useFetch<T>({ endpoint: `${endpoint}/${id}` });

  if (!item) return <p>loading...</p>

  const normalisedItem = normaliseItem(item)

  return <div>
    <header>
      <h1>{normalisedItem.name}</h1>
    </header>
    <img style={{ height: 200 }} src={normalisedItem.imageUrl}></img>
    <h2>{subItemsTitle}</h2>
    <ItemList
      items={normalisedItem.subItems}
      handleNav={id => handleSubItemNav(id)} />
  </div>;
};

export default SingleItemPage;
