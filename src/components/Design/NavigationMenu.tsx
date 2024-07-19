import * as React from "react"

import { cn } from "../../lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xs">Races</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="https://www.formula1.com/en/racing/2024/hungary"
                  >
                    <img 
                        src="https://www.formula1.com/content/dam/fom-website/2018-redesign-assets/Circuit%20maps%2016x9/Hungary_Circuit.png" 
                        alt="Hungaroring Circuit"
                        className="w-full h-auto object-cover rounded-md"
                    />
                    {/* <Icons.logo className="h-6 w-6" /> */}
                    <div className="mb-2 mt-4 text-md font-medium">
                        Hungaroring
                    </div>
                    <p className="text-xs leading-tight text-muted-foreground">
                        Beautifully designed the next round of the championship is here.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Schedule">
                Follow the schedule for 2024 season
              </ListItem>
              <ListItem href="/docs/installation" title="2025">
                Look ahead to the 2025 season calendar
              </ListItem>
              <ListItem href="https://linktr.ee/F1raceprogramme" target="_blank" title="Race programmers">
                Get with the programme
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xs">Standings</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xs">Drivers</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-4 grid-cols-3">
                <ListItem href="/docs" className="flex items-center border-l-2 border-blue-600 h-full" title="Sergio Perez"></ListItem>
                <ListItem href="/docs" className="flex items-center border-l-2 border-blue-600 h-full" title="Max Verstappen"></ListItem>
                <ListItem href="/docs" className="flex items-center border-l-2 border-red-600 h-full" title="Nico Hülkenberg"></ListItem>
                <ListItem href="/docs" className="flex items-center border-l-2 border-red-600 h-full" title="Kevin Magnussen"></ListItem>

                <ListItem href="/docs" className="flex items-center border-l-2 border-green-600 h-full" title="Lewis Hamilton"></ListItem>
                <ListItem href="/docs" className="flex items-center border-l-2 border-green-600 h-full" title="George Russell"></ListItem>
                <ListItem href="/docs" className="flex items-center border-l-2 border-orange-600 h-full" title="Lando Norris"></ListItem>
                <ListItem href="/docs" className="flex items-center border-l-2 border-orange-600 h-full" title="Oscar Piastri"></ListItem>

                <ListItem href="/docs" className="flex items-center border-l-2 border-gray-400 h-full" title="Daniel Ricciardo"></ListItem>
                <ListItem href="/docs" className="flex items-center border-l-2 border-gray-400 h-full" title="Yuki Tsunoda"></ListItem>
                <ListItem href="/docs" className="flex items-center border-l-2 border-sky-600 h-full" title="Esteban Ocon"></ListItem>
                <ListItem href="/docs" className="flex items-center border-l-2 border-sky-600 h-full" title="Pierre Gasly"></ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="/docs">
            <NavigationMenuLink className="text-xs">
              Teams
            </NavigationMenuLink>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
