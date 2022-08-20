export interface ButtonProps {
  type?: "button";
  text: string;
  disabled?: boolean;
  value?: string;
  onClick(): void;
}
