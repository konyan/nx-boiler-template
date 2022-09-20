import { FormInput } from '@dh-ticketing/shared/ui';

/* eslint-disable-next-line */
export interface CheckboxListProps {
  list: any;
  onChange: any;
}

export function VariantList({ list, onChange }: CheckboxListProps) {
  return (
    <div>
      <div className="mt-4 divide-y divide-gray-200 border-b border-gray-200">
        {list.map((item: any, Idx: number) => (
          <div key={Idx} className="relative grid grid-cols-2 items-start py-4">
            <div className="ml-3 mt-7 flex h-5 items-center">
              <input
                id={`-${item.id}`}
                name={`person-${item.id}`}
                type="checkbox"
                checked={item.checked}
                onChange={() => {
                  onChange({ ...item, checked: !item?.checked });
                }}
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <div className="ml-5">
                <label
                  htmlFor={`person-${item.id}`}
                  className="select-none font-medium text-gray-700"
                >
                  {item.name}
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <FormInput
                id={`-${item.id}`}
                name={`person-${item.id}`}
                type="text"
                checked={item.checked}
                label="Price"
                onChange={() => {
                  onChange({ ...item, checked: !item?.checked });
                }}
                className=" rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <FormInput
                id={`-${item.id}`}
                name={`person-${item.id}`}
                type="text"
                checked={item.checked}
                onChange={() => {
                  onChange({ ...item, checked: !item?.checked });
                }}
                label="Quantity"
                className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VariantList;
