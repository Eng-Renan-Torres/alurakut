import React, { useState } from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/MainGrid/box'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AluraKutCommons'

function ProfileSideBar(props) {
  return (
    <Box as='aside'>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />
      <p>
        <a className="boxLink" href={`https://github.com/${props.githubUser}`}>
          @{props.githubUser}
        </a>
      </p>
      <hr />
      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const user = 'Eng-Renan-Torres';
  const [comunidades, setComunidades] = useState([
    { id: 84528526987419632, title: 'Catioro', image: 'Catioro' }]);
  const favoritos = ['KavinKannan-1702', 'wutv', 'HabibullaSonet'];

  return (
    <>
      <AlurakutMenu>

      </AlurakutMenu>
      <MainGrid>
        <div className='profileArea' style={{ gridArea: 'profileArea' }}>
          <ProfileSideBar githubUser={user} />
        </div>
        <div className='WelcomeArea' style={{ gridArea: 'WelcomeArea' }}>
          <Box>
            <h1 className="title">Bem vindo(a)</h1>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className='subTitle'>O que você deseja fazer?</h2>
            <form onSubmit={(event) => {
              event.preventDefault();
              const dadosForm = new FormData(event.target);
              const novaComunidade = [{
                id: new Date().toISOString,
                title: dadosForm.get('title'),
                image: dadosForm.get('image')
              }]
              setComunidades([...comunidades, novaComunidade])
            }
            }>
              <div>
                <input
                  placeholder='Qual vai ser o nome da sua comunidade?'
                  name='title'
                  aria-label='Qual vai ser o nome da sua comunidade?'
                  type='text'
                />
              </div>
              <div>
                <input
                  placeholder='Insira uma imagem para a comunidade'
                  name='image'
                  aria-label='Insira uma imagem para a comunidade'
                  type='text'
                />
              </div>
              <button>
                Criar Comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({favoritos.length})
            </h2>
            <ul>
              {favoritos.map((item) => {
                return (
                  <li key={item}>
                    <a href={`/users/${item}`}>
                      <img src={`https://github.com/${item}.png`} />
                      <span>{item}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((item) => {
                return (
                  <li>
                    <a href={`/users/${item.title}`} key={item.id}>
                      <img src={`https://github.com/${item.image}.png`} />
                      <span>{item.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

        </div>
      </MainGrid>
    </>
  )
}
