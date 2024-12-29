import { cn } from '@/lib/utils';
import { Waypoints } from 'lucide-react';
// eslint-disable-next-line no-unused-vars
function Logo({ className, children, ...props }) {
  return (
    <span
      className={cn(
        'text-gray-800 text-2xl inline-flex items-center text-current',
        className
      )}
      {...props}
    >
      <Waypoints strokeWidth="2.75" size="24" />
      <span className="ml-1 font-bold uppercase">ЯРУСарня</span>
    </span>
  );
}

export default Logo;
