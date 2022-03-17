import { useContext } from 'react';
import { ConcertContext } from '../App';

export default function Start() {
  const concert = useContext(ConcertContext);
  // console.log(concert);
  return <div></div>;
}
