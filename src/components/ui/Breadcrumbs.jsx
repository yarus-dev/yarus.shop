import { cn } from '@/lib/utils';

export function Breadcrumbs({ Children, className }) {
  return (
    <nav aria-label="Breadcrumb" className={cn(className)}>
      <ol
        role="list"
        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        {Children}
      </ol>
    </nav>
  );
}

Breadcrumbs.Item = BreadcrumbsItem;

export function BreadcrumbsItem({ key, link, title, className, ...props }) {
  return (
    <li key={key} className={cn('flex items-center', className)} {...props}>
      <a href={link} className="mr-2 text-sm font-medium text-gray-900">
        {title}
      </a>
      <svg
        fill="currentColor"
        width={16}
        height={20}
        viewBox="0 0 16 20"
        aria-hidden="true"
        className="h-5 w-4 text-gray-300"
      >
        <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
      </svg>
    </li>
  );
}
