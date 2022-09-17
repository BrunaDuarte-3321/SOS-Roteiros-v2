import styled from 'styled-components'
import bannerBackground from '../../assets/baneer.svg'

/* type SizeBanner = {
  size: 'l' | 'm' | 's'
} */
export const BannerContainer = styled.div`
  width: 100%;
  height: 40rem;
  background: url(${bannerBackground});
  background-size: cover;
`

export const BannerTitleContainer = styled.div`
  width: 62rem;
  height: 13.5rem;
  border: solid 1px red;

  /* font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 90px;
  line-height: 104px; */

  display: flex;
`
