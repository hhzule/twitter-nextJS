import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { BiArrowBack } from 'react-icons/bi';

interface HeaderProps {
    label: string;
    showBackArrow?: boolean;
}

const Header: React.FC<HeaderProps> = ({label, showBackArrow}) => {
    const router =useRouter();

    const handleBack = useCallback(()=>{
        router.back();
    },[router])
  return (
    <div className="border-b-[1px] border-neutral-800 p-5">
        <div className="flex flex-row items-center gap-2">
            {
                showBackArrow && (
                    <BiArrowBack 
                    onClick={handleBack}
                    size={20}
                    color="white"
                    className='
                    cursor-pointer
                    hover:opacity-70
                    transition
                    '
                    />
                )
            }
            <h3 className='text-white text-xl font-semibold'>{label}</h3>
        </div>
    </div>
  )
}

export default Header