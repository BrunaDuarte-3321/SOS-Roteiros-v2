import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 8.25rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.color.white};

  img {
    width: 11.19rem;
    height: 4.5rem;
  }
`

export const NavLinkContainer = styled.nav`
  display: flex;
  gap: 4.375rem;

  a {
    text-decoration: none;
    font-weight: 400;
    color: ${({ theme }) => theme.color['primary-green-dark']};
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes['text-regular-large']};
    line-height: 22px;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.color['primary-green-light']};
    }
  }
  a + a {
    margin-right: 7.5rem;
  }
`
