import Head from 'next/head'
import Image from 'next/image'
import utilStyles from '../css/utils.module.css'
import Link from 'next/link'

export function TestProps(props){
  return(
    <>
    <p>TestProps begin</p>
    <p>{props.phrase.greeting}</p>

    </>
  )
}


export function Header({ children, home }) {
  function Switch(props) {
    console.log(props.name);
    let now = new Date();
    let currentMin = now.getMinutes();
    console.log("CURRENT MIN: ", currentMin);

    let randInt = Math.round(Math.random() * 10);
    console.log(randInt);
    console.log((randInt % 2 == 0));

    let result;
    let even = false;

    if (randInt % 2 == 0) {
      result = <p>This is the option for true for {randInt}</p>;
      even = true;
    } else {
      result = <p>This is the option for false for {randInt}</p>;
    }
    return result;
  }

  return (
    <Switch />
  );
}

export default TestProps;
