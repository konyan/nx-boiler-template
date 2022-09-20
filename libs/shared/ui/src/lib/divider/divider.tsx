/* eslint-disable-next-line */
export interface DividerProps {
  type?: string;
  text?: string;
  icon?: string;
}

export function Divider({
  type = 'label',
  text,
  icon,
  ...props
}: DividerProps) {
  const Label = ({ text }: { text?: string }) => (
    <div className="relative my-4">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-2 text-sm text-gray-500">{text}</span>
      </div>
    </div>
  );

  switch (type) {
    case 'label':
      return <Label text={text} />;
    default:
      return <Label />;
  }
}

export default Divider;
