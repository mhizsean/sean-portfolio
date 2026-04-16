type IconProps = {
  size?: number;
  className?: string;
};

/** Dev.to wordmark (currentColor; matches Simple Icons devdotto shape). */
export function DevToIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M0 9.032v6.07h1.506v3.988a.59.59 0 00.59.59h2.065V9.032H0zm6.293 0v9.648h2.065V9.032H6.293zm5.46 0v9.648H18.29a2.955 2.955 0 002.956-2.956V11.99a2.956 2.956 0 00-2.956-2.957H11.753zm2.065 2.065h1.506a.89.89 0 01.89.89v3.736a.89.89 0 01-.89.89h-1.506V11.097z" />
    </svg>
  );
}

/** Medium logomark (currentColor; three dots). */
export function MediumIcon({ size = 24, className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M13.54 12a6.76 6.76 0 01-6.82-6.82A6.76 6.76 0 0113.54 12zM0 12a6.76 6.76 0 016.82-6.82A6.76 6.76 0 016.82 12 6.76 6.76 0 010 12zm20.93 0a3.26 3.26 0 01-3.26 3.26 3.26 3.26 0 010-6.52 3.26 3.26 0 013.26 3.26z" />
    </svg>
  );
}
