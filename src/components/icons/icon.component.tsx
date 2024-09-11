import { Icons } from "./icons.enum";
import { MappedIcons } from "./mapped-icons";

interface IconComponentProps {
    icon: Icons;
    width?: number;
    height?: number;
    fill?: string;
  }
  
const IconComponent: React.FC<IconComponentProps> = ({ icon, width = 32, height = 32, fill = 'currentColor' }) => {
    const SvgIcon = MappedIcons[icon];
  
    if (!SvgIcon) {
      return null; // or return a default icon or error
    }
  
    return <SvgIcon width={width} height={height} fill={fill} />;
  };
  
  export default IconComponent;