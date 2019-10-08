interface Group {
  id: string;
  name: string;
  description: string;
  member: {
    data: [];
  };
  createdAt: string;
}

interface GroupMember {
  userID: string;
  nickName: string;
  headImgURL: string;
  tags: string[];
}

export { Group, GroupMember };