import { useContext } from 'react';
import { SidebarItems } from './sidebarItems';
import { Text } from './text';

import {
  WidgetsOutlined,
} from '@mui/icons-material';
import { MenuContext } from '../context/menuContext';

export function Sidebar() {
  return (
    //inserir imagem logo
    <div className={`justify-center items-center 'w-[15vw]' : 'w-[5vw]' bg-white`}>
        
        <div className="flex flex-col h-[86vh] justify-between p-2 items-center">
          <div className="flex flex-col items-center">
           <SidebarItems label="Página Inicial">
              <WidgetsOutlined sx={{ color: '#DDDDDD', fontSize: 80 }}/>
            </SidebarItems>

            <SidebarItems label="Projetos">
            </SidebarItems>

            <SidebarItems label="Municípios">
            </SidebarItems>

            <SidebarItems label="Macrotemas">
            </SidebarItems>

            <SidebarItems label="Temas">
            </SidebarItems>

            <SidebarItems label="Painéis">
            </SidebarItems>

            <SidebarItems label="Usuários">
            </SidebarItems>
          </div>
        </div>
    </div>
  );
}
