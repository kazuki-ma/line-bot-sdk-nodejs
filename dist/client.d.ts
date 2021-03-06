/// <reference types="node" />
import { Readable } from "stream";
import * as Types from "./types";
export default class Client {
    config: Types.ClientConfig;
    constructor(config: Types.ClientConfig);
    pushMessage(to: string, messages: Types.Message | Types.Message[]): Promise<any>;
    replyMessage(replyToken: string, messages: Types.Message | Types.Message[]): Promise<any>;
    multicast(to: string[], messages: Types.Message | Types.Message[]): Promise<any>;
    getProfile(userId: string): Promise<Types.Profile>;
    getGroupMemberProfile(groupId: string, userId: string): Promise<Types.Profile>;
    getRoomMemberProfile(roomId: string, userId: string): Promise<Types.Profile>;
    getGroupMemberIds(groupId: string): Promise<string[]>;
    getRoomMemberIds(roomId: string): Promise<string[]>;
    getMessageContent(messageId: string): Promise<Readable>;
    leaveGroup(groupId: string): Promise<any>;
    leaveRoom(roomId: string): Promise<any>;
    getRichMenu(richMenuId: string): Promise<Types.RichMenuResponse>;
    createRichMenu(richMenu: Types.RichMenu): Promise<string>;
    deleteRichMenu(richMenuId: string): Promise<any>;
    getRichMenuIdOfUser(userId: string): Promise<string>;
    linkRichMenuToUser(userId: string, richMenuId: string): Promise<any>;
    unlinkRichMenuFromUser(userId: string): Promise<any>;
    getRichMenuImage(richMenuId: string): Promise<Readable>;
    setRichMenuImage(richMenuId: string, data: Buffer | Readable, contentType?: string): Promise<any>;
    getRichMenuList(): Promise<Array<Types.RichMenuResponse>>;
    private authHeader;
    private delete;
    private get;
    private post;
    private postBinary;
    private stream;
}
