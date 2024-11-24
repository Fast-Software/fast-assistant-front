import { IKey } from "../../settings/interfaces/key.interface";

export interface IAssistant {
  id: string;
  name: string;
  hashcode: string;
  is_private: boolean;
  documents: unknown[];
  service_id: number;
  service: IKey;
}
