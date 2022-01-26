import React from 'react';
import './styles.css'

export type ImageListItem = {
  imageUrl: string;
  name: string;
  id: number;
  subItems: ImageListItem[]
}

export type Props = {
  items: ImageListItem[];
  handleNav: (id: number) => void
};

const ImageList = ({ items, handleNav }: Props) => {
  return <div className='ImageList'>
    {items.map(item =>
      <div
        onClick={() => handleNav(item.id)}
        key={item.id}
        style={{ backgroundImage: `url(${item.imageUrl})` }}
        className='ImageList_image'
      >
        <p className='ImageList_image_text'>{item.name}</p>
      </div>
    )}
  </div>
};

export default ImageList;
