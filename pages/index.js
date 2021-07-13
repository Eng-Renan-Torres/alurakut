import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/MainGrid/box'
import { AlurakutMenu } from '../src/lib/AluraKutCommons'

function ProfileSideBar(props) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}

export default function Home() {
  const user = 'Eng-Renan-Torres';
  const favoritos = ['KavinKannan-1702'];

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
            <h1 className="Title">Bem vindo(a)</h1>
          </Box>
        </div>
        <div className='profileRelationsArea' style={{ gridArea: 'profileRelationsArea' }}>
          <Box>
            <h2 className="smallTitle">
              Pessoas da comunidade ({favoritos.length})
            </h2>
            <ul>
              {favoritos.map(item => (<li>{item}</li>))}
            </ul>
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
