import type { ComponentProps } from 'react'
import { Tooltip, TooltipContent, TooltipPositioner, TooltipProvider, TooltipTrigger } from '@conar/ui/components/tooltip'
import { cn } from '@conar/ui/lib/utils'
import { RiInformationLine } from '@remixicon/react'

export function InfoButton({ children, className, ...props }: ComponentProps<'button'>) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger render={(
          <button type="button" className={cn('p-1 rounded-full hover:bg-accent/50', className)} {...props}>
            <RiInformationLine className="size-3 text-muted-foreground" />
          </button>
        )}
        >
        </TooltipTrigger>
        <TooltipPositioner>
          <TooltipContent>
            {children}
          </TooltipContent>
        </TooltipPositioner>
      </Tooltip>
    </TooltipProvider>
  )
}
