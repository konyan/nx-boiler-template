export function sharedModal(): string {
  return 'shared-modal';
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
