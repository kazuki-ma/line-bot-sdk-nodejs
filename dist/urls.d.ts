export declare const reply: string;
export declare const push: string;
export declare const multicast: string;
export declare const content: (messageId: string) => string;
export declare const profile: (userId: string) => string;
export declare const groupMemberProfile: (groupId: string, userId: string) => string;
export declare const roomMemberProfile: (roomId: string, userId: string) => string;
export declare const groupMemberIds: (groupId: string, start?: string) => string;
export declare const roomMemberIds: (roomId: string, start?: string) => string;
export declare const leaveGroup: (groupId: string) => string;
export declare const leaveRoom: (roomId: string) => string;
export declare const richMenu: (richMenuId?: string) => string;
export declare const richMenuList: () => string;
export declare const userRichMenu: (userId: string, richMenuId?: string) => string;
export declare const richMenuContent: (richMenuId: string) => string;
