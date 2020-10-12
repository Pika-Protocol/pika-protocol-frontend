import { motion, Variants } from 'framer-motion';
import { merge } from 'lodash';
import React, { HTMLAttributes, useState } from 'react';
import styled from 'styled-components';

const PandoraWrapper = styled.div`
  height: 200px;
  position: relative;
`;
const PandoraImage = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
`;
const PandoraOutside = styled(PandoraImage)`
  cursor: pointer;
`;
const PandoraInside = styled(PandoraImage)``;

export interface PandoraButtonProps {
  outside: string;
  inside: string;
  variants?: Variants;
  onClick?: () => void;
}

type PandoraStatus = 'normal' | 'ready' | 'open';

const defaultPandoraInsideVariants = {
  normal: { y: 0, x: 0, rotate: 0 },
  ready: {
    rotate: [0, -10, 10, 0],
    y: 0,
    transition: { repeat: Infinity, duration: 0.3 },
  },
  open: {
    y: -120,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

export function PandoraButton(
  props: PandoraButtonProps & HTMLAttributes<HTMLDivElement>
) {
  const { inside, outside, onClick, variants, ...others } = props;
  const [status, setStatus] = useState<PandoraStatus>('normal');

  function onOutsideClick() {
    setStatus('open');
    if (typeof onClick === 'function') onClick();
  }

  const variant = merge({}, defaultPandoraInsideVariants, variants);

  return (
    <PandoraWrapper {...others}>
      <PandoraInside>
        <motion.img
          alt="pandora inside"
          src={inside}
          animate={status}
          variants={variant}
        />
      </PandoraInside>
      <PandoraOutside
        onMouseEnter={() => setStatus('ready')}
        onMouseLeave={() => setStatus('normal')}
        onClick={onOutsideClick}
      >
        <img alt="pandora outside" src={outside} />
      </PandoraOutside>
    </PandoraWrapper>
  );
}
