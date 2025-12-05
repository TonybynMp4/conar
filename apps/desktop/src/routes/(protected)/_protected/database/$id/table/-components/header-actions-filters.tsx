import { Button } from '@conar/ui/components/button'
import { Popover, PopoverContent, PopoverPositioner, PopoverTrigger } from '@conar/ui/components/popover'
import { Tooltip, TooltipContent, TooltipPositioner, TooltipProvider, TooltipTrigger } from '@conar/ui/components/tooltip'
import { RiFilterLine } from '@remixicon/react'
import { useState } from 'react'
import { FilterForm } from '~/components/table'
import { usePageStoreContext } from '../-store'

export function HeaderActionsFilters() {
  const [isFiltersOpened, setIsFiltersOpened] = useState(false)
  const store = usePageStoreContext()

  return (
    <Popover open={isFiltersOpened} onOpenChange={setIsFiltersOpened}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger render={(
            <PopoverTrigger render={(
              <Button size="icon" variant="outline">
                <RiFilterLine />
              </Button>
            )}
            >
            </PopoverTrigger>
          )}
          >
          </TooltipTrigger>
          <TooltipPositioner side="top">
            <TooltipContent>
              Add new filter
            </TooltipContent>
          </TooltipPositioner>
        </Tooltip>
      </TooltipProvider>
      <PopoverPositioner side="bottom" align="end">
        <PopoverContent className="p-0 w-2xs">
          <FilterForm
            onAdd={(filter) => {
              setIsFiltersOpened(false)
              store.setState(state => ({
                ...state,
                filters: [...state.filters, filter],
              } satisfies typeof state))
            }}
          />
        </PopoverContent>
      </PopoverPositioner>
    </Popover>
  )
}
