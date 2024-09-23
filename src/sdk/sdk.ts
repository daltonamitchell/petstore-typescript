/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Pet } from "./pet.js";
import { Store } from "./store.js";
import { User } from "./user.js";

export class Petstore extends ClientSDK {
  private _pet?: Pet;
  get pet(): Pet {
    return (this._pet ??= new Pet(this._options));
  }

  private _store?: Store;
  get store(): Store {
    return (this._store ??= new Store(this._options));
  }

  private _user?: User;
  get user(): User {
    return (this._user ??= new User(this._options));
  }
}
