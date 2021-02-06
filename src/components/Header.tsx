import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <HeaderBox>
            <Logo
                href="https://www.spreadnature.co.kr"
                target="_blank"
                rel="noopener noreferrer"
                >
                Spread Nature
            </Logo>
            <Nav>
                <NavItem>
                    스프레드네이처 스토리
                </NavItem>
                <NavItem>
                    제품 소개
                </NavItem>
                <NavItem>
                    FAQ
                </NavItem>
                <NavItem>
                    제휴/문의
                </NavItem>
            </Nav>
      </HeaderBox>
    );
};


const HeaderBox = styled.header`
  display: flex;
  padding: 0px 32px;
  align-items: center;
  height: 60px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.5);
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  box-shadow: 0px 4px 10px rgba(0,0,0,0.12);
  position: fixed;
  z-index: 1000;
  width: 100%;
`

const Logo = styled.a`
  font-family: 'Caveat', cursive;
  color: darkgreen;
  font-weight: 200;
  font-size: 24px;
  text-decoration: none;
`

const Nav = styled.div`
  flex: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 600px;
  margin: 0 200px;
`

const NavItem = styled.div`
`

export default Header;