import { useVisibilidadStore } from '../store/visibilidadStore'

import { Button } from '@/components/ui/button'

import { Layers3Icon, XIcon } from 'lucide-react'

const ButtonVisibilidad = () => {
    const { visibilidad, toggleVisibilidad } = useVisibilidadStore()

    return (
        <div className="relative">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                    <Button onClick={() => toggleVisibilidad()} variant='ghost' size='icon'>
                        {visibilidad ? <XIcon /> : <Layers3Icon />}
                    </Button>
                </span>
            </div>
        </div>
    )
}

export default ButtonVisibilidad
