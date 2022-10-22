import Words from '../../models/Words'
import { Card, DTitle, InfoLink } from './styles'

type Props = {
 word: Words
}

 const WordCard = ({ word }: Props) => {

  return (
    <InfoLink to='/info'>
      <Card>
        <DTitle>{word.name}</DTitle>

      </Card>
    </InfoLink>
  )
}

export default  WordCard
