import type { MembershipRole } from '../auth/roles';

export type OrganizationDTO = {
  id: string;
  name: string;
  slug: string;
  createdAt: string; // ISO
};

export type MembershipDTO = {
  orgId: string;
  userId: string;
  role: MembershipRole;
  status: 'ACTIVE' | 'PENDING';
};

export type CreateOrgRequestDTO = {
  name: string;
};

export type CreateOrgResponseDTO = {
  org: OrganizationDTO;
};

export type InviteMemberRequestDTO = {
  email: string;
  role: MembershipRole;
};

export type InviteMemberResponseDTO = {
  inviteId: string;
};
