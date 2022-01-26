import React, { useEffect } from 'react';
import { NavigateFunction } from 'react-router-dom';
import ImageList, { ImageListItem } from '../../components/ImageList';
import useFetch from '../../hooks/useFetch';

type Props<I> = {
  title: string;
  endpoint: string;
  normaliseItems?: (item: I | null) => ImageListItem[];
  navigate: NavigateFunction;
};

function Items<T>({ title, endpoint, normaliseItems, navigate }: Props<T>) {
  const handleNav = (id: number) => navigate(`/${endpoint}/${id}`);

  const { item } = useFetch<T>({ endpoint });

  const items = React.useMemo(() => {
    if (!item) return [];
    if (!normaliseItems) return [];

    return normaliseItems(item);
  }, [item, normaliseItems]);


  return <div>
    <header>
      <h1>{title}</h1>
    </header>
    <div>
      <ImageList items={items} handleNav={handleNav} />
    </div>
  </div>;
};

export default Items;
