/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { petDelete } from "../funcs/petDelete.js";
import { petFindByStatus } from "../funcs/petFindByStatus.js";
import { petFindByTags } from "../funcs/petFindByTags.js";
import { petGetById } from "../funcs/petGetById.js";
import { petUpdate } from "../funcs/petUpdate.js";
import { petUploadFile } from "../funcs/petUploadFile.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Pet extends ClientSDK {
  /**
   * Update an existing pet
   *
   * @remarks
   * Update an existing pet by Id
   */
  async update(
    request: components.Pet,
    options?: RequestOptions,
  ): Promise<components.Pet> {
    return unwrapAsync(petUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Finds Pets by status
   *
   * @remarks
   * Multiple status values can be provided with comma separated strings
   */
  async findByStatus(
    request: operations.FindPetsByStatusRequest,
    options?: RequestOptions,
  ): Promise<Array<components.Pet>> {
    return unwrapAsync(petFindByStatus(
      this,
      request,
      options,
    ));
  }

  /**
   * Finds Pets by tags
   *
   * @remarks
   * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
   */
  async findByTags(
    request: operations.FindPetsByTagsRequest,
    options?: RequestOptions,
  ): Promise<Array<components.Pet>> {
    return unwrapAsync(petFindByTags(
      this,
      request,
      options,
    ));
  }

  /**
   * Find pet by ID
   *
   * @remarks
   * Returns a single pet
   */
  async getById(
    request: operations.GetPetByIdRequest,
    options?: RequestOptions,
  ): Promise<components.Pet> {
    return unwrapAsync(petGetById(
      this,
      request,
      options,
    ));
  }

  /**
   * Deletes a pet
   */
  async delete(
    request: operations.DeletePetRequest,
    options?: RequestOptions,
  ): Promise<components.Pet> {
    return unwrapAsync(petDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * uploads an image
   */
  async uploadFile(
    request: operations.UploadFileRequest,
    options?: RequestOptions,
  ): Promise<components.ApiResponse> {
    return unwrapAsync(petUploadFile(
      this,
      request,
      options,
    ));
  }
}
