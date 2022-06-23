import React, { SVGProps } from 'react';

export function SlackIcon(props: SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg width={25} height={25} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12.5 0C5.597 0 0 5.597 0 12.5S5.597 25 12.5 25 25 19.403 25 12.5 19.403 0 12.5 0ZM8.3 14.403a1.405 1.405 0 0 1-2.396.993 1.405 1.405 0 0 1 .993-2.4h1.404v1.407Zm3.74 3.75c0 .776-.628 1.406-1.404 1.406-.776 0-1.403-.63-1.403-1.406v-3.75a1.405 1.405 0 0 1 2.396-.993c.266.265.41.622.41.993v3.75Zm-1.401-6.094H6.9c-.776 0-1.403-.63-1.403-1.406 0-.776.627-1.406 1.403-1.406h3.739a1.407 1.407 0 0 1 0 2.813Zm0-3.75a1.405 1.405 0 0 1-1.404-1.406c0-.776.628-1.406 1.404-1.406.776 0 1.403.63 1.403 1.406v1.406H10.64Zm2.335-1.406c0-.776.628-1.406 1.404-1.406.775 0 1.403.63 1.403 1.406v3.75c0 .776-.628 1.406-1.403 1.406-.776 0-1.404-.63-1.404-1.406v-3.75Zm1.404 12.656c-.776 0-1.404-.63-1.404-1.406v-1.406h1.404c.775 0 1.403.63 1.403 1.406 0 .776-.628 1.406-1.403 1.406Zm3.739-3.75h-3.74a1.405 1.405 0 0 1-1.403-1.406c0-.776.628-1.406 1.404-1.406h3.739c.775 0 1.403.63 1.403 1.406 0 .776-.628 1.406-1.403 1.406Zm0-3.75h-1.404v-1.406c0-.776.628-1.406 1.404-1.406.775 0 1.403.63 1.403 1.406 0 .776-.628 1.406-1.403 1.406Z"
        fill="#6B7280"
      />
    </svg>
  );
}

export default SlackIcon;
