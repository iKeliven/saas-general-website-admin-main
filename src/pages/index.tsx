import {
  Heading,
  Text,
  Button,
  HeaderSection,
  Sidebar,
  FooterSection
} from '../components';

export default function Home() {
  return (
    <div className="flex bg-white select-none">
      <Sidebar />
      <div>
        <HeaderSection />
        <div className='flex flex-col px-0 gap-5 w-[100vw]'>
          <section  className="flex flex-col gap-5">
            <Text size="medium" className="text-[#164C73]">
              Painéis
            </Text>
            <Heading size="large" className="text-[#164C73]">
              247
            </Heading>
          </section>
          <section  className="flex flex-col gap-5">
            <Text size="medium" className="text-[#164C73]">
              Municípios
            </Text>
            <Heading size="large" className="text-[#164C73]">
              29
            </Heading>
          </section>
          <section  className="flex flex-col gap-5">
            <Text size="medium" className="text-[#164C73]">
              Usuários
            </Text>
            <Heading size="large" className="text-[#164C73]">
              116
            </Heading>
          </section>
          <section  className="flex flex-col gap-5">
            <Text size="medium" className="text-[#164C73]">
              Projetos
            </Text>
            <Heading size="large" className="text-[#164C73]">
              5
            </Heading>
          </section>
        </div>
        <div className="flex flex-col px-5 pt-10 pb-2 gap-6 w-[85vw]">
          <section className="flex flex-col gap-5">
            <Heading size="medium" className="text-[#164C73]">
              Crescimento de dados
            </Heading>
          </section>
          <section className="flex flex-col gap-5">
            <div className="flex flex-col">
              <Heading size="medium" className="text-[#164C73]">
                Criar um painel
              </Heading>
            </div>
          </section>
        </div>
        <div className="flex flex-col px-5 pt-10 pb-2 gap-6 w-[85vw]">
        <section className="flex flex-col gap-5">
            <Heading size="medium" className="text-[#164C73]">
              Atividades Recentes
            </Heading>
            <Button size="medium" className="text-white bg-[#164C73]">
                1- Cadastrar Município
            </Button>
            <Button size="medium" className="text-white bg-[#164C73]">
                1- Cadastrar Macrotema
            </Button>
            <Button size="medium" className="text-white bg-[#164C73]">
                1- Cadastrar Tema
            </Button>
            <Button size="medium" className="text-white bg-[#164C73]">
                1- Cadastrar Painel
            </Button>
          </section>
          <section className="flex flex-col gap-5">
            <div className="flex flex-col">
              <Heading size="medium" className="text-[#164C73]">
                Equipe
              </Heading>
            </div>
          </section>
          <section>
            <FooterSection />
          </section>
        </div>
      </div>
    </div>
  );
}
