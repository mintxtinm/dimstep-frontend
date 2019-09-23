interface Field {
  title: string;
  type: string;
  name: string;
  disabled?: boolean;
  dense?: boolean;
  list?: [];
}

interface Template {
  name: string;
  field: { data: Field[] };
  type: string;
  locked: boolean;
}

interface Sheet {
  id: string;
  name: string;
  projectID?: string;
  templateID?: string;
  userID?: string;
  updatedAt?: string;
  craetedAt?: string;
  content: any;
  target: string;
}

export { Field, Template, Sheet };
