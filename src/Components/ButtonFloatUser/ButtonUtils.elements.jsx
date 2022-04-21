import styled from 'styled-components'

export const WrapMenu = styled.div`
  background: rgb(131, 58, 180);
  background: linear-gradient(90deg, #c084fc 0%, #ec4899 50%, #ef4444 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 10;
  width: 3rem;
  height: auto;
  border-radius: 10rem;
  transition: all 0.3s ease-in-out;
  button {
    svg {
      width: 2rem;
      height: 2rem;
    }
    background: transparent;
    border: none;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-radius: 10rem;
    transition: all 0.3s ease-in-out;
  }
  @media screen and (max-width: 1000px) {
    width: 2.5rem;
    height: auto;
    button {
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
`
export const ButtonMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1%;
  margin-top: 1rem;
  margin-right: 1rem;
  aling-items: center;
  height: 100%;
  width: auto;
  justify-content: flex-end;
`
