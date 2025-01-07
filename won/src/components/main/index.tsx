import * as S from './styles'

const Main = ({
  title = 'REact Avançado',
  description = 'typesScript, ReactJs'
}) => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Imagem de um àtomo e react" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration src="/img/hero-illustration.svg" alt="Um desenvolvedor" />
    </S.Wrapper>
  )
}

export default Main
