import { ReactNode } from 'react';
import { Text } from './text';

interface Props {
  label: string;
  children: ReactNode;
}

export function SidebarItems({ label, children = true }: Props) {
  return(
    <div className="flex gap-2 items-center p-2 rounded-lg hover:bg-gradient-to-r hover:from-[#ffffff] hover:to-[#cccccc]">
      {children}
      <Text size="medium" className="text-[#164C73] w-[125px] hover:text-[#00DEA3] font-bold">
        {label}
      </Text>
    </div>
  );
}
