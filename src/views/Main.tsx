import React from 'react';
import styled from 'styled-components';
import { UseWalletProvider } from 'use-wallet';
import { PandoraButton } from '../components/PandoraButton';
import BuyButton from './assets/button-buy.png';
import FollowButton from './assets/button-follow.png';
import JoinButton from './assets/button-join.png';
import Fushigidane from './assets/pokemon-fushigidane.png';
import Pikachu from './assets/pokemon-pikachu.png';
import Zenigagame from './assets/pokemon-zenigagame.png';
import DontBuy from './assets/title.png';
import './Main.css';

const Title = styled.img`
  display: inline-block;
  max-width: 100%;
`;

function Welcome() {
  return (
    <div className="welcome">
      <Title src={DontBuy} alt="dont-buy-pika" />
    </div>
  );
}

function Operation() {
  function todoOnCLick() {
    console.log('coming soon');
  }

  return (
    <div className="pure-g">
      <PandoraButton
        className="pure-u-1 pure-u-md-1-3"
        inside={Fushigidane}
        outside={FollowButton}
        onClick={todoOnCLick}
        variants={{ open: { rotate: [0, -45, 0] } }}
      />
      <PandoraButton
        className="pure-u-1 pure-u-md-1-3"
        inside={Pikachu}
        outside={BuyButton}
        onClick={todoOnCLick}
        variants={{ open: { rotate: 90 } }}
      />
      <PandoraButton
        className="pure-u-1 pure-u-md-1-3"
        inside={Zenigagame}
        outside={JoinButton}
        onClick={todoOnCLick}
        variants={{ open: { rotate: 80} }}
      />
    </div>
  );
}

export function Main() {
  return (
    <>
      <Welcome />
      <UseWalletProvider chainId={1}>
        <Operation />
      </UseWalletProvider>
    </>
  );
}
