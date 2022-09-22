export function sharedModal(): string {
  return 'shared-modal';
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export interface UserListType {
  name: string;
  email: string;
  country_code: string;
  phone: string;
  passport_number: string;
  id: string;
  last_login: string;
  member_level: UserMemberLevelType;
  created_at: string;
  updated_at: string;
}

export interface UserMemberLevelType {
  group_id: string;
  name: string;
  user_level_id: string;
}

export interface MediaDetailType {
  caption: string;
  created_at: any | null;
  id: string;
  image_name: string;
  image_url: string;
  updated_at: string;
}
