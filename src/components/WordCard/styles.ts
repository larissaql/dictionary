import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Card = styled.div`
  background-color: #d49692;
  padding: 10px 15px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  width: 60%;
  margin: 0 auto 20px auto;
`


export const DTitle = styled.span`
  font-family: 'bold';
`

export const InfoLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: black;
`
