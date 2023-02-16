import { Avatar } from '@mui/material';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
//import { Notifications } from '@mui/icons-material';
//import { SearchOutlined } from '@mui/icons-material';
import { Text } from './index';
import { useContext } from 'react';
import { MenuContext } from '../context/menuContext';

export function HeaderSection() {
  return (
    //colocar <SearchOutlined sx={{ color: 'gray' }} /> no botao pesquisar
    // adicionar <Notifications className="cursor-pointer" sx={{ color: '#fff' }} />
    <div className="h-[14vh]">
      <section>
          <Text size="big" className="text-black font-bold">
            Olá, João
          </Text>
      </section>
      <section className="flex items-center gap-5">
        <div className="flex">
          <input
            type="text"
            className="bg-white p-2 rounded-l-xl text-black outline-none w-[150px] focus:w-[250px] transition-all duration-500"
          />
          <div className="bg-white p-2 rounded-r-xl cursor-pointer">
            
          </div>
        </div>
  
        <div className="flex items-center gap-3">
          <Text size="medium" className="text-white">
            Joao
          </Text>
          <Avatar
            className="cursor-pointer"
            alt="Joao Sharp"
            src="/static/images/avatar/1.jpg"
          />
        </div>
      </section>
    </div>
  );
}
