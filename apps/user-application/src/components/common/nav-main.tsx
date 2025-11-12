import {
  IconCirclePlusFilled,
  IconDashboard,
  IconLink,
  IconReport,
} from "@tabler/icons-react";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useNavigate, useLocation } from "@tanstack/react-router";

export function NavMain() {
  const nav = useNavigate();
  const location = useLocation();

  const items = [
    {
      title: "Dashboard",
      path: "/app",
      icon: IconDashboard,
    },
    {
      title: "Links",
      path: "/app/links",
      icon: IconLink,
    },
    {
      title: "Evaluations",
      path: "/app/evaluations",
      icon: IconReport,
    },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              onClick={() => nav({ to: "/app/create" })}
              tooltip="Quick Create"
              className={`min-w-8 duration-200 ease-linear ${
                isActive("/app/create")
                  ? "bg-primary text-primary-foreground" // no hover changes
                  : "bg-transparent text-muted-foreground hover:bg-muted/50"
              }`}
            >
              <IconCirclePlusFilled />
              <span>Create Link</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map(item => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                onClick={() => nav({ to: item.path })}
                tooltip={item.title}
                className={`min-w-8 duration-200 ease-linear ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground" // no hover changes
                    : "bg-transparent text-muted-foreground hover:bg-muted/50"
                }`}
              >
                {item.icon && <item.icon />}
                <span>{item.title}</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
