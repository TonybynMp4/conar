import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPositioner, DropdownMenuTrigger } from '@conar/ui/components/dropdown-menu'
import { useTheme } from '@conar/ui/theme-observer'
import { RiComputerLine, RiMoonLine, RiSunLine } from '@remixicon/react'

export function ThemeToggle({ children }: { children: React.ReactElement<Record<string, unknown>> }) {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={
        children
      }
      />
      <DropdownMenuPositioner side="right" className="z-99">
        <DropdownMenuContent className="min-w-32">
          <DropdownMenuItem onClick={() => setTheme('light')}>
            <RiSunLine aria-hidden="true" />
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            <RiMoonLine aria-hidden="true" />
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            <RiComputerLine aria-hidden="true" />
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenuPositioner>
    </DropdownMenu>
  )
}
