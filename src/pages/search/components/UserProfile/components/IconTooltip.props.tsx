export interface TooltipProps {
  title: string;
  disabled: boolean;
  onClick: () => void;
  children: string | JSX.Element | JSX.Element[];
}
