import { 
    ArrowLeftIcon, 
    ArrowRightIcon, 
    CalendarIcon, 
    GroupIcon, 
    PartyIcon, 
    RingIcon, 
    ComissionsIcon,
    PlannerIcon,
    TimerIcon,
 } from "./icons-svgs";
import { Icons } from "./icons.enum";

export const MappedIcons = {
    [Icons.Group]: GroupIcon,
    [Icons.Party]: PartyIcon,
    [Icons.Ring]: RingIcon,
    [Icons.ArrowRight]: ArrowRightIcon,
    [Icons.ArrowLeft]: ArrowLeftIcon,
    [Icons.Calendar]: CalendarIcon,
    [Icons.Comissions]: ComissionsIcon,
    [Icons.Planner]: PlannerIcon,
    [Icons.Timer]: TimerIcon,
}