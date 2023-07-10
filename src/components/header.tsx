'use client';

import { Saira_Stencil_One } from 'next/font/google';
import { styled } from 'styled-components';

import { CartButton } from './cart-button';
import { PrimaryInputWSearch } from './primary-input';

const sairaStencil = Saira_Stencil_One({
  weight: ['400'],
  subsets: ['latin'],
});

const TagHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 160px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
  }
`;

const Logo = styled.a`
  color: var(--logo-color);
  font-weight: 400;
  font-size: 40px;
  line-height: 150%;
`;

export function Header() {
  return (
    <TagHeader>
      <Logo className={sairaStencil.className}>Salt</Logo>
      <div>
        <PrimaryInputWSearch placeholder="Procurando por algo específico?" />
        <CartButton />
      </div>
    </TagHeader>
  );
}
