import styled, { css } from 'styled-components'

export const DetailsWrapper = styled.div`
  position: relative;
  z-index: 2;
  padding-left: 10rem;
  padding-top: 7%;

  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-normal) var(--unnamed-font-size-32) / 40px
    var(--unnamed-font-family-tajawal);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: var(--unnamed-color-f1f1f1);
  text-align: left;
`

export const VideoWrapper = styled.div<{ $loading: boolean }>`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: 0.3s;
    background: ${(props) => (props.$loading ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.0)')};
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const Category = styled.h3`
  font: normal normal bold 24px/42px Tajawal;
  letter-spacing: 4.8px;
  color: #858688;
  text-transform: uppercase;
  opacity: 1;
`

export const Logo = styled.img`
  max-width: 30%;
  margin-bottom: 30px;
`
export const Dates = styled.div`
  display: flex;
  margin-bottom: 15px;

  div {
    margin-right: 30px;
  }
`

export const Description = styled.p`
  letter-spacing: 0px;
  color: #f1f1f1;
  margin-bottom: 20px;
`

export const Button = styled.button<{ variant: 'primary' | 'secondary' }>`
  border-radius: 40px;
  font: var(--unnamed-font-style-normal) normal var(--unnamed-font-weight-bold) var(--unnamed-font-size-32) /
    var(--unnamed-line-spacing-30) var(--unnamed-font-family-tajawal);
  letter-spacing: var(--unnamed-character-spacing--0-32);
  text-align: center;
  border: none;
  outline: none;
  padding: 14px 32px;
  padding-bottom: 5px;
  box-sizing: border-box;
  margin-right: 15px;
  > span {
    margin-top: 5px;
  }

  ${(props) =>
    props.variant === 'primary' &&
    css`
      background: transparent linear-gradient(128deg, #2727f5 0%, #001671 100%) 0% 0% no-repeat padding-box;
      color: white;
    `}

  ${(props) =>
    props.variant === 'secondary' &&
    css`
      background: var(--unnamed-color-f1f1f1) 0% 0% no-repeat padding-box;
      color: #0c0c0c;
    `}
`
